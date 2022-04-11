package Sim

/**
 * Singleton MAR class, inheriting from HardwareBlock
 */
object MAR: HardwareBlock() {
    var memoryConnection = Memory

    override fun posEdge():Int {
        val readVal = read()
        memoryConnection.setCurrentAddress(readVal)
        return readVal.toInt()
    }

    override fun negEdge():Int {
        return -1
    }

    override fun reset() {
        resetHardwareBlock()
    }
}