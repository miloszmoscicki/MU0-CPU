package Sim

/**
 * Singleton PC class, inheriting from HardwareBlock
 */
object PC: HardwareBlock() {
    var content: Short = 0
    private const val MAR_CONNECTION = 0

    override fun posEdge(): Int {
        if(haveData()){
            content = read()
        }
        write(MAR_CONNECTION, content)
        content = (content + 1.toShort()).toShort()
        return content.toInt()
    }

    override fun negEdge(): Int {
        return -1
    }

    override fun reset() {
        content = 0
        resetHardwareBlock()
    }
}