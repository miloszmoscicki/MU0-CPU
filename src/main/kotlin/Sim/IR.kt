package Sim

enum class IR_STATE {
    MAR,
    ALU,
    PC,
    NONE
}

object IR : HardwareBlock() {
    private val MAR_CONNECTION = 0
    private val PC_CONNECTION = 1
    private val ALU_CONNECTION = 2
    var currentState: IR_STATE = IR_STATE.NONE
    var container: UShort = 0U

    override fun posEdge(): Int {
        if(currentState == IR_STATE.MAR){
            container = read()
            write(MAR_CONNECTION,(container.toInt() and 0x0FFF).toUShort())
            return container.toInt()
        }
        else if(currentState == IR_STATE.PC){
            val readVal = read().toInt()
            if(readVal == 1){
                write(PC_CONNECTION, (container!!.toInt() and 0x0FFF).toUShort())
            }
            return readVal
        }
        else{
            container = read()
            write(ALU_CONNECTION, (container.toInt() and 0x0FFF).toUShort())
            return container.toInt()
        }
    }

    override fun negEdge(): Int {
        return -1
    }

    override fun reset() {
        currentState = IR_STATE.NONE
        resetHardwareBlock()
    }

    fun getOpcode(): UShort {
        return (buffer!!.toInt() shr 12).toUShort()
    }

    fun getOperand(): UShort {
        return (buffer!!.toInt() and 0x0FFF).toUShort()
    }
}