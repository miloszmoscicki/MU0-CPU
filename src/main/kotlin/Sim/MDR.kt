package Sim

/**
 * Represents the state MDR is in
 */
enum class MDR_STATE{
    FETCH,
    STORE,
    LOAD,
    ALU_OP
}
/**
 * Singleton MDR class, inheriting from HardwareBlock
 */
object MDR: HardwareBlock() {
    private val IR_CONNECTION = 0
    private val ACC_CONNECTION = 2
    private val ALU_CONNECTION = 1
    var memoryConnection = Memory
    var currentState: MDR_STATE = MDR_STATE.FETCH


    override fun posEdge(): Int {
        val readVal = read()
        write(IR_CONNECTION, readVal)
        return readVal.toInt()
    }

    override fun negEdge(): Int {
        val fetchVal = memoryConnection.fetchMem()
        // based on the current state decide which block to send the fetched memory word
        when (currentState)
        {
            MDR_STATE.FETCH->{
                write(IR_CONNECTION, fetchVal)
            }
            MDR_STATE.STORE ->{
                val readVal = read()
                memoryConnection.writeMem(readVal)
                return readVal.toInt()
            }
            MDR_STATE.LOAD ->{
                write(ACC_CONNECTION, fetchVal)
            }
            MDR_STATE.ALU_OP ->{
                write(ALU_CONNECTION, fetchVal)
            }

        }
        return fetchVal.toInt()

    }

    override fun reset() {
        resetHardwareBlock()
        currentState = MDR_STATE.FETCH
    }
}