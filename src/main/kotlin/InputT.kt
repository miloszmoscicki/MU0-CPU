/**
 * Different types of program input in the editor
 */
enum class InputT(val key: String){
    HEX("HEX"),
    ASM("ASM"),
    BIN("BIN");

    companion object {
        fun findByKey(key: String, default: InputT = HEX): InputT {
            return InputT.values().find { it.key == key } ?: default
        }
    }
}