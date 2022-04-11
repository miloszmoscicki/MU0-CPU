package Sim

/**
 * Represents the state ACC block is in
 */
enum class ACC_STATE{
    STORE,
    LOAD,
    ALU_OP,
    JUMP
}

/**
 * Singleton ACC class, inheriting from HardwareBlock
 */
object ACC : HardwareBlock() {
    var data: Short = 0
    private val MDR_CONNECTION = 0
    private val ALU_CONNECTION = 1
    var currentState: ACC_STATE = ACC_STATE.STORE

    override fun posEdge(): Int {
        when(currentState){
            ACC_STATE.STORE->{
                write(MDR_CONNECTION, data)
                return -1
            }
            ACC_STATE.LOAD->{
                data = read()
                return data.toInt();
            }
            ACC_STATE.JUMP->{
                data = read()
                write(MDR_CONNECTION, data)
                return data.toInt()
            }
            ACC_STATE.ALU_OP->{
                write(ALU_CONNECTION, data)
                return -1
            }
        }

    }

    override fun negEdge(): Int {
        return -1
    }

    override fun reset() {
        data = 0
        currentState = ACC_STATE.STORE
        resetHardwareBlock()
    }

}