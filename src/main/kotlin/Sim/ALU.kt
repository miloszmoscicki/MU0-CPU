package Sim

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


object ALU : HardwareBlock() {
    var accData: UShort? = null
    var  currentOp: ALU_OP = ALU_OP.NONE
    private val ACC_CONNECTION = 0

    override fun posEdge(): Int {
        if(haveData()){
            if(accData == null){
                if(currentOp == ALU_OP.LDI){
                    val readVal = read()
                    write(ACC_CONNECTION, readVal)
                    return readVal.toInt()
                }
                else if(currentOp == ALU_OP.JNE || currentOp == ALU_OP.JGE || currentOp == ALU_OP.JMP){
                    accData = read()
                    when(currentOp){
                        ALU_OP.JMP->{
                            write(ACC_CONNECTION, 1U)
                    }
                        ALU_OP.JGE->{
                        if(accData!! >=0U){
                            write(ACC_CONNECTION, 1U)
                        }
                            else{
                            write(ACC_CONNECTION, 0U)
                        }

                    }
                        ALU_OP.JNE->{
                        if(accData!! != 0U.toUShort()){
                            write(ACC_CONNECTION, 1U)
                        }else{
                            write(ACC_CONNECTION, 0U)
                        }
                    }
                    }
                    val readVal = accData!!.toInt()
                    accData = null
                    return readVal
                }
                else {
                    accData = read()
                    return accData!!.toInt()
                }
            }
            else{
                val memoryWord = read()
                when (currentOp){
                    ALU_OP.ADD->{
                        write(ACC_CONNECTION,(accData!! + memoryWord).toUShort())
                    }
                    ALU_OP.SUBSTRACT->{
                        write(ACC_CONNECTION, (accData!! - memoryWord).toUShort())
                    }
                    ALU_OP.MULTIPLY->{
                        write(ACC_CONNECTION,(accData!! * memoryWord).toUShort())
                    }
                    ALU_OP.DIVIDE->{
                        write(ACC_CONNECTION, (accData!! / memoryWord).toUShort())
                    }
                    ALU_OP.AND->{
                        write(ACC_CONNECTION,(accData!!.toInt() and memoryWord.toInt()).toUShort())
                    }
                    ALU_OP.OR->{
                        write(ACC_CONNECTION,(accData!!.toInt() or memoryWord.toInt()).toUShort())
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