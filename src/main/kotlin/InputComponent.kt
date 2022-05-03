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


var diagramLinkColor = "#343a40"

/**
 * Operations that can be performed on the InputComponent
 */
external interface InputProps : Props {
    var onRunClick: (String) -> Unit
    var onSelect: (String) -> Unit
    var onDebugClick: (String) -> Unit
    var onStep: () -> Unit
    var onCycleStep: () -> Unit
    var onMemoryUpdate: () -> Unit
}



// build the HTML
val inputComponent = fc<InputProps> { props ->

    // a little bit of a hack to take care of closing the settigns drop-down
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
                %%{init: {'theme': 'base', 'themeVariables': { 'primaryColor': '#f8f9fa', 'textColor': '${diagramLinkColor}', 'lineColor': '${diagramLinkColor}', 'fontSize': '${Constants.DIAGRAM_FONT_SIZE}px', 'fontFamily': 'Monospace'}}}%%
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

/**
 *  Changes bootstrap classes and css properties from dark-mode to light-mode and vice-versa
 */
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

/**
 * Changes @param lineNumber from the editor to @param color
 */
fun changeColorOfALineInEditor(lineNumber: Int, color: String){
    val div = document.getElementById("textEditDiv1") as HTMLDivElement

    // some hacks if contenteditable didnt add div tags on the same level
    if(lineNumber == 1){
        if(div.innerHTML.slice(0..3) != "<div") {
            div.style.color = color
            for (index in 0 until div.childElementCount) {
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




