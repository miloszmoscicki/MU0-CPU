package Sim

import InputT
import io.ktor.utils.io.core.*

data class MemorySetupOutput @OptIn(ExperimentalUnsignedTypes::class) constructor(val compilationStatus: String, val memory: UShortArray, val firstLine: Int)

@ExperimentalUnsignedTypes
class Preprocess(inputT: InputT) {
    var inputType = inputT
    @OptIn(ExperimentalUnsignedTypes::class)
    private var memory = UShortArray(4096) { 0xDEADU }
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
                        return MemorySetupOutput(e.message.toString(), ushortArrayOf(), firstLine)
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
                                textLines[index].split(" ")[1].toUShort()
                            } catch (e: NumberFormatException) {
                                return MemorySetupOutput(
                                    "Compilation error line ${index + firstLine} , label '${
                                        element.split(
                                            " "
                                        )[1]
                                    }' not found", ushortArrayOf(), firstLine
                                )
                            } catch (_: IndexOutOfBoundsException) {

                            }
                        }
                    }
                    dataAndText[1] = textLines.joinToString("\n")
                    textSection = dataAndText[1]
                }
            }
        }

        var counter = 0
        val memList: List<UShort>
        try {
            memList = memStringToMemArr(textSection, firstLine)
            memList.forEach {
                memory[counter] = it
                counter += 1
            }
        } catch (e: Exception) {
            return MemorySetupOutput(e.message.toString(), ushortArrayOf(), firstLine)
        }
        return MemorySetupOutput("OK", memory, firstLine)
    }


    private fun memStringToMemArr(memInput: String, firstLine: Int): List<UShort>{
        val memArr = mutableListOf<UShort>()
        when (inputType) {
            InputT.HEX -> {
                memInput.split("\n").forEach {
                    memArr.add(it.replace("0x","").toUShort(16))
                }
            }
            InputT.BIN -> {
                memInput.split("\n").forEach {
                    memArr.add(it.toUShort(2))
                }
            }
            else -> {
                memInput.split("\n").forEachIndexed { index, element ->
                    try {
                        memArr.add(compileInstruction(element))
                    }
                    catch (e: Exception){
                        throw Exception("Compilation error line ${firstLine + index} , no such instruction")
                    }
                }
            }
        }
        return memArr
    }

    private fun compileInstruction(instruction: String): UShort {
        val asArr = instruction.split(" ")
        val inst = asArr[0]
        var operand = ""
        if(asArr.size > 1){
            operand = asArr[1]
        }
        when (inst) {
            "LDW" -> {
                return (0x0000 or operand.toInt()).toUShort()
            }
            "STO" ->{
                return (0x1000 or operand.toInt()).toUShort()
            }
            "ADD" ->{
                return (0x2000 or operand.toInt()).toUShort()
            }
            "SUB" ->{
                return (0x3000 or operand.toInt()).toUShort()
            }
            "JMP" ->{
                return (0x4000 or operand.toInt()).toUShort()
            }
            "JGE" -> {
                return (0x5000 or operand.toInt()).toUShort()
            }
            "JNE" ->{
                return (0x6000 or operand.toInt()).toUShort()
            }
            "STP" ->{
                return (0x7000).toUShort()
            }
            "LDI" -> {
                return (0x8000 or operand.toInt()).toUShort()
            }
            "MUL" -> {
                return (0x9000 or operand.toInt()).toUShort()
            }
            "DIV" -> {
                return (0xA000 or operand.toInt()).toUShort()
            }
            "AND" -> {
                return (0xB000 or operand.toInt()).toUShort()
            }
            "OR" -> {
                return (0xC000 or operand.toInt()).toUShort()
            }
            "syscall" -> {
                return (0xD000 or operand.toInt()).toUShort()
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
                                        memory[currentWriteAddress] = (it.toUShort().toString(16) + "00").toUShort(16)
                                        currentWriteAddress += 1
                                    }
                                    byteArray.size - 2 -> {
                                        memory[currentWriteAddress] = (it.toUShort().toString(16) + byteArray[index + 1].toUShort().toString(16)).toUShort(16)
                                        currentWriteAddress += 1
                                        memory[currentWriteAddress] = ("00").toUShort(16)
                                        currentWriteAddress += 1
                                    }
                                    else -> {
                                        memory[currentWriteAddress] = (it.toUShort().toString(16) + byteArray[index + 1].toUShort().toString(16)).toUShort(16)
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
                                memory[currentWriteAddress] = it.toInt().toUShort()
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