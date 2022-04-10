@file:Suppress("EXPERIMENTAL_IS_NOT_ENABLED")

import kotlinx.browser.document
import kotlinx.browser.window
import react.*
import react.dom.*
import kotlinx.html.js.*
import kotlinx.css.*
import kotlinx.html.*
import org.w3c.dom.*
import react.dom.onInput
import styled.*

@OptIn(ExperimentalUnsignedTypes::class)
private var memoryContents = ShortArray(4096) { 0xDEAD.toShort() }
private const val WORDS_PER_PAGE = 128
private var currentMemoryPage = 1
const val DIAGRAM_FONT_SIZE = 30
var diagramLinkColor = "#343a40"

external interface InputProps : Props {
    var onRunClick: (String) -> Unit
    var onSelect: (String) -> Unit
    var onDebugClick: (String) -> Unit
    var onStep: () -> Unit
    var onCycleStep: () -> Unit
    var onMemoryUpdate: () -> Unit
}

val inputComponent = fc<InputProps> { props ->

    window.onclick = {
        val target = it.target as HTMLElement
        if(!target.matches(".dropdown-toggle")){
            val dropdownDiv = document.getElementById("dropdowndiv") as HTMLDivElement
            if(dropdownDiv.classList.contains("show")){
                dropdownDiv.classList.remove("show")
            }

        }
    }

    styledDiv {
        attrs.id = "mainLeftRightDiv"
        styledDiv {
            styledDiv {
                attrs.id = "controlDiv"
                attrs.classes = setOf("border border-dark")
                form {
                    styledDiv {
                        styledSelect {
                            attrs.id = "inputTypeSelect"
                            attrs.classes = setOf("custom-select")
                            option {
                                +"Assembly"
                            }
                            option {
                                +"Hexadecimal"
                            }
                            option {
                                +"Binary"
                            }
                            attrs.onInput = {
                                props.onSelect((it.target as HTMLSelectElement).value)
                            }
                            css {
                                height = LinearDimension("100%")
                            }
                        }
                        css {
                            display = Display.tableCell
                            width = LinearDimension("20%")
                        }
                    }
                    styledDiv {

                        css {
                            width = LinearDimension("75%")
                            display = Display.tableCell
                        }
                    }
                    styledDiv {
                        styledDiv {
                            styledInput(InputType.button) {
                                attrs.classes = setOf("btn btn-light")
                                attrs.id = "runInput"
                                attrs.value = "▶"
                                attrs.onClickFunction = {
                                    it.preventDefault()
                                    props.onRunClick(getTextInEditor())
                                    console.log("Trying to start simulator")
                                }
                                css {
                                    color = Color.green
                                }
                            }
                            css {
                                height = LinearDimension("100%")
                                textAlign = TextAlign.center
                                display = Display.tableCell
                            }
                        }
                        styledDiv {
                            styledInput(InputType.button) {
                                attrs.classes = setOf("btn btn-light")
                                attrs.value = "\uD83D\uDC1E"
                                attrs.id = "debugInput"
                                attrs.onClickFunction = {
                                    it.preventDefault()
                                    props.onDebugClick(getTextInEditor())
                                    console.log("Trying to start simulator in debug mode")
                                }

                            }
                            css {
                                color = Color.green
                                height = LinearDimension("100%")
                                textAlign = TextAlign.center
                                display = Display.tableCell
                            }
                        }
                        styledDiv {
                            attrs.classes = setOf("dropdown")
                            styledButton {
                                attrs.classes = setOf("btn btn-light dropdown-toggle")
                                attrs.type = ButtonType.button
                                attrs.id = "dropdownMenuButton"
                                attrs["data-toggle"] = "dropdown"
                                attrs["aria-haspopup"] = "true"
                                attrs["aria-expanded"] = "false"
                                attrs.onClickFunction = {
                                    val dropdownDiv = document.getElementById("dropdowndiv") as HTMLDivElement
                                    dropdownDiv.classList.toggle("show")
                                }
                                +"⚙"
                                css {
                                    color = Color.grey
                                }
                            }
                            styledDiv {
                                attrs.id = "dropdowndiv"
                                attrs.classes = setOf("dropdown-menu")
                                attrs["aria-labelledby"] = "dropdownMenuButton"
                                attrs["will-change"] = "transform"
                                styledA {
                                    attrs.id = "logOption"
                                    attrs.classes = setOf("dropdown-item")
                                    attrs.href = "#"

                                    if (areLogsEnabled()) +"Disable logs" else +"Enable logs"

                                    attrs.onClickFunction = {
                                        val anchor = document.getElementById("logOption") as HTMLAnchorElement
                                        enableLogs(!areLogsEnabled())
                                        anchor.innerText = if (areLogsEnabled()) "Disable logs" else "Enable logs"

                                    }
                                }
                                styledA {
                                    +"Help"
                                    attrs.classes = setOf("dropdown-item")
                                    attrs.href = "help.html"
                                }
                                styledA {
                                    attrs.id = "colorMode"
                                    attrs.classes = setOf("dropdown-item")
                                    if (isLightMode()) +"Dark mode" else +"Light mode"

                                    attrs.onClickFunction = {
                                        val anchor = document.getElementById("colorMode") as HTMLAnchorElement
                                        enableLightMode(!isLightMode())
                                        anchor.innerText = if (isLightMode()) "Dark mode" else "Light mode"
                                        toggleColorMode()

                                    }
                                }
                            }
                            css {
                                height = LinearDimension("100%")
                                textAlign = TextAlign.center
                                display = Display.tableCell
                            }
                        }
                        css {
                            display = Display.tableCell
                        }
                    }
                }

                css {
                    width = LinearDimension("100%")
                    borderWidth = LinearDimension("3px")
                    display = Display.table
                }
            }
            form {
                styledDiv {
                    styledDiv {
                        attrs.classes = setOf("border border-dark")
                        attrs.contentEditable = true
                        attrs.id = "textEditDiv1"
                        attrs.onPaste = {
                            it.preventDefault()
                            val text = it.clipboardData.getData("text/plain")
                            val lines = text.split("\n")
                            lines.forEachIndexed { index, line ->
                                window.document.execCommand("insertText", false, line)
                                if(index != lines.size - 1){
                                    window.document.execCommand("insertParagraph", false, "p")
                                }
                            }

                        }

                        css {
                            width = LinearDimension("100%")
                            height = LinearDimension("250px")
                            borderWidth = LinearDimension("3px")
                            overflow = Overflow.scroll
                            fontFamily = "Courier New"
                        }
                    }
                    styledDiv {
                        attrs.id = "memoryDiv"
                        attrs.classes = setOf("border border-dark")
                        styledDiv {
                            form {
                                styledDiv {
                                    attrs.classes = setOf("form-row")

                                    styledDiv {
                                        attrs.classes = setOf("col")
                                        styledInput(InputType.button) {
                                            attrs.value = "Update"
                                            attrs.id = "updateMemoryInput"
                                            attrs.classes = setOf("btn btn-light")
                                            attrs.onClickFunction = {
                                                props.onMemoryUpdate()
                                            }
                                        }

                                        css {
//                                        display = Display.tableCell
                                        }
                                    }
                                    styledDiv {
                                        +"Selected word: "
                                        attrs.id = "selectedWordNum"
                                        attrs.classes = setOf("col-sm")
                                        css {

                                            textAlign = TextAlign.center
                                            paddingTop = LinearDimension("7px")
                                        }
                                    }
                                    styledDiv {
                                        attrs.classes = setOf("col")
                                        styledInput {
                                            attrs.classes = setOf("form-control input-lg")
                                            attrs.type = InputType.number
                                            attrs.id = "range"
                                            attrs.name = "range"
                                            attrs.min = "1"
                                            attrs.max = "32"
                                            attrs.defaultValue = "1"
                                            attrs.onInput = {
                                                changeMemoryWindowPage((it.target as HTMLInputElement).value.toInt())
                                            }
                                        }
                                    }
                                }
                            }
                        }

                        styledDiv {
                            attrs.classes = setOf("border border-dark")
                            attrs.id = "memEditDiv"
                            styledTable {
                                attrs.contentEditable = true
                                attrs.id = "memTable"
                                styledTr {
                                    styledTh {
                                        attrs.scope = ThScope.col
                                        +" "
                                        attrs.contentEditable = false
                                    }
                                    for (header in 0 until 16) {
                                        styledTh {
                                            attrs.scope = ThScope.col
                                            +"col"
                                            attrs.contentEditable = false
                                        }
                                    }
                                }
                                for (i in 0 until 8) {
                                    styledTr {
                                        styledTh {
                                            attrs.scope = ThScope.col
                                            +"row"
                                            attrs.contentEditable = false
                                        }
                                        for (j in 0 until 16) {
                                            styledTd {
                                                +"DEAD"
                                                val rowHexStr = i.toString(16)
                                                val columnHexStr = j.toString(16)
                                                attrs.id = rowHexStr + columnHexStr

                                                attrs.onClickFunction = {
                                                    val div =
                                                        document.getElementById("selectedWordNum") as HTMLDivElement
                                                    div.innerText = "Selected word: 0x" + proceedWithZeros(
                                                        4,
                                                        (it.target as HTMLTableCellElement).id.uppercase()
                                                    )
                                                }

                                                css {
                                                    textAlign = TextAlign.left
                                                    padding = "4px"
                                                    fontFamily = "Courier New"
                                                }
                                            }
                                        }
                                    }
                                }
                                css {
                                    width = LinearDimension("100%")
                                    fontSize = LinearDimension("12px")
                                }
                            }

                            css {
                                borderWidth = LinearDimension("3px")
                                height = LinearDimension("100%")
                                width = LinearDimension("100%")
                            }
                        }
                        css {
                            borderWidth = LinearDimension("3px")
                            width = LinearDimension("100%")
                            visibility = Visibility.hidden
                        }
                    }

                }
                styledInput(InputType.button) {
                    attrs.id = "stepSubmit"
                    attrs.classes = setOf("btn btn-light")
                    attrs.value = "\u293C"
                    attrs.onClickFunction = {
                        it.preventDefault()
                        props.onStep()

                    }
                    css {
                        color = Color.green
                        visibility = Visibility.hidden
                    }
                }
                    styledInput(InputType.button) {
                        attrs.id = "cycleStepSubmit"
                        attrs.classes = setOf("btn btn-light")
                        attrs.value = "\uD83D\uDD04"

                        attrs.onClickFunction = {
                            it.preventDefault()
                            props.onCycleStep()
                        }
                        css {
                            visibility = Visibility.hidden
                        }
                    }


            }
            css {
                width = LinearDimension("60%")
                float = Float.left
            }
        }
        styledDiv{
            attrs.classes = setOf("mermaid")
            attrs.id = "diagram"
            +"""
                %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#f8f9fa', 'textColor': '${diagramLinkColor}', 'lineColor': '${diagramLinkColor}', 'fontSize': '${DIAGRAM_FONT_SIZE}px', 'fontFamily': 'Monospace'}}}%%
                          flowchart TB
    MDR[MDR] 
    IR[IR]
    ACC[ACC]
    ALU[/ALU\]
    MAR[MAR]
    PC[PC]
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
            css{
                width = LinearDimension("40%")
                float = Float.left
                padding = "130px"
                visibility = Visibility.hidden
            }
        }
    }
}

fun toggleColorMode() {
    val body = document.getElementById("main_body") as HTMLBodyElement
    val select = document.getElementById("inputTypeSelect") as HTMLSelectElement
    val runInput = document.getElementById("runInput") as HTMLInputElement
    val debugInput = document.getElementById("debugInput") as HTMLInputElement
    val stepSubmit = document.getElementById("stepSubmit") as HTMLInputElement
    val cycleStep = document.getElementById("cycleStepSubmit") as HTMLInputElement
    val range = document.getElementById("range") as HTMLInputElement
    val settingsBtn = document.getElementById("dropdownMenuButton") as HTMLButtonElement
    val header = document.getElementById("mainHeader") as HTMLHeadingElement
    val controlDiv = document.getElementById("controlDiv") as HTMLDivElement
    val textEditDiv = document.getElementById("textEditDiv1") as HTMLDivElement
    val memoryDiv = document.getElementById("memoryDiv") as HTMLDivElement
    val memEditDiv = document.getElementById("memEditDiv") as HTMLDivElement
    val selectedWordNumDiv = document.getElementById("selectedWordNum") as HTMLDivElement
    val updateMemoryInput = document.getElementById("updateMemoryInput") as HTMLInputElement
    val loggerDiv = document.getElementById("loggerDiv") as HTMLDivElement


    runInput.classList.toggle("btn-light")
    runInput.classList.toggle("btn-dark")
    debugInput.classList.toggle("btn-light")
    debugInput.classList.toggle("btn-dark")
    stepSubmit.classList.toggle("btn-light")
    stepSubmit.classList.toggle("btn-dark")
    cycleStep.classList.toggle("btn-light")
    cycleStep.classList.toggle("btn-dark")
    range.classList.toggle("bg-dark")
    range.classList.toggle("text-light")
    updateMemoryInput.classList.toggle("btn-light")
    updateMemoryInput.classList.toggle("btn-dark")
    settingsBtn.classList.toggle("btn-light")
    settingsBtn.classList.toggle("btn-dark")
    select.classList.toggle("bg-dark")
    body.classList.toggle("bg-dark")
    select.classList.toggle("text-light")
    header.classList.toggle("text-light")
    controlDiv.classList.toggle("border-dark")
    controlDiv.classList.toggle("border-light")
    textEditDiv.classList.toggle("border-dark")
    textEditDiv.classList.toggle("border-light")
    textEditDiv.classList.toggle("text-light")
    selectedWordNumDiv.classList.toggle("text-light")
    memoryDiv.classList.toggle("border-dark")
    memoryDiv.classList.toggle("border-light")
    memEditDiv.classList.toggle("border-dark")
    memEditDiv.classList.toggle("border-light")
    loggerDiv.classList.toggle("text-light")

    if(diagramLinkColor == "#f8f9fa"){
        diagramLinkColor = "#343a40"
    }
    else{
        diagramLinkColor = "#f8f9fa"
    }


    changeAllLinesToBlackInEditor()
    changeMemoryWindowPage(1)

}

fun getTextInEditor(): String {
    val div = document.getElementById("textEditDiv1") as HTMLDivElement
    return div.innerText
}

fun changeColorOfALineInEditor(lineNumber: Int, color: String){
    val div = document.getElementById("textEditDiv1") as HTMLDivElement
    if(lineNumber == 1){
        if(div.innerHTML.slice(0..3) != "<div") {
            div.style.color = color
            for (index in 0 until div.childElementCount) {
//                val child = (div.children[index] as HTMLDivElement)

                (div.children[index] as HTMLDivElement).style.color = if(isLightMode()) "black" else "white"

            }
        }
        else{
            val toChange = div.childNodes[0] as HTMLDivElement
            toChange.style.color = color
        }
    }
    else{
        val toChange = div.childNodes[lineNumber-1] as HTMLDivElement
        toChange.style.color = color
    }


}

fun changeAllLinesToBlackInEditor(){
    val div = document.getElementById("textEditDiv1") as HTMLDivElement

    val colorStr:String = if (isLightMode()) "black" else "white"

    div.style.color = colorStr

    for (index in 0 until div.childElementCount) {
        (div.children[index] as HTMLDivElement).style.color = colorStr
    }
}

@OptIn(ExperimentalUnsignedTypes::class)
fun changeMemoryWindowPage(page: Int){
    var hasPageChanged = true

    if(currentMemoryPage == page){
        hasPageChanged = false
    }
    else{
        currentMemoryPage = page
    }

    val page0indexed = page - 1
    val table = document.getElementById("memTable") as HTMLTableElement
    // take care of the headers
    val headerRow = table.children[0] as HTMLTableRowElement
    for (headerRowChildIndex in 0 until headerRow.childElementCount){
        if(headerRowChildIndex != 0){
            val headerTd = headerRow.children[headerRowChildIndex] as HTMLTableCellElement
            headerTd.textContent = proceedWithZeros(4,(headerRowChildIndex-1).toString(16).uppercase())
            headerTd.style.color = if (isLightMode()) "black" else "white"
        }
    }

    for (i in 1 until table.childElementCount){
        val row = table.children[i] as HTMLTableRowElement

        for (j in 0 until row.childElementCount){
            val element = row.children[j] as HTMLTableCellElement
            if(j == 0){
                element.textContent = proceedWithZeros(4, (((i-1)*16) + page0indexed * (128)).toString(16).uppercase())
                element.style.color = if (isLightMode()) "black" else "white"
                continue
            }

            if(page0indexed%2==0){
                element.id = proceedWithZeros(4,(page0indexed / 2).toString(16) + (i-1).toString(16) + (j-1).toString(16))
            }
            else
            {
                element.id = proceedWithZeros(4,((page0indexed -1) / 2).toString(16) + (i+7).toString(16) + (j-1).toString(16))
            }

            val newCellValue = proceedWithZeros(4,memoryContents[element.id.toInt(16)].toUShort().toString(16).uppercase())
            if (!hasPageChanged)
            {
                if(element.textContent != newCellValue){
                    element.style.color = "red"
                }
                else{
                    element.style.color = if(isLightMode()) "black" else "white"
                }
            }
            else{
                element.style.color = if(isLightMode()) "black" else "white"
            }
            element.textContent = newCellValue
        }

    }
}

@OptIn(ExperimentalUnsignedTypes::class)
fun setupMemoryContents(memoryInput: ShortArray){
    memoryInput.forEachIndexed { index, element->
        memoryContents[index] = element
    }
}

@OptIn(ExperimentalUnsignedTypes::class)
fun updateMemoryWord(index: Int, value: Short){
    memoryContents[index] = value
}

fun changePageInput(page: Int){
    (document.getElementById("range") as HTMLInputElement).value = page.toString()
}

fun getPageNumberForAddress(address: Int): Int{
    return ((address / WORDS_PER_PAGE) + 1)
}

fun removeUpdateColoring() {
    val table = document.getElementById("memTable") as HTMLTableElement
    for (i in 1 until table.childElementCount) {
        val row = table.children[i] as HTMLTableRowElement
        for (j in 1 until row.childElementCount) {
            val element = row.children[j] as HTMLTableCellElement
            element.style.color = if(isLightMode()) "black" else "white"
        }
    }
}
data class MemUpdate(var storeAddress: Int?, var storeValue: Short?)

@OptIn(ExperimentalUnsignedTypes::class)
fun getFrontMemoryContents(): ShortArray {
    return memoryContents
}

fun changeMemWindowVisibility(visibility: Boolean){
    val memDiv = document.getElementById("memoryDiv") as HTMLDivElement
    val stepBtn = document.getElementById("stepSubmit") as HTMLInputElement
    val cycleStepBtn = document.getElementById("cycleStepSubmit") as HTMLInputElement
    val diagramDiv = document.getElementById("diagram") as HTMLDivElement

    if(visibility){
        memDiv.style.visibility = "visible"
        stepBtn.style.visibility = "visible"
        cycleStepBtn.style.visibility = "visible"
        diagramDiv.style.visibility = "visible"

    }
    else{
        memDiv.style.visibility = "hidden"
        stepBtn.style.visibility = "hidden"
        cycleStepBtn.style.visibility = "hidden"
        diagramDiv.style.visibility = "hidden"
    }
}


@OptIn(ExperimentalUnsignedTypes::class)
fun resetMemory(){
    memoryContents = ShortArray(4096) { 0xDEAD.toShort() }
}


fun scrollToLine(lineNum: Int){
    val div = document.getElementById("textEditDiv1") as HTMLDivElement
    if(lineNum == 1){
        if(div.innerHTML.slice(0..3) != "<div") {
            div.scrollIntoView()
        }
        else{
            val toChange = div.childNodes[0] as HTMLDivElement
            toChange.scrollIntoView()
        }
    }
    else{
        val toChange = div.childNodes[lineNum-1] as HTMLDivElement
        toChange.scrollIntoView()
    }
}

fun showMemoryCellAsChanged(address: Int){
    val td = document.getElementById(proceedWithZeros(4,address.toString(16))) as HTMLTableCellElement
    td.style.color = "red"
}

