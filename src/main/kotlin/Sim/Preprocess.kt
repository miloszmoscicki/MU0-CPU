package Sim

import InputT
import io.ktor.utils.io.core.*

data class MemorySetupOutput @OptIn(ExperimentalUnsignedTypes::class) constructor(val compilationStatus: String, val memory: ShortArray, val firstLine: Int)

class Preprocess(inputT: InputT) {
    var inputType = inputT
    private var memory = ShortArray(4096) { 0xDEAD.toShort() }
    private val labeledInstructions: List<String> = listOf("syscall","STO","ADD","LDW","MUL","SUB","JMP",
        "JNE","JGE","MUL","DIV", "AND", "OR")

    fun setupMemoryForRun(memString: String): MemorySetupOutput {
        var textSection = memString
        val inputAsArray = textSection.split("\n")
        var firstLine = 1

        if (inputType == InputT.ASM) {
            if (memString.contains(".data")) {
                if (memString.contains(".text")) {
                    firstLine = inputAsArray.indexOf(".text") + 2
                    val dataAndText = memString.split(".data")[1].split(".text").toMutableList()
                    val dataLabelsMap: MutableMap<String, Int>

                    try {
                        dataLabelsMap = dataSectionSetup(dataAndText[0])
                    } catch (e: Exception) {
                        return MemorySetupOutput(e.message.toString(), shortArrayOf(), firstLine)
                    }

                    val textLines = dataAndText[1].split("\n").toMutableList()
                    if (textLines[0] == "") {
                        textLines.removeAt(0)
                    }
                    textLines.forEachIndexed { index, element ->
                        var isValueLabel = false

                        for (instruction in labeledInstructions) {
                            if (element.split(" ").contains(instruction)) {
                                if (dataLabelsMap.containsKey(textLines[index].split(" ")[1])) {
                                    textLines[index] = instruction + " ${dataLabelsMap[element.split(" ")[1]]}"
                                    isValueLabel = true
                                    break
                                }
                            }
                        }

                        if (!isValueLabel) {
                            try {
                                textLines[index].split(" ")[1].toShort()
                            } catch (e: NumberFormatException) {
                                return MemorySetupOutput(
                                    "Compilation error line ${index + firstLine} , label '${
                                        element.split(
                                            " "
                                        )[1]
                                    }' not found", shortArrayOf(), firstLine
                                )
                            } catch (_: IndexOutOfBoundsException) {

                            }
                        }
                    }
                    dataAndText[1] = textLines.joinToString("\n")
                    textSection = dataAndText[1]
                }
                else{
                    return MemorySetupOutput(
                        "Compilation error: wrong assembly syntax. Missing .text section.",
                        shortArrayOf(), firstLine
                    )
                }
            }
            else{
                return MemorySetupOutput(
                    "Compilation error: wrong assembly syntax. Missing .data section.",
                    shortArrayOf(), firstLine
                )
            }
        }

        var counter = 0
        val memList: List<Short>
        try {
            memList = memStringToMemArr(textSection, firstLine)
            memList.forEach {
                memory[counter] = it
                counter += 1
            }
        } catch (e: Exception) {
            return MemorySetupOutput(e.message.toString(), shortArrayOf(), firstLine)
        }
        return MemorySetupOutput("OK", memory, firstLine)
    }


    private fun memStringToMemArr(memInput: String, firstLine: Int): List<Short>{
        val memArr = mutableListOf<Short>()
        when (inputType) {
            InputT.HEX -> {
                memInput.split("\n").forEach {
                    memArr.add(it.replace("0x","").toUShort(16).toShort())
                }
            }
            InputT.BIN -> {
                memInput.split("\n").forEach {
                    memArr.add(it.toUShort(2).toShort())
                }
            }
            else -> {
                memInput.split("\n").forEachIndexed { index, element ->
                    try {
                        if(element != ""){
                            memArr.add(compileInstruction(element))
                        }
                    }
                    catch (e: Exception){
                        throw Exception("Compilation error line ${firstLine + index} , no such instruction")
                    }
                }
            }
        }
        return memArr
    }

    private fun compileInstruction(instruction: String): Short {
        val asArr = instruction.split(" ")
        val inst = asArr[0]
        var operand = ""
        if(asArr.size > 1){
            operand = asArr[1]
        }
        when (inst) {
            "LDW" -> {
                return (0x0000 or operand.toInt()).toShort()
            }
            "STO" ->{
                return (0x1000 or operand.toInt()).toShort()
            }
            "ADD" ->{
                return (0x2000 or operand.toInt()).toShort()
            }
            "SUB" ->{
                return (0x3000 or operand.toInt()).toShort()
            }
            "JMP" ->{
                return (0x4000 or operand.toInt()).toShort()
            }
            "JGE" -> {
                return (0x5000 or operand.toInt()).toShort()
            }
            "JNE" ->{
                return (0x6000 or operand.toInt()).toShort()
            }
            "STP" ->{
                return (0x7000).toShort()
            }
            "LDI" -> {
                return (0x8000 or operand.toInt()).toShort()
            }
            "MUL" -> {
                return (0x9000 or operand.toInt()).toShort()
            }
            "DIV" -> {
                return (0xA000 or operand.toInt()).toShort()
            }
            "AND" -> {
                return (0xB000 or operand.toInt()).toShort()
            }
            "OR" -> {
                return (0xC000 or operand.toInt()).toShort()
            }
            "syscall" -> {
                return (0xD000 or operand.toInt()).toShort()
            }
            "NOP" ->{
                return (0xE000).toShort()
            }

            else ->{
                throw Exception("Unrecognized instruction exception")
            }
        }
    }

    private fun dataSectionSetup(data: String): MutableMap<String, Int> {
        val dataArr = data.split("\n")
        val labelMap: MutableMap<String, Int> = mutableMapOf()
        var currentWriteAddress = 1920
        dataArr.forEachIndexed { index, element->
            if(element != ""){
                if(element.split(" ")[0].indexOf(":") == -1){
                    throw Exception("Label not found, line ${index + 1}")
                }
                if(element.split(" ")[1].indexOf(".") == -1){
                    throw Exception("Label value type not found, line ${index + 1}")
                }
                val labelName = element.substring(0, element.indexOf(":"))
                var valueType = element.substring(element.indexOf(".")+1)
                var value = valueType.substring(valueType.indexOf(" ")+1)
                valueType = valueType.substring(0, valueType.indexOf(" "))
                labelMap[labelName] = currentWriteAddress

                when (valueType) {
                    "ascii" -> {
                        if(value[0] != '"' || value[value.length - 1] != '"'){
                            throw Exception("Value for label of type .ascii is not a string, line ${index + 1}")
                        }

                        value = value.substring(1,value.length -1)
                        val byteArray = value.toByteArray()
                        var index = 0
                        byteArray.forEach  {
                            if(index % 2 == 0){
                                when (index) {
                                    byteArray.size - 1 -> {
                                        memory[currentWriteAddress] = (it.toShort().toString(16) + "00").toShort(16)
                                        currentWriteAddress += 1
                                    }
                                    byteArray.size - 2 -> {
                                        memory[currentWriteAddress] = (it.toShort().toString(16) + byteArray[index + 1].toShort().toString(16)).toShort(16)
                                        currentWriteAddress += 1
                                        memory[currentWriteAddress] = ("00").toShort(16)
                                        currentWriteAddress += 1
                                    }
                                    else -> {
                                        memory[currentWriteAddress] = (it.toShort().toString(16) + byteArray[index + 1].toShort().toString(16)).toShort(16)
                                        currentWriteAddress += 1
                                    }
                                }
                            }
                            index += 1
                        }
                    }
                    "word" -> {
                        value.split(", ").forEach {
                            try {
                                memory[currentWriteAddress] = it.toInt().toShort()
                            } catch (e: NumberFormatException){
                                throw Exception("Value for label of type .word is not a number, line ${index + 1}")
                            }
                            currentWriteAddress += 1
                        }
                    }
                    else -> {
                        throw Exception("Unrecognized label value type, line ${index + 1}")
                    }
                }
            }
        }
        return labelMap
    }
}