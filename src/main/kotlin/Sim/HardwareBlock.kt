package Sim

abstract class HardwareBlock() {

    var outputConnection: MutableList<HardwareBlock> = mutableListOf()
    var buffer: Short? = null

    abstract fun posEdge(): Int

    abstract fun negEdge(): Int

    abstract fun reset()

    fun resetHardwareBlock(){
        buffer = null
        outputConnection = mutableListOf()
    }

    fun registerOutputConnection(block: HardwareBlock){
        outputConnection.add(block)
    }


    fun write(index: Int, data: Short){
        outputConnection[index].buffer = data
    }

    fun read(): Short {
        if(buffer != null){
            val copy = buffer as Short
            buffer = null
            return copy
        }
        else{
            throw Exception("Empty buffer")
        }
    }

    fun haveData(): Boolean {
        if(buffer == null){
            return false
        }
        return true
    }
}