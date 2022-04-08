fun proceedWithZeros(targetLength: Int, theHexString: String): String {
    if(theHexString.length >= targetLength){
        return theHexString
    }
    val missingZeros = targetLength - theHexString.length
    return "0".repeat(missingZeros) + theHexString
}