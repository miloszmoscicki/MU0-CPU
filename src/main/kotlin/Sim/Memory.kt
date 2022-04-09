package Sim

object Memory {
    @OptIn(ExperimentalUnsignedTypes::class)
    var arr = ShortArray(4096) { 0xDEAD.toShort() }
    var addr: Short = 0

    fun setCurrentAddress(addr: Short){
        this.addr = addr
    }

    @OptIn(ExperimentalUnsignedTypes::class)
    fun fetchMem(): Short {
        return arr[addr.toInt()]
    }

    @OptIn(ExperimentalUnsignedTypes::class)
    fun writeMem(data: Short){
        arr[this.addr.toInt()] = data
    }
}