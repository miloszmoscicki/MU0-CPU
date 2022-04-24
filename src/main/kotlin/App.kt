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

// used for remembering which line is highlighted while single stepping
var lineSelectStepDebug = 1
private var disable_logs = true
private var light_mode = true
private var isFetchNext = true
// used for tracking values stored in a particular processor block for displaying with a diagram
private val componentToValue = mutableMapOf<String, Int>()

val app = fc<Props> {
    var logs by useState(emptyList<String>())

    // create inputComponent (generate html) and provide handlers for events
    child(inputComponent) {

        attrs.onSelect = { selection ->
            onSelectInputT(selection)
        }

        attrs.onRunClick = { input ->
            logs = emptyList()
            val output = runClick(input)
            // show logs if enabled
            if(!disable_logs) {
                logs = output
            }

            // if we have any errors highlight the faulty line
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
            logs = emptyList()
            logs = debugClick(input)
        }

        attrs.onStep = {
            val log = stepClick()
            if (!disable_logs && log != "") {
                logs = logs + log
            }

        }

        attrs.onMemoryUpdate = {
            sendMemoryUpdate()

        }

        attrs.onCycleStep = {
            val log = cycleClick()
            if (!disable_logs && log != "") {
                logs = logs + log
            }
        }
    }
    child(logger){
        attrs.logs = logs
    }
}

/**
 * Given a String representation of a Mermaid diagram, displays it on the right hand side of the screen
 * @param mermaidText the diagram representation
 */
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

/**
 * Displays a animation with Mermaid diagrams representing the actions performed by the CPU during a cycle
 * @param processorStateChange the state of the processor after a single cycle
 * @param secondProcessorStateChange optional state of the processor after a second cycle
 */
fun showSimulation(processorStateChange: Control.ProcessorStateChange, secondProcessorStateChange: Control.ProcessorStateChange? = null) {
    var boilerplateDiagramText = buildDiagramWithValues()

    // maps a link name for the mermaid diagram to the its index
    val connectionToIndexMap: Map<String, Int> = mutableMapOf("MEMMDR" to 0, "MARMEM" to 1, "MDRACC" to 2,
        "ACCALU" to 3, "ALUACC" to 3, "MDRALU" to 4, "MDRIR" to 5, "IRMAR" to 6, "IRCON" to 7, "PCMAR" to 8, "IRPC" to 9, "IRALU" to 10)

    var timeout = 0
    // for each of the blocks we have visited during a cycle
    for ((index, component) in processorStateChange.visitedComponents.withIndex()){
        var diagram = boilerplateDiagramText

        // change a color of a connection between blocks if we had a write to another block
        if(connectionToIndexMap.containsKey(component.toString())){
            diagram = boilerplateDiagramText + "\nlinkStyle ${connectionToIndexMap[component.toString()]} stroke:red"
        }

        // change a color of a block
        else{
            // if the current block is one of the blocks for which we display values
            if(componentToValue.containsKey(component.toString()) && processorStateChange.componentToReadValue.containsKey(component.toString())){
                val newComponentValue: Int = processorStateChange.componentToReadValue.get(component.toString())!!
                // if the value changed display it
                if(newComponentValue != -1){
                    componentToValue[component.toString()] = newComponentValue
                }
                boilerplateDiagramText = buildDiagramWithValues()
            }
            diagram = boilerplateDiagramText + "\nstyle ${component.toString()} fill:red"
        }

        // display an individual block state for a second and then schedule another block for one second later
        // so that we get a smooth animation
        window.setTimeout({buildDiagram(diagram)},timeout = timeout)
        timeout += 1000

        // if we had a second argument (second cycle, used for stepping a whole instruction)
        // call showSimulation again with secondProcessorStateChange as first argument
        if(index == processorStateChange.visitedComponents.size - 1){
            if(secondProcessorStateChange != null){
                window.setTimeout({showSimulation(secondProcessorStateChange)}, timeout = timeout)
            }
        }
    }

}

/**
 * Changes displayed memory to @param page
 */
fun refreshMemoryWindow(page: Int){
    changePageInput(page)
    changeMemoryWindowPage(page)
}


/**
 * Used for memory window input in order to validate if the inserted value is in HEX and is of word width
 * @param input the provided text for the memory cell
 */
private fun validateHexInput(input: String){
    try {
        val inputAsInt = input.toInt(16)
        if(inputAsInt > Constants.MAX_WORD_VAL){
            throw IllegalArgumentException("Input value more than word width")
        }
    }
    catch (e: NumberFormatException)
    {
        throw NumberFormatException("Input not in hex")
    }
}

/**
 * Checks for inserted values in the memory window and sends a memory update to the processor
 */
private fun sendMemoryUpdate(){
    val table = document.getElementById("memTable") as HTMLTableElement
    for (i in 1 until table.childElementCount) {
        val row = table.children[i] as HTMLTableRowElement
        for (j in 1 until row.childElementCount) {
            val element = row.children[j] as HTMLTableCellElement
            if (element.textContent != null) {
                // there has been an update
                if (proceedWithZeros(4,getFrontMemoryContents()[element.id.toInt(16)].toUShort().toString(16)).uppercase() != element.textContent!!){
                    try {
                        validateHexInput(element.textContent!!)
                        updateMemoryWord(element.id.toInt(16), element.textContent!!.toUShort(16).toShort())
                        simulator.updateSimulatorsMemory(element.id.toInt(16),element.textContent!!.toUShort(16).toShort())
                    }
                    catch (ne: NumberFormatException)
                    {
                        window.alert("Input (${element.textContent}) is not hexadecimal")
                        element.textContent = proceedWithZeros(4, getFrontMemoryContents()[element.id.toInt(16)].toUShort().toString(16)).uppercase()
                    }
                    catch (iae: IllegalArgumentException)
                    {
                        window.alert("Input (${element.textContent}) is more than word size")
                        element.textContent = proceedWithZeros(4, getFrontMemoryContents()[element.id.toInt(16)].toUShort().toString(16)).uppercase()
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

/**
 * Prints an integer for the first 32 bits of memory starting from @param startAddress
 */
fun syscallPrintInt(startAddress: Short){
    val mem = Memory.arr
    val hi = mem[startAddress.toInt()]
    val low = mem[startAddress.toInt() + 1]

    // combine two words into an int
    var res:UInt = (hi.toInt() shl 16).toUInt()
    res = res or low.toUInt()

    val loggerDiv = document.getElementById("loggerDiv") as HTMLDivElement
    val p = document.createElement("p")
    p.textContent = res.toString()
    p.className = "syscall"
    loggerDiv.appendChild(p)
}

/**
 * Prints a float for the first 32 bits of memory starting from @param startAddress using IEEE754 single-precision
 */
fun syscallPrintFloat(startAddress: Short){
    val mem = Memory.arr
    val hi = mem[startAddress.toInt()]
    val low = mem[startAddress.toInt() + 1]

    // combine two words into an int
    var res:UInt = (hi.toInt() shl 16).toUInt()
    res = res or low.toUInt()

    // compute float representation
    val fl = Float.fromBits(res.toInt())

    val loggerDiv = document.getElementById("loggerDiv") as HTMLDivElement
    val p = document.createElement("p")
    p.className = "syscall"
    p.textContent = fl.toString()
    loggerDiv.appendChild(p)
}

/**
 * Prints a string for characters starting from @param startAddress until null terminating zero
 */
fun syscallPrintString(startAddress: Short){
    var toPrint = ""
    var index = -1
    var firstByte = true

    val mem = Memory.arr

    // first look for null terminating zero
    // and decide if its present in LSBs or MSBs of a word
    // save index
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

        // didnt find 0x00
        if(i + 1 == mem.size){
            return
        }
    }

    // start building the string
    for (i in startAddress.toInt() .. index) {

        // if we're on the last word and 0x00 is not present in the first byte of the word
        if(i == index && !firstByte){
            val first = ((mem[i].toInt() and 0xFF00) shr 8)
            toPrint += first.toChar()
        }

        // calculate byte -> char and append to string
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

/**
 * Deletes the logs from the output window
 */
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

/**
 * Prepares and freely runs the simulation with input from the text box
 * @param input the input from the editor
 */
private fun runClick(input: String): List<String> {
    // don't display memory window for runs not in debug mode
    changeMemWindowVisibility(false)

    // get rid of any line selections
    changeAllLinesToBlackInEditor()

    removeSyscallLogs()
    resetMemory()

    // run simulator and retrieve output
    val output = simulator.runSimulation(input).split("\n")

    return output
}

/**
 * Prepares a simulation in debug mode
 * @param input the input from the editor
 */
private fun debugClick(input: String): List<String>{
    removeSyscallLogs()
    resetMemory()

    // reset cycle state
    isFetchNext = true

    // open up memory window on the first page
    refreshMemoryWindow(1)

    lineSelectStepDebug = 1

    val memorySetupOutput = simulator.preprocessAndCompile(input)

    // if there are any errors print them and highlight faulty lines
    if(memorySetupOutput.compilationStatus != "OK") {
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
        return listOf(memorySetupOutput.compilationStatus)
    }

    // no errors
    else {
        changeAllLinesToBlackInEditor()

        // highlight first line as we will be step debugging from there
        lineSelectStepDebug = memorySetupOutput.firstLine
        changeColorOfALineInEditor(memorySetupOutput.firstLine, "blue")
        scrollToLine(memorySetupOutput.firstLine)

        changeMemWindowVisibility(true)

        // reset the state od components for diagram display
        resetComponentValues()
        removeSyscallLogs()

        // setup memory window
        setupMemoryContents(memorySetupOutput.memory)

        // start up the model
        simulator.prepareModelForDebug(memorySetupOutput.memory)
        refreshMemoryWindow(1)
        return listOf()
    }
}


/**
 * Performs an instruction step on the currently debugged program
 */
private fun stepClick(): String{

    // only allow stepping if we havent previously dealt with half of an instruction
    if (!isFetchNext) {
        window.alert("Cannot step instruction as simulator hasn't executed second cycle of previous instruction.")
        return ""

    } else {
        removeUpdateColoring()

        // perform both fetch and execute
        val fetchEffect = simulator.fetchCycleStep()
        val instructionEffect = simulator.executeCycleStep()

        showSimulation(fetchEffect, instructionEffect.processorStateChange)
        handleInstructionEffect(instructionEffect)

        return instructionEffect.log
    }
}

/**
 * Performs a CPU cycle on the currently debugged program
 */
private fun cycleClick(): String{

    // either perform fetch or execute based on current state
    if (isFetchNext) {
        showSimulation(simulator.fetchCycleStep())
        isFetchNext = false
        return ""
    } else {

        val instructionEffect = simulator.executeCycleStep()
        showSimulation(instructionEffect.processorStateChange)
        isFetchNext = true

        removeUpdateColoring()
        handleInstructionEffect(instructionEffect)
        return instructionEffect.log


    }
}

/**
 * Registers the input type for the editor
 * @param selection the selected input type from the drop down menu
 */
private fun onSelectInputT(selection: String){

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


/**
 * Builds a diagram representing a current state of the simulator using Mermaid syntax
 * @return a String representation of the diagram
 */
fun buildDiagramWithValues(): String {

    return """
                        flowchart TB
                        %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#f8f9fa', 'textColor': '${diagramLinkColor}', 'lineColor': '${diagramLinkColor}', 'fontSize': '${Constants.DIAGRAM_FONT_SIZE}px', 'fontFamily': 'Monospace'}}}%%
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

/**
 * Performs relevant operations after an instruction/cycle step
 * @param instructionEffect information about the performed instruction by the cpu
 */
private fun handleInstructionEffect(instructionEffect: Control.InstructionEffect){
    // if its not a STP instruction
    if (!instructionEffect.log.contains("break")) {

        // update memory window if we had a store instruction
        if (instructionEffect.memUpdate.storeAddress != null && instructionEffect.memUpdate.storeValue != null) {
            updateMemoryWord(
                instructionEffect.memUpdate.storeAddress!!, instructionEffect.memUpdate.storeValue!!
            )
            refreshMemoryWindow(getPageNumberForAddress(instructionEffect.memUpdate.storeAddress!!))
            showMemoryCellAsChanged(instructionEffect.memUpdate.storeAddress!!)
        }

        // prepare for the next instruction
        lineSelectStepDebug += instructionEffect.pcJump
        changeAllLinesToBlackInEditor()
        changeColorOfALineInEditor(lineSelectStepDebug, "blue")
        scrollToLine(lineSelectStepDebug)

    } else {

        // finish simulation
        changeAllLinesToBlackInEditor()
        changeMemWindowVisibility(false)
        removeSyscallLogs()
    }
}
