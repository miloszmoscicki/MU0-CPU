package Sim

import MemUpdate
import syscallPrintFloat
import syscallPrintInt
import syscallPrintString

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


class Control @OptIn(ExperimentalUnsignedTypes::class) constructor(mem: UShortArray){

    init {
        Memory.arr = mem
    }

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

    data class ProcessorStateChange(val visitedComponents: MutableList<ACTION_BLOCK>, var componentToReadValue: MutableMap<String, Int>)

    fun fetchCycle(): ProcessorStateChange {
        var visitiedComponents = mutableListOf<ACTION_BLOCK>()
        var componentToReadValue = mutableMapOf<String, Int>()
        if(MDR.currentState == MDR_STATE.ALU_OP){
            componentToReadValue["ALU"] = ALU.posEdge()
            ACC.currentState = ACC_STATE.LOAD
            componentToReadValue["ACC"] = ACC.posEdge()
            visitiedComponents.addAll(listOf(ACTION_BLOCK.MDR, ACTION_BLOCK.MDRALU, ACTION_BLOCK.ALU, ACTION_BLOCK.ALUACC, ACTION_BLOCK.ACC))
        }
        else if(MDR.currentState == MDR_STATE.LOAD){
            componentToReadValue["ACC"] = ACC.posEdge()
            visitiedComponents.addAll(listOf(ACTION_BLOCK.ACC));
        }
        else if(IR.currentState == IR_STATE.ALU){
            componentToReadValue["ALU"] = ALU.posEdge()
            IR.currentState = IR_STATE.NONE
            visitiedComponents.addAll(listOf(ACTION_BLOCK.MDRALU, ACTION_BLOCK.ALU))
        }
        else if(ACC.currentState == ACC_STATE.JUMP){
            componentToReadValue["ACC"] = ACC.posEdge()
            componentToReadValue["MDR"] = MDR.posEdge()
            IR.currentState = IR_STATE.PC
            componentToReadValue["IR"] = IR.posEdge()
            visitiedComponents.addAll(listOf(ACTION_BLOCK.ACC, ACTION_BLOCK.MDRACC, ACTION_BLOCK.MDR,
                ACTION_BLOCK.MDRIR, ACTION_BLOCK.IR))
        }
        componentToReadValue["PC"] = PC.posEdge()
        componentToReadValue["MAR"] = MAR.posEdge()
        MDR.currentState = MDR_STATE.FETCH
        componentToReadValue["MDR"] = MDR.negEdge()
        componentToReadValue["IR"] = componentToReadValue["MDR"]!!.toInt()

        visitiedComponents.addAll(listOf(ACTION_BLOCK.PC, ACTION_BLOCK.PCMAR, ACTION_BLOCK.MAR,
            ACTION_BLOCK.MARMEM, ACTION_BLOCK.MEM, ACTION_BLOCK.MEMMDR, ACTION_BLOCK.MDR, ACTION_BLOCK.MDRIR, ACTION_BLOCK.IR, ACTION_BLOCK.IRCON))
        return ProcessorStateChange(visitiedComponents, componentToReadValue)
    }

    fun executeCycle(): InstructionEffect {
        return decodeAndExec(IR.getOpcode())
    }

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

        when (opcode.toInt()) {
            0 -> {
                retVal.processorStateChange.componentToReadValue = executeLoad()
                retVal.processorStateChange.visitedComponents.addAll(listOf(ACTION_BLOCK.IR, ACTION_BLOCK.IRMAR, ACTION_BLOCK.MAR, ACTION_BLOCK.MARMEM,
                    ACTION_BLOCK.MEM, ACTION_BLOCK.MEMMDR, ACTION_BLOCK.MDR, ACTION_BLOCK.MDRACC, ACTION_BLOCK.ACC))
                retVal.log = ("MEM[${operandSaveForLogging}] -> ACC\n")

            }
            1 -> {
                retVal.processorStateChange.componentToReadValue = executeStore()
                retVal.processorStateChange.visitedComponents.addAll(listOf(ACTION_BLOCK.IR, ACTION_BLOCK.IRMAR, ACTION_BLOCK.MAR,
                    ACTION_BLOCK.MARMEM, ACTION_BLOCK.MEM, ACTION_BLOCK.ACC, ACTION_BLOCK.MDRACC,
                    ACTION_BLOCK.MDR, ACTION_BLOCK.MEMMDR, ACTION_BLOCK.MEM))
                retVal.log = ("MEM[${operandSaveForLogging}] <- ${ACC.data}\n")
                retVal.memUpdate.storeAddress = operandSaveForLogging.toInt()
                retVal.memUpdate.storeValue = ACC.data

            }
            2 -> {
                retVal.processorStateChange.componentToReadValue = executeAluOp(ALU_OP.ADD)
                retVal.processorStateChange.visitedComponents.addAll(aluOpComponents)
                retVal.log = ("ACC + MEM[${operandSaveForLogging}] -> ACC\n")
            }
            3 -> {
                retVal.processorStateChange.componentToReadValue = executeAluOp(ALU_OP.SUBSTRACT)
                retVal.processorStateChange.visitedComponents.addAll(aluOpComponents)
                retVal.log = ("ACC - MEM[${operandSaveForLogging}] -> ACC\n")
            }
            4 -> {
                retVal.log = ("${operandSaveForLogging} -> PC\n")
                retVal.pcJump = ((operandSaveForLogging - (PC.content - 1u)).toInt())
                retVal.processorStateChange.visitedComponents.addAll(jumpComponents)
                retVal.processorStateChange.componentToReadValue = executeJump(ALU_OP.JMP)

            }
            5 -> {
                if (ACC.data >= 0U) {
                    retVal.log = ("${operandSaveForLogging} -> PC\n")
                    retVal.pcJump = ((operandSaveForLogging - (PC.content - 1u)).toInt())
                }else{
                    retVal.log = "NOP\n"
                }
                retVal.processorStateChange.visitedComponents.addAll(jumpComponents)
                retVal.processorStateChange.componentToReadValue = executeJump(ALU_OP.JGE)

            }
            6 -> {
                if (ACC.data != 0U.toUShort()) {
                    retVal.log = ("${operandSaveForLogging} -> PC\n")
                    retVal.pcJump = ((operandSaveForLogging - (PC.content - 1u)).toInt())
                }
                else{
                    retVal.log = "NOP\n"
                }
                retVal.processorStateChange.visitedComponents.addAll(jumpComponents)
                retVal.processorStateChange.componentToReadValue = executeJump(ALU_OP.JNE)
            }
            7 -> {
                retVal.log =  ("break\n")
            }
            8 -> {
                retVal.processorStateChange.componentToReadValue= executeLoadImmediate()
                retVal.processorStateChange.visitedComponents.addAll(listOf(ACTION_BLOCK.IR, ACTION_BLOCK.IRALU, ACTION_BLOCK.ALU, ACTION_BLOCK.ALUACC, ACTION_BLOCK.ACC))
                retVal.log = ("${operandSaveForLogging} -> ACC\n")
            }
            9 -> {
                retVal.processorStateChange.componentToReadValue = executeAluOp(ALU_OP.MULTIPLY)
                retVal.processorStateChange.visitedComponents.addAll(aluOpComponents)
                retVal.log = ("ACC * MEM[${operandSaveForLogging}] -> ACC\n")
            }
            10 -> {
                retVal.processorStateChange.componentToReadValue = executeAluOp(ALU_OP.DIVIDE)
                retVal.processorStateChange.visitedComponents.addAll(aluOpComponents)
                retVal.log = ("ACC / MEM[${operandSaveForLogging}] -> ACC\n")
            }
            11 -> {
                retVal.processorStateChange.componentToReadValue = executeAluOp(ALU_OP.AND)
                retVal.processorStateChange.visitedComponents.addAll(aluOpComponents)
                retVal.log = ("ACC AND MEM[${operandSaveForLogging}] -> ACC\n")
            }
            12 -> {
                retVal.processorStateChange.componentToReadValue =executeAluOp(ALU_OP.OR)
                retVal.processorStateChange.visitedComponents.addAll(aluOpComponents)
                retVal.log = ("ACC OR MEM[${operandSaveForLogging}] -> ACC\n")
            }
            13 -> {
               executeSyscall(SyscallTypes.fromInt(ACC.data.toInt()), (IR.getOperand()))
                retVal.log = ("syscall\n")
            }
            //other ones here
            else -> {
            }
        }
        return retVal
    }




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

    fun registerConnection(a: HardwareBlock, b:HardwareBlock){
        a.registerOutputConnection(b)
    }

    enum class SyscallTypes(val value: Int){
        PRINT_INT(0),
        PRINT_FLOAT(1),
        PRINT_STRING(2);

        companion object {
            fun fromInt(value: Int) = values().first { it.value == value }
        }
    }

    private fun executeSyscall(type: SyscallTypes, arg: UShort){
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