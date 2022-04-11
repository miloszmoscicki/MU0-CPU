package Sim

/**
 * Possible ALU operations
 */
enum class ALU_OP {
    ADD,
    SUBSTRACT,
    MULTIPLY,
    DIVIDE,
    AND,
    OR,
    JMP,
    JGE,
    JNE,
    LDI,
    NONE
}

/**
 * Singleton ALU class, inheriting from HardwareBlock
 */
object ALU : HardwareBlock() {
    var accData: Short? = null
    var  currentOp: ALU_OP = ALU_OP.NONE
    private val ACC_CONNECTION = 0

    override fun posEdge(): Int {
        if(haveData()){
            // if its the first of ALU reads for a paricular instruction
            if(accData == null){

                // only need one read for LDI
                if(currentOp == ALU_OP.LDI){
                    val readVal = read()
                    write(ACC_CONNECTION, readVal)
                    return readVal.toInt()
                }

                // for jump instructions need to pass information wether we should jump or not based on ACC value
                else if(currentOp == ALU_OP.JNE || currentOp == ALU_OP.JGE || currentOp == ALU_OP.JMP){
                    accData = read()
                    when(currentOp){
                        ALU_OP.JMP->{
                            write(ACC_CONNECTION, 1)
                    }
                        ALU_OP.JGE->{
                        if(accData!! >=0){
                            write(ACC_CONNECTION, 1)
                        }
                            else{
                            write(ACC_CONNECTION, 0)
                        }

                    }
                        ALU_OP.JNE->{
                        if(accData!! != 0.toShort()){
                            write(ACC_CONNECTION, 1)
                        }else{
                            write(ACC_CONNECTION, 0)
                        }
                    }
                    }
                    val readVal = accData!!.toInt()
                    accData = null
                    return readVal
                }
                // for any other ALU operation save the value of acc
                else {
                    accData = read()
                    return accData!!.toInt()
                }
            }
            // the second read for ALU instruction
            else{
                val memoryWord = read()
                when (currentOp){
                    // compute and send back to ACC
                    ALU_OP.ADD->{
                        write(ACC_CONNECTION,(accData!! + memoryWord).toShort())
                    }
                    ALU_OP.SUBSTRACT->{
                        write(ACC_CONNECTION, (accData!! - memoryWord).toShort())
                    }
                    ALU_OP.MULTIPLY->{
                        write(ACC_CONNECTION,(accData!! * memoryWord).toShort())
                    }
                    ALU_OP.DIVIDE->{
                        write(ACC_CONNECTION, (accData!! / memoryWord).toShort())
                    }
                    ALU_OP.AND->{
                        write(ACC_CONNECTION,(accData!!.toInt() and memoryWord.toInt()).toShort())
                    }
                    ALU_OP.OR->{
                        write(ACC_CONNECTION,(accData!!.toInt() or memoryWord.toInt()).toShort())
                    }

                    else -> {

                    }
                }
                accData = null
                return memoryWord.toInt()
            }

        }
        return -1
    }

    override fun negEdge(): Int {
       return -1
    }

    override fun reset() {
        accData = null
        currentOp = ALU_OP.NONE
        resetHardwareBlock()
    }
}