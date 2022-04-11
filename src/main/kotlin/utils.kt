/**
 * Given a @param theHexString (a string representing a hexadecimal value)
 * and @param targetLength proceeds the string with a missing number of zeros
 * @return String the editted hex string
 */
fun proceedWithZeros(targetLength: Int, theHexString: String): String {
    if(theHexString.length >= targetLength){
        return theHexString
    }
    val missingZeros = targetLength - theHexString.length
    return "0".repeat(missingZeros) + theHexString
}

/**
 * Different program constants
 */
object Constants{
    const val MAX_WORD_VAL = 0xFFFF
    const val WORDS_PER_PAGE = 128
    const val DIAGRAM_FONT_SIZE = 30
}