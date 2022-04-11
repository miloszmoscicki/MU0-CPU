package Sim


/**
 * Singleton Memory class
 */
object Memory {
    var arr = ShortArray(4096) { 0xDEAD.toShort() }
    var addr: Short = 0

    fun setCurrentAddress(addr: Short){
        this.addr = addr
    }

    fun fetchMem(): Short {
        return arr[addr.toInt()]
    }

    fun writeMem(data: Short){
        arr[this.addr.toInt()] = data
    }
}