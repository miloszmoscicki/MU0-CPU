package Sim

import InputT


class Main(inputT: InputT){
    var inputType = inputT
    lateinit var cpu: Sim

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

    fun preprocessAndCompile(memString: String): MemorySetupOutput {
        val preprocess = Preprocess(inputType)
        return preprocess.setupMemoryForRun(memString)
    }

    fun prepareModelForDebug(memory: ShortArray) {
        cpu = Sim(memory)
        cpu.setupSimulator()
    }

    fun peekMemoryWord(address: Int): Short{
        return cpu.memoryRead(address)
    }

    fun peekAcc(): Short{
        return cpu.readAcc()
    }

    fun stepDebug(): Control.InstructionEffect {
        return cpu.stepInstruction()
    }

    fun fetchCycleStep(): Control.ProcessorStateChange {
        return cpu.stepFetchCycle()
    }

    fun executeCycleStep(): Control.InstructionEffect {
        return cpu.stepExecuteCycle()
    }

    fun updateSimulatorsMemory(index: Int, value: Short){
        cpu.memoryWrite(index,value)
    }

}

