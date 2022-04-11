package Sim

import InputT


/**
 * Main class of the Sim package, implements operations that can be performed on a cpu sim
 */
class Main(inputT: InputT){
    var inputType = inputT
    lateinit var cpu: Sim

    /**
     * Preprocess @param memString and run simulation
     */
    fun runSimulation(memString: String): String {
        val preprocess = Preprocess(inputType)
        val compilation = preprocess.setupMemoryForRun(memString)
        if(compilation.compilationStatus != "OK"){
            return compilation.compilationStatus
        }
        cpu = Sim(compilation.memory)
        val logOutput = cpu.runSimulation()
        return logOutput
    }

    /**
     * Preprocess and compile instructions in @param memString to be used for Debug run
     * @return compilation and preprocessing information
     */
    fun preprocessAndCompile(memString: String): MemorySetupOutput {
        val preprocess = Preprocess(inputType)
        return preprocess.setupMemoryForRun(memString)
    }

    /**
     * Sets up a model for debug run
     * @param memory an array of Shorts representing the values in each memory word
     */
    fun prepareModelForDebug(memory: ShortArray) {
        cpu = Sim(memory)
        cpu.setupSimulator()
    }

    /**
     * Returns a value at @param address
     * To be used only for unit testing
     */
    fun peekMemoryWord(address: Int): Short{
        return cpu.memoryRead(address)
    }

    /**
     * Returns a value stored in ACC
     * To be used only for unit testing
     */
    fun peekAcc(): Short{
        return cpu.readAcc()
    }

    /**
     * Calls cpu step instruction
     */
    fun stepDebug(): Control.InstructionEffect {
        return cpu.stepInstruction()
    }

    /**
     * Calls cpu fetch cycle
     */
    fun fetchCycleStep(): Control.ProcessorStateChange {
        return cpu.stepFetchCycle()
    }

    /**
     * Calls cpu execute cycle
     */
    fun executeCycleStep(): Control.InstructionEffect {
        return cpu.stepExecuteCycle()
    }

    /**
     * Updates memory at @param index with @param value, used by memory window
     */
    fun updateSimulatorsMemory(index: Int, value: Short){
        cpu.memoryWrite(index,value)
    }

}

