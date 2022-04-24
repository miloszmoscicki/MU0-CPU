package Sim

/**
 * Abstract class describing capability of a HardwareBlock
 */
abstract class HardwareBlock() {

    // possible output connections linking to other blocks
    var outputConnection: MutableList<HardwareBlock> = mutableListOf()
    var buffer: Short? = null

    /**
     * Called on positive edge of the processor clock
     */
    abstract fun posEdge(): Int

    /**
     * Called on negative edge of the processor clock
     */
    abstract fun negEdge(): Int

    /**
     * Called on hardware reset
     */
    abstract fun reset()

    /**
     * Provides standard implementation of a reset
     */
    fun resetHardwareBlock(){
        buffer = null
        outputConnection = mutableListOf()
    }

    /**
     * Registers output connection of a hardware block linking it to another hardware block
     */
    fun registerOutputConnection(block: HardwareBlock){
        outputConnection.add(block)
    }


    /**
     * Write @param data to the connected component at @param index
     */
    fun write(index: Int, data: Short){
        outputConnection[index].buffer = data
    }

    /**
     * Read the value written by connected hardware block
     * @return read value, Exception if buffer is empty
     */
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

    /**
     * @return true if buffer is not null, false otherwise
     */
    fun haveData(): Boolean {
        if(buffer == null){
            return false
        }
        return true
    }
}