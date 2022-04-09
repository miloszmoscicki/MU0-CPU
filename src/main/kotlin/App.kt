@file:Suppress("EXPERIMENTAL_IS_NOT_ENABLED")
@file:OptIn(ExperimentalUnsignedTypes::class)

import Sim.Control
import Sim.Main
import Sim.Memory
import react.*
import kotlinx.browser.document
import kotlinx.browser.window
import org.w3c.dom.*

private var simulator = Main(InputT.ASM)
var lineSelectStepDebug = 1
private const val MAX_WORD_VAL = 0xFFFF
private var disable_logs = true
private var light_mode = true
private var isFetchNext = true
private val componentToValue = mutableMapOf<String, Int>()

val app = fc<Props> {
    var logs by useState(emptyList<String>())

    child(inputComponent) {
        attrs.onSelect = { selection ->
            if(selection.lowercase() =="hexadecimal"){
                simulator.inputType = InputT.HEX
                console.log("hex")
            }
            else if(selection.lowercase() =="assembly"){
                simulator.inputType = InputT.ASM
                console.log("asm")
            }
            else{
                simulator.inputType = InputT.BIN
                console.log("bin")
            }
        }
        attrs.onRunClick = { input ->
            changeMemWindowVisibility(false)
            changeAllLinesToBlackInEditor()
            removeSyscallLogs()
            resetMemory()
            logs = emptyList()
            val output = simulator.runSimulation(input).split("\n")
            if(!disable_logs) {
                logs = output
            }
            if (output[0].indexOf("line") != -1) {
                val logArr = output[0].split(" ")
                for (i in logArr.indices) {
                    if (i != 0) {
                        if (logArr[i - 1] == "line") {
                            changeColorOfALineInEditor(logArr[i].toInt(), "red")
                            scrollToLine(logArr[i].toInt())
                            logs = output
                        }
                    }
                }
            }
        }

        attrs.onDebugClick = { input ->
            removeSyscallLogs()
            resetMemory()
            isFetchNext = true
            refreshMemoryWindow(1)
            logs = emptyList()
            lineSelectStepDebug = 1
            val memorySetupOutput = simulator.preprocessAndCompile(input)
            if(memorySetupOutput.compilationStatus != "OK") {
                logs = listOf(memorySetupOutput.compilationStatus)
                if (memorySetupOutput.compilationStatus.indexOf("line") != -1) {
                    val logArr = memorySetupOutput.compilationStatus.split(" ")
                    for (i in logArr.indices) {
                        if (i != 0) {
                            if (logArr[i - 1] == "line") {
                                changeColorOfALineInEditor(logArr[i].toInt(), "red")
                                scrollToLine(logArr[i].toInt())
                            }
                        }
                    }
                }
            }
            else {
                logs  = listOf()
                changeAllLinesToBlackInEditor()
                lineSelectStepDebug = memorySetupOutput.firstLine
                changeColorOfALineInEditor(memorySetupOutput.firstLine, "blue")
                scrollToLine(memorySetupOutput.firstLine)
                changeMemWindowVisibility(true)
                resetComponentValues()
                removeSyscallLogs()
                setupMemoryContents(memorySetupOutput.memory)
                simulator.prepareModelForDebug(memorySetupOutput.memory)
                refreshMemoryWindow(1)
            }
        }

        attrs.onStep = {
            if (!isFetchNext) {
                window.alert("Cannot step instruction as simulator hasn't executed second cycle of previous instruction.")
            } else {
                removeUpdateColoring()
                val fetchEffect = simulator.fetchCycleStep()
                val instructionEffect = simulator.executeCycleStep()
                showSimulation(fetchEffect, instructionEffect.processorStateChange)
                if (!instructionEffect.log.contains("break")) {
                    if (instructionEffect.memUpdate.storeAddress != null && instructionEffect.memUpdate.storeValue != null) {
                        updateMemoryWord(
                            instructionEffect.memUpdate.storeAddress!!, instructionEffect.memUpdate.storeValue!!
                        )
                        refreshMemoryWindow(getPageNumberForAddress(instructionEffect.memUpdate.storeAddress!!))
                        showMemoryCellAsChanged(instructionEffect.memUpdate.storeAddress!!)
                    }
                    if (!disable_logs) {
                        logs = logs + instructionEffect.log
                    }
                    lineSelectStepDebug += instructionEffect.pcJump
                    changeAllLinesToBlackInEditor()
                    changeColorOfALineInEditor(lineSelectStepDebug, "blue")
                    scrollToLine(lineSelectStepDebug)

                } else {
                    changeAllLinesToBlackInEditor()
                    changeMemWindowVisibility(false)
                    removeSyscallLogs()
                }
            }
        }

        attrs.onMemoryUpdate = {
            sendMemoryUpdate()

        }

        attrs.onCycleStep = {
            if (isFetchNext) {
                showSimulation(simulator.fetchCycleStep())
                isFetchNext = false
            } else {
                val instructionEffect = simulator.executeCycleStep()
                showSimulation(instructionEffect.processorStateChange)
                isFetchNext = true

                removeUpdateColoring()
                if (!instructionEffect.log.contains("break")) {
                    if (instructionEffect.memUpdate.storeAddress != null && instructionEffect.memUpdate.storeValue != null) {
                        updateMemoryWord(
                            instructionEffect.memUpdate.storeAddress!!, instructionEffect.memUpdate.storeValue!!
                        )
                        refreshMemoryWindow(getPageNumberForAddress(instructionEffect.memUpdate.storeAddress!!))
                        showMemoryCellAsChanged(instructionEffect.memUpdate.storeAddress!!)
                    }
                    if (!disable_logs) {
                        logs = logs + instructionEffect.log
                    }
                    lineSelectStepDebug += instructionEffect.pcJump
                    changeAllLinesToBlackInEditor()
                    changeColorOfALineInEditor(lineSelectStepDebug, "blue")
                    scrollToLine(lineSelectStepDebug)

                } else {
                    changeAllLinesToBlackInEditor()
                    changeMemWindowVisibility(false)
                    removeSyscallLogs()
                }
            }
        }
    }
    child(logger){
        attrs.logs = logs
    }
}
fun buildDiagram(mermaidText: String){
    val mainDiv = document.getElementById("mainLeftRightDiv") as HTMLDivElement
    mainDiv.lastChild?.let { mainDiv.removeChild(it) }

    val diagramDiv = document.createElement("div") as HTMLDivElement
    diagramDiv.className = "mermaid"
    diagramDiv.id = "diagram"


    diagramDiv.innerHTML = mermaidText
    diagramDiv.style.width = "40%"
    diagramDiv.style.cssFloat = "left"
    diagramDiv.style.padding = "40px"

    mainDiv.appendChild(diagramDiv)
    js("mermaid.init(undefined, \".mermaid\");")
}

fun showSimulation(processorStateChange: Control.ProcessorStateChange, secondProcessorStateChange: Control.ProcessorStateChange? = null) {
    var boilerplateDiagramText = buildDiagramWithValues()

    val connectionToIndexMap: Map<String, Int> = mutableMapOf("MEMMDR" to 0, "MARMEM" to 1, "MDRACC" to 2,
        "ACCALU" to 3, "ALUACC" to 3, "MDRALU" to 4, "MDRIR" to 5, "IRMAR" to 6, "IRCON" to 7, "PCMAR" to 8, "IRPC" to 9, "IRALU" to 10)

    var timeout = 0
    for ((index, component) in processorStateChange.visitedComponents.withIndex()){
        var diagram = boilerplateDiagramText
        if(connectionToIndexMap.containsKey(component.toString())){
            diagram = boilerplateDiagramText + "\nlinkStyle ${connectionToIndexMap[component.toString()]} stroke:red"
        }
        else{
            if(componentToValue.containsKey(component.toString()) && processorStateChange.componentToReadValue.containsKey(component.toString())){
                val newComponentValue: Int = processorStateChange.componentToReadValue.get(component.toString())!!
                if(newComponentValue != -1){
                    componentToValue[component.toString()] = newComponentValue
                }
                boilerplateDiagramText = buildDiagramWithValues()
            }
            diagram = boilerplateDiagramText + "\nstyle ${component.toString()} fill:red"
        }

        window.setTimeout({buildDiagram(diagram)},timeout = timeout)
        timeout += 1000

        if(index == processorStateChange.visitedComponents.size - 1){
            if(secondProcessorStateChange != null){
                window.setTimeout({showSimulation(secondProcessorStateChange)}, timeout = timeout)
            }
        }
    }

}

fun refreshMemoryWindow(page: Int){
    changePageInput(page)
    changeMemoryWindowPage(page)

}


private fun validateHexInput(input: String){
    try {
        val inputAsInt = input.toInt(16)
        if(inputAsInt > MAX_WORD_VAL){
            throw IllegalArgumentException("Input value more than word width")
        }
    }
    catch (e: NumberFormatException)
    {
        throw NumberFormatException("Input not in hex")
    }
}

private fun sendMemoryUpdate(){
    val table = document.getElementById("memTable") as HTMLTableElement
    for (i in 1 until table.childElementCount) {
        val row = table.children[i] as HTMLTableRowElement
        for (j in 1 until row.childElementCount) {
            val element = row.children[j] as HTMLTableCellElement
            if (element.textContent != null) {
                // there has been an update
                if (proceedWithZeros(4,getFrontMemoryContents()[element.id.toInt(16)].toString(16)) != element.textContent!!){
                    try {
                        validateHexInput(element.textContent!!)
                        updateMemoryWord(element.id.toInt(16), element.textContent!!.toShort(16))
                        simulator.updateSimulatorsMemory(element.id.toInt(16),element.textContent!!.toShort(16))
                    }
                    catch (ne: NumberFormatException)
                    {
                        window.alert("Input (${element.textContent}) is not hexadecimal")
                        element.textContent = proceedWithZeros(4, getFrontMemoryContents()[element.id.toInt(16)].toString(16)).uppercase()
                    }
                    catch (iae: IllegalArgumentException)
                    {
                        window.alert("Input (${element.textContent}) is more than word size")
                        element.textContent = proceedWithZeros(4, getFrontMemoryContents()[element.id.toInt(16)].toString(16)).uppercase()
                    }

                }
            }
            // empty cell
            else{
                window.alert("Cannot update ${element.id} to null")
                element.textContent = proceedWithZeros(4, getFrontMemoryContents()[element.id.toInt(16)].toString(16))
            }
        }
    }
}
fun syscallPrintInt(startAddress: Short){
    val mem = Memory.arr
    val hi = mem[startAddress.toInt()]
    val low = mem[startAddress.toInt() + 1]
    var res:UInt = (hi.toInt() shl 16).toUInt()
    res = res or low.toUInt()

    val loggerDiv = document.getElementById("loggerDiv") as HTMLDivElement
    val p = document.createElement("p")
    p.textContent = res.toString()
    p.className = "syscall"
    loggerDiv.appendChild(p)


}

@OptIn(ExperimentalUnsignedTypes::class)
fun syscallPrintFloat(startAddress: Short){
    val mem = Memory.arr
    val hi = mem[startAddress.toInt()]
    val low = mem[startAddress.toInt() + 1]
    var res:UInt = (hi.toInt() shl 16).toUInt()
    res = res or low.toUInt()

    val fl = Float.fromBits(res.toInt())
    val loggerDiv = document.getElementById("loggerDiv") as HTMLDivElement
    val p = document.createElement("p")
    p.className = "syscall"
    p.textContent = fl.toString()
    loggerDiv.appendChild(p)
}

fun syscallPrintString(startAddress: Short){
    var toPrint = ""
    var index = -1
    var firstByte = true
    //val mem = simulator.getMemoryContents()
    val mem = Memory.arr
    for (i in startAddress.toInt() until mem.size){

        if((mem[i].toInt() and 0xFF00) == 0x00)
        {
            index = i - 1
            break
        }
        else if((mem[i].toInt() and 0xFF) == 0x00)
        {
            index = i
            firstByte = false
            break
        }

        if(i + 1 == mem.size){
            return
        }
    }

    for (i in startAddress.toInt() .. index) {
        if(i == index && !firstByte){
            val first = ((mem[i].toInt() and 0xFF00) shr 8)
            toPrint += first.toChar()
        }
        else {
            val first = ((mem[i].toInt() and 0xFF00) shr 8)
            val second = (mem[i].toInt() and 0xFF)
            toPrint += first.toChar()
            toPrint += second.toChar()
        }
    }
    val loggerDiv = document.getElementById("loggerDiv") as HTMLDivElement
    val p = document.createElement("p")
    p.textContent = toPrint
    p.className = "syscall"
    loggerDiv.appendChild(p)

}

fun removeSyscallLogs(){
    val div = document.getElementById("loggerDiv") as HTMLDivElement
    var removedSoFar = 0

    for (i in 0 until div.childElementCount){
        val child = div.children[i - removedSoFar] as HTMLParagraphElement
        if(child.className == "syscall"){
            div.removeChild(child)
            removedSoFar += 1
        }
    }
}

fun enableLogs(isEnable: Boolean){
    disable_logs = !isEnable
}

fun areLogsEnabled(): Boolean {
    return !disable_logs
}

fun enableLightMode(isEnable: Boolean){
    light_mode = isEnable
}

fun isLightMode(): Boolean {
    return light_mode
}

private fun resetComponentValues() {
    componentToValue["ACC"] = 0
    componentToValue["ALU"] = 0
    componentToValue["IR"] = 0
    componentToValue["MAR"] = 0
    componentToValue["MDR"] = 0
    componentToValue["PC"] = 0
 }


fun buildDiagramWithValues(): String {

    return """
                        flowchart TB
                        %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#f8f9fa', 'textColor': '${diagramLinkColor}', 'lineColor': '${diagramLinkColor}', 'fontSize': '${DIAGRAM_FONT_SIZE}px', 'fontFamily': 'Monospace'}}}%%
    MDR[MDR\n0x${proceedWithZeros(4, componentToValue["MDR"]!!.toUShort().toString(16).uppercase())}] 
    IR[IR\n0x${proceedWithZeros(4, componentToValue["IR"]!!.toUShort().toString(16).uppercase())}]
    ACC[ACC\n0x${proceedWithZeros(4, componentToValue["ACC"]!!.toUShort().toString(16).uppercase())}]
    ALU[/ALU\n0x${proceedWithZeros(4, componentToValue["ALU"]!!.toUShort().toString(16).uppercase())}\]
    MAR[MAR\n0x${proceedWithZeros(4, componentToValue["MAR"]!!.toUShort().toString(16).uppercase())}]
    PC[PC\n0x${proceedWithZeros(4, componentToValue["PC"]!!.toUShort().toString(16).uppercase())}]
    CON[CONTROL UNIT]
    MEM[MEMORY]

    MEM --- MDR 
    MEM --- MAR 
    MDR --- ACC
    ACC --- ALU
    MDR --- ALU
    MDR --- IR
    MAR --- IR 
    IR --- CON
    MAR --- PC 
    IR --- PC
    IR --- ALU
    """.trimIndent()
}
