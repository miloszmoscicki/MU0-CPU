import kotlinx.browser.document
import org.w3c.dom.*


@OptIn(ExperimentalUnsignedTypes::class)
private var currentMemoryPage = 1
// used for showing memory in the memory window
private var memoryContents = ShortArray(4096) { 0xDEAD.toShort() }

/**
 * Reloads the contents of memory window to to represent the state of the selected @param page
 */
@OptIn(ExperimentalUnsignedTypes::class)
fun changeMemoryWindowPage(page: Int){

    // used for determining if we should highlight a particular memory cell if the value is different than before
    var hasPageChanged = true

    if(currentMemoryPage == page){
        hasPageChanged = false
    }
    else{
        currentMemoryPage = page
    }

    val page0indexed = page - 1
    val table = document.getElementById("memTable") as HTMLTableElement

    // take care of the header
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

            // take care of the first column
            if(j == 0){
                element.textContent = proceedWithZeros(4, (((i-1)*16) + page0indexed * (128)).toString(16).uppercase())
                element.style.color = if (isLightMode()) "black" else "white"
                continue
            }

            // save the divs ID to be the word num (based on i,j and page number)
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

/**
 * @return page number at which we have memory cell representing given @param address
 */
fun getPageNumberForAddress(address: Int): Int{
    return ((address / Constants.WORDS_PER_PAGE) + 1)
}

/**
 * Removes the red coloring indicating a store to address in memory window
 */
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

/**
 * Scroll memory window to @param lineNum
 */
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

fun resetMemory(){
    memoryContents = ShortArray(4096) { 0xDEAD.toShort() }
}

fun setupMemoryContents(memoryInput: ShortArray){
    memoryInput.forEachIndexed { index, element->
        memoryContents[index] = element
    }
}

fun updateMemoryWord(index: Int, value: Short){
    memoryContents[index] = value
}

fun getFrontMemoryContents(): ShortArray {
    return memoryContents
}

fun changePageInput(page: Int){
    (document.getElementById("range") as HTMLInputElement).value = page.toString()
}