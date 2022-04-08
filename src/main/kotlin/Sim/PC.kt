package Sim

object PC: HardwareBlock() {
    var content: UShort = 0U
    private const val MAR_CONNECTION = 0

    override fun posEdge(): Int {
        if(haveData()){
            content = read()
        }
        write(MAR_CONNECTION, content)
        content = (content + 1.toUShort()).toUShort()
        return content.toInt()
    }

    override fun negEdge(): Int {
        return -1
    }

    override fun reset() {
        content = 0U
        resetHardwareBlock()
    }
}