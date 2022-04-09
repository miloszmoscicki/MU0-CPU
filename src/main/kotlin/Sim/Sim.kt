package Sim

@ExperimentalUnsignedTypes
class Sim(memory: ShortArray) {
    var control: Control = Control(memory)

    fun runSimulation(): String {
        control.setupComponents()
        var logs = ""
        do {
            control.fetchCycle()
            val log = control.executeCycle().log
            logs += log
        }while (!log.contains("break"))

        return logs
    }

    fun setupSimulator(){
        control.setupComponents()
    }

    fun stepInstruction(): Control.InstructionEffect {
        control.fetchCycle()
        return control.executeCycle()
    }

    fun stepFetchCycle(): Control.ProcessorStateChange {
        return control.fetchCycle()
    }

    fun stepExecuteCycle(): Control.InstructionEffect {
        return control.executeCycle()
    }


    fun memoryWrite(index: Int, value: Short){
        Memory.arr[index] = value
    }

    fun memoryRead(address: Int): Short{
        return Memory.arr[address]
    }

    fun readAcc(): Short{
        return ACC.data
    }
}