package Sim

object Memory {
    @OptIn(ExperimentalUnsignedTypes::class)
    var arr = UShortArray(4096) { 0xDEADU }
    var addr: UShort = 0U

    fun setCurrentAddress(addr: UShort){
        this.addr = addr
    }

    @OptIn(ExperimentalUnsignedTypes::class)
    fun fetchMem(): UShort {
        return arr[addr.toInt()]
    }

    @OptIn(ExperimentalUnsignedTypes::class)
    fun writeMem(data: UShort){
        arr[this.addr.toInt()] = data
    }
}