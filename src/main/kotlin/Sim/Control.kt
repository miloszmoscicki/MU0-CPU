package Sim

import syscallPrintFloat
import syscallPrintInt
import syscallPrintString

/**
 * Enum representing each component that can be associated with simulators action,
 * used for tracking simulator flow and representing it with a diagram
 */
enum class ACTION_BLOCK{
    ACC,
    ALU,
    CON,
    IR,
    MAR,
    MDR,
    MEM,
    PC,
    MEMMDR,
    MARMEM,
    MDRACC,
    ACCALU,
    ALUACC,
    MDRALU,
    MDRIR,
    IRMAR,
    IRCON,
    PCMAR,
    IRPC,
    IRALU
}

/**
 * Represents a store isntruction effect, used to provide updates to memory window
 */
data class MemUpdate(var storeAddress: Int?, var storeValue: Short?)

/**
 * Controls the flow of the processor, fetches and executes instructions
 */
class Control constructor(mem: ShortArray){

    init {
        Memory.arr = mem
    }

    /**
     * Registers port connections between block components
     */
    fun setupComponents(){
        resetComponents()
        registerConnection(PC, MAR)
        registerConnection(MDR, IR)
        registerConnection(IR,MAR)
        registerConnection(ACC, MDR)
        registerConnection(MDR, ALU)
        registerConnection(ACC, ALU)
        registerConnection(MDR, ACC)
        registerConnection(ALU, ACC)
        registerConnection(IR, PC)
        registerConnection(IR, ALU)
    }

    /**
     * Provides information about visited blocks and internal value changes to be used for building a diagram
     */
    data class ProcessorStateChange(val visitedComponents: MutableList<ACTION_BLOCK>, var componentToReadValue: MutableMap<String, Int>)

    /**
     * Perfrom fetch cycle
     * @return ProcessorStateChange explaining performed actions
     */
    fun fetchCycle(): ProcessorStateChange {
        var visitiedComponents = mutableListOf<ACTION_BLOCK>()
        var componentToReadValue = mutableMapOf<String, Int>()

        // if we have an outstanding ALU op from previous execute
        if(MDR.currentState == MDR_STATE.ALU_OP){
            componentToReadValue["ALU"] = ALU.posEdge()
            ACC.currentState = ACC_STATE.LOAD
            componentToReadValue["ACC"] = ACC.posEdge()
            visitiedComponents.addAll(listOf(ACTION_BLOCK.MDR, ACTION_BLOCK.MDRALU, ACTION_BLOCK.ALU, ACTION_BLOCK.ALUACC, ACTION_BLOCK.ACC))
        }

        // if we have an outstanding load we need to read data in ACC
        else if(MDR.currentState == MDR_STATE.LOAD){
            componentToReadValue["ACC"] = ACC.posEdge()
            visitiedComponents.addAll(listOf(ACTION_BLOCK.ACC));
        }

        // if we have an outstanding jump
        else if(ACC.currentState == ACC_STATE.JUMP){
            componentToReadValue["ACC"] = ACC.posEdge()
            componentToReadValue["MDR"] = MDR.posEdge()
            IR.currentState = IR_STATE.PC
            componentToReadValue["IR"] = IR.posEdge()
            visitiedComponents.addAll(listOf(ACTION_BLOCK.ACC, ACTION_BLOCK.MDRACC, ACTION_BLOCK.MDR,
                ACTION_BLOCK.MDRIR, ACTION_BLOCK.IR))
        }

        // standard fetch, get set fetch address and fetch from there into MDR
        componentToReadValue["PC"] = PC.posEdge()
        componentToReadValue["MAR"] = MAR.posEdge()
        MDR.currentState = MDR_STATE.FETCH
        componentToReadValue["MDR"] = MDR.negEdge()
        componentToReadValue["IR"] = componentToReadValue["MDR"]!!.toInt()

        visitiedComponents.addAll(listOf(ACTION_BLOCK.PC, ACTION_BLOCK.PCMAR, ACTION_BLOCK.MAR,
            ACTION_BLOCK.MARMEM, ACTION_BLOCK.MEM, ACTION_BLOCK.MEMMDR, ACTION_BLOCK.MDR, ACTION_BLOCK.MDRIR, ACTION_BLOCK.IR, ACTION_BLOCK.IRCON))
        return ProcessorStateChange(visitiedComponents, componentToReadValue)
    }

    /**
     * Performs execute cycle
     * @return InstructionEffect
     */
    fun executeCycle(): InstructionEffect {
        return decodeAndExec(IR.getOpcode())
    }

    /**
     * Describes the effect of an isntruction
     */
    data class InstructionEffect(var log:String, var pcJump: Int, val memUpdate: MemUpdate, val processorStateChange: ProcessorStateChange)

    private fun decodeAndExec(opcode: UShort): InstructionEffect {
        val operandSaveForLogging = IR.getOperand()

        // needed for the memory and editor window
        var retVal = InstructionEffect("",1, MemUpdate(null, null),
            ProcessorStateChange(mutableListOf(ACTION_BLOCK.CON), mutableMapOf<String, Int>()))

        val aluOpComponents = listOf(ACTION_BLOCK.IR, ACTION_BLOCK.IRMAR, ACTION_BLOCK.MAR, ACTION_BLOCK.MARMEM, ACTION_BLOCK.ACC,
            ACTION_BLOCK.ACCALU, ACTION_BLOCK.ALU, ACTION_BLOCK.MDR, ACTION_BLOCK.MEMMDR, ACTION_BLOCK.MEM, ACTION_BLOCK.MEMMDR)

        val jumpComponents = listOf(ACTION_BLOCK.IR, ACTION_BLOCK.IRALU, ACTION_BLOCK.ACC, ACTION_BLOCK.ACCALU,
            ACTION_BLOCK.ALU, ACTION_BLOCK.ACCALU)

        // decode
        when (opcode.toInt()) {
            // LDW
            0 -> {
                retVal.processorStateChange.componentToReadValue = executeLoad()
                retVal.processorStateChange.visitedComponents.addAll(listOf(ACTION_BLOCK.IR, ACTION_BLOCK.IRMAR, ACTION_BLOCK.MAR, ACTION_BLOCK.MARMEM,
                    ACTION_BLOCK.MEM, ACTION_BLOCK.MEMMDR, ACTION_BLOCK.MDR, ACTION_BLOCK.MDRACC, ACTION_BLOCK.ACC))
                retVal.log = ("MEM[${operandSaveForLogging}] -> ACC\n")

            }
            // STO
            1 -> {
                retVal.processorStateChange.componentToReadValue = executeStore()
                retVal.processorStateChange.visitedComponents.addAll(listOf(ACTION_BLOCK.IR, ACTION_BLOCK.IRMAR, ACTION_BLOCK.MAR,
                    ACTION_BLOCK.MARMEM, ACTION_BLOCK.MEM, ACTION_BLOCK.ACC, ACTION_BLOCK.MDRACC,
                    ACTION_BLOCK.MDR, ACTION_BLOCK.MEMMDR, ACTION_BLOCK.MEM))
                retVal.log = ("MEM[${operandSaveForLogging}] <- ${ACC.data}\n")
                retVal.memUpdate.storeAddress = operandSaveForLogging.toInt()
                retVal.memUpdate.storeValue = ACC.data

            }
            // ADD
            2 -> {
                retVal.processorStateChange.componentToReadValue = executeAluOp(ALU_OP.ADD)
                retVal.processorStateChange.visitedComponents.addAll(aluOpComponents)
                retVal.log = ("ACC + MEM[${operandSaveForLogging}] -> ACC\n")
            }
            // SUB
            3 -> {
                retVal.processorStateChange.componentToReadValue = executeAluOp(ALU_OP.SUBSTRACT)
                retVal.processorStateChange.visitedComponents.addAll(aluOpComponents)
                retVal.log = ("ACC - MEM[${operandSaveForLogging}] -> ACC\n")
            }
            // JMP
            4 -> {
                retVal.log = ("${operandSaveForLogging} -> PC\n")
                retVal.pcJump = ((operandSaveForLogging - (PC.content - 1)).toInt())
                retVal.processorStateChange.visitedComponents.addAll(jumpComponents)
                retVal.processorStateChange.componentToReadValue = executeJump(ALU_OP.JMP)

            }
            //JGE
            5 -> {
                if (ACC.data >= 0) {
                    retVal.log = ("${operandSaveForLogging} -> PC\n")
                    retVal.pcJump = ((operandSaveForLogging - (PC.content - 1)).toInt())
                }else{
                    retVal.log = "NOP\n"
                }
                retVal.processorStateChange.visitedComponents.addAll(jumpComponents)
                retVal.processorStateChange.componentToReadValue = executeJump(ALU_OP.JGE)

            }
            // JNE
            6 -> {
                if (ACC.data != 0.toShort()) {
                    retVal.log = ("${operandSaveForLogging} -> PC\n")
                    retVal.pcJump = ((operandSaveForLogging - (PC.content - 1)).toInt())
                }
                else{
                    retVal.log = "NOP\n"
                }
                retVal.processorStateChange.visitedComponents.addAll(jumpComponents)
                retVal.processorStateChange.componentToReadValue = executeJump(ALU_OP.JNE)
            }
            // STP
            7 -> {
                retVal.log =  ("break\n")
            }
            // LDI
            8 -> {
                retVal.processorStateChange.componentToReadValue= executeLoadImmediate()
                retVal.processorStateChange.visitedComponents.addAll(listOf(ACTION_BLOCK.IR, ACTION_BLOCK.IRALU, ACTION_BLOCK.ALU, ACTION_BLOCK.ALUACC, ACTION_BLOCK.ACC))
                retVal.log = ("${operandSaveForLogging} -> ACC\n")
            }
            // MUL
            9 -> {
                retVal.processorStateChange.componentToReadValue = executeAluOp(ALU_OP.MULTIPLY)
                retVal.processorStateChange.visitedComponents.addAll(aluOpComponents)
                retVal.log = ("ACC * MEM[${operandSaveForLogging}] -> ACC\n")
            }
            // DIV
            10 -> {
                retVal.processorStateChange.componentToReadValue = executeAluOp(ALU_OP.DIVIDE)
                retVal.processorStateChange.visitedComponents.addAll(aluOpComponents)
                retVal.log = ("ACC / MEM[${operandSaveForLogging}] -> ACC\n")
            }
            // AND
            11 -> {
                retVal.processorStateChange.componentToReadValue = executeAluOp(ALU_OP.AND)
                retVal.processorStateChange.visitedComponents.addAll(aluOpComponents)
                retVal.log = ("ACC AND MEM[${operandSaveForLogging}] -> ACC\n")
            }
            // OR
            12 -> {
                retVal.processorStateChange.componentToReadValue =executeAluOp(ALU_OP.OR)
                retVal.processorStateChange.visitedComponents.addAll(aluOpComponents)
                retVal.log = ("ACC OR MEM[${operandSaveForLogging}] -> ACC\n")
            }
            // syscall
            13 -> {
               executeSyscall(SyscallTypes.fromInt(ACC.data.toInt()), (IR.getOperand()))
                retVal.log = ("syscall\n")
            }
            // NOP
            14 ->{
                retVal.log = "NOP\n"
            }
            else -> {
            }
        }
        return retVal
    }

    /**
     * Performs operations for cpu ALU operation
     * @param operation to be performed
     * @return mutableMap<String, Int> componentToReadValue maps the block name to read value
     */
    private fun executeAluOp(operation: ALU_OP): MutableMap<String, Int>{
        val componentToReadValue = mutableMapOf<String, Int>()
        IR.currentState = IR_STATE.MAR
        componentToReadValue["IR"] = IR.posEdge()
        componentToReadValue["MAR"] = MAR.posEdge()
        MDR.currentState = MDR_STATE.ALU_OP
        ACC.currentState = ACC_STATE.ALU_OP
        componentToReadValue["ACC"] = ACC.posEdge()
        ALU.currentOp = operation
        componentToReadValue["ALU"] = ALU.posEdge()
        componentToReadValue["MDR"] = MDR.negEdge()
        return componentToReadValue
    }

    /**
     * Performs operations for cpu JUMP operation
     * @param operation to be performed
     * @return mutableMap<String, Int> componentToReadValue maps the block name to read value
     */
    private fun executeJump(operation: ALU_OP): MutableMap<String, Int>{
        val componentToReadValue = mutableMapOf<String, Int>()
        componentToReadValue["IR"] = IR.posEdge()
        ACC.currentState = ACC_STATE.ALU_OP
        componentToReadValue["ACC"] = ACC.posEdge()
        ALU.currentOp = operation
        componentToReadValue["ALU"] =  ALU.posEdge()
        ACC.currentState = ACC_STATE.JUMP
        return componentToReadValue
    }

    /**
     * Executes LDI instruction
     * @return mutableMap<String, Int> componentToReadValue maps the block name to read value
     */
    private fun executeLoadImmediate(): MutableMap<String, Int> {
        var componentToReadValue = mutableMapOf<String, Int>()
        IR.currentState = IR_STATE.ALU
        componentToReadValue["IR"] = IR.posEdge()
        IR.currentState = IR_STATE.NONE
        ALU.currentOp = ALU_OP.LDI
        componentToReadValue["ALU"] = ALU.posEdge()
        ACC.currentState = ACC_STATE.LOAD
        componentToReadValue["ACC"] = ACC.posEdge()
        return componentToReadValue
    }


    /**
     * Executes LDW instruction
     * @return mutableMap<String, Int> componentToReadValue maps the block name to read value
     */
    private fun executeLoad(): MutableMap<String, Int> {
        var componentToReadValue = mutableMapOf<String, Int>()
        IR.currentState = IR_STATE.MAR
        componentToReadValue["IR"] = IR.posEdge()
        componentToReadValue["MAR"] = MAR.posEdge()
        MDR.currentState = MDR_STATE.LOAD
        ACC.currentState = ACC_STATE.LOAD
        MDR.negEdge()
        componentToReadValue["MDR"] = MDR.negEdge()
        return componentToReadValue
    }

    /**
     * Executes STO instruction
     * @return mutableMap<String, Int> componentToReadValue maps the block name to read value
     */
    private fun executeStore(): MutableMap<String, Int> {
        var componentToReadValue = mutableMapOf<String, Int>()
        IR.currentState = IR_STATE.MAR
        componentToReadValue["IR"] = IR.posEdge()
        componentToReadValue["MAR"] = MAR.posEdge()
        ACC.currentState = ACC_STATE.STORE
        componentToReadValue["ACC"] = ACC.posEdge()
        MDR.currentState = MDR_STATE.STORE
        componentToReadValue["MDR"] = MDR.negEdge()
        return componentToReadValue
    }

    /**
     * Registers hardware connection between two blocks
     */
    private fun registerConnection(a: HardwareBlock, b:HardwareBlock){
        a.registerOutputConnection(b)
    }

    /**
     * Represents different syscall operations mapped to their index corresponding
     * to the value of ACC which needs to be present in order to perform a relevant operation
     */
    enum class SyscallTypes(val value: Int){
        PRINT_INT(0),
        PRINT_FLOAT(1),
        PRINT_STRING(2);

        companion object {
            fun fromInt(value: Int) = values().first { it.value == value }
        }
    }

    /**
     * Executes a syscall instruction based on the @param type of the operation and @param arg the memory address
     */
    private fun executeSyscall(type: SyscallTypes, arg: Short){
        when(type){
            SyscallTypes.PRINT_INT -> {
                syscallPrintInt(arg)
            }
            SyscallTypes.PRINT_FLOAT -> {
                syscallPrintFloat(arg)
            }
            SyscallTypes.PRINT_STRING -> {
                syscallPrintString(arg)
            }
        }
    }

    /**
     * Calls reset function on all blocks
     */
    private fun resetComponents(){
        PC.reset()
        ACC.reset()
        ALU.reset()
        IR.reset()
        MAR.reset()
        MDR.reset()
        PC.reset()
    }
}