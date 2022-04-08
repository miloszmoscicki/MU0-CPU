package Sim

import InputT
import kotlin.js.Console


@ExperimentalUnsignedTypes
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

    fun prepareModelForDebug(memory: UShortArray) {
        cpu = Sim(memory)
        cpu.setupSimulator()
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

    fun updateSimulatorsMemory(index: Int, value: UShort){
        cpu.memoryWrite(index,value)
    }

}

