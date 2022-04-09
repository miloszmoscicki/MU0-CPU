import Sim.Main
import org.w3c.dom.HTMLDivElement
import org.w3c.dom.HTMLParagraphElement
import kotlin.test.BeforeTest
import kotlin.test.Test
import kotlin.test.assertEquals
import kotlinx.browser.document
import kotlin.test.assertContains

class SimTest {
    private lateinit var simulator: Main


    /**
     * Before each test initialize the simulator
     */
    @BeforeTest
    fun init(){
        simulator = Main(InputT.ASM)
    }

    /**
     * Tests a full program which calculates 2 to the power of 2
     */
    @Test
    fun testFullProgramPower() {
        val prog = """
            .data
            base: .word 2
            exponent: .word 2
            init: .word 0
            result: .word 0
            one: .word 1
            .text
            LDW base
            STO result
            LDW exponent
            SUB one
            STO exponent
            LDW exponent
            JNE 10
            LDI 0
            syscall init
            STP
            LDW result
            MUL base
            STO result
            LDW exponent
            SUB one
            STO exponent
            JMP 5
        """.trimIndent()
        simulator.runSimulation(prog)
        // check result, should be for (2*2)
        assertEquals(4.toShort(), simulator.peekMemoryWord(0x0783))

    }

    /**
     * Tests a full program which executes a for loop five times
     */
    @Test
    fun testFullProgramForLoop(){
        val prog = """
            .data
            out_string: .ascii "Iteration no:"
            out_word1: .word 0
            out_word2: .word 1
            .text
            LDI 5
            STO 20
            LDI 1
            STO 21
            LDW 20
            JNE 7
            STP
            LDI 2
            syscall out_string
            LDI 0
            syscall out_word1
            LDI 1
            ADD out_word2
            STO out_word2
            LDW 20
            SUB 21
            STO 20
            JMP 4
            STP
        """.trimIndent()
        simulator.runSimulation(prog)
        // check result, should be 6 (5 iterations + 1)
        assertEquals(6.toShort(), simulator.peekMemoryWord(0x0788))
    }

    /**
     * Tests LDW instruction
     */
    @Test
    fun testLdw(){
        val prog = """
            .data
            out_word: .word 7
            .text
            LDW out_word
            STP
        """.trimIndent()
        simulator.runSimulation(prog)
        assertEquals(7.toShort(), simulator.peekAcc())
    }

    /**
     * Tests STO instruction
     */
    @Test
    fun testSto(){
        val prog = """
            .data
            out_word: .word 8
            .text
            LDW out_word
            STO 10
            STP
        """.trimIndent()
        simulator.runSimulation(prog)
        // word 10 should be 8 as we are storing contents of out_word into mem10
        assertEquals(8.toShort(), simulator.peekMemoryWord(10))
    }

    /**
     * Tests ADD instruction
     */
    @Test
    fun testAdd(){
        val prog = """
            .data
            augend: .word 12
            addent: .word 15
            .text
            LDW augend
            ADD addent
            STP
        """.trimIndent()
        simulator.runSimulation(prog)
        // acc should be 27 as we are adding 12 + 15
        assertEquals(27.toShort(), simulator.peekAcc())
    }

    /**
     * Tests SUB instruction
     */
    @Test
    fun testSub(){
        val prog = """
            .data
            minuend: .word 100
            subtrahend: .word 44
            .text
            LDW minuend
            SUB subtrahend
            STP
        """.trimIndent()
        simulator.runSimulation(prog)
        // acc should be 56 as we are doing 100 - 44
        assertEquals(56.toShort(), simulator.peekAcc())
    }

    /**
     * Tests JMP instruction
     */
    @Test
    fun testJmp(){
        val prog = """
            .data
            store_word: .word 100
            .text
            JMP 2
            STP
            LDW store_word
            STO 10
            STP
        """.trimIndent()
        simulator.runSimulation(prog)
        // MEM[10] should be 100 as we should jump to PC  2 and execute load-store
        assertEquals(100.toShort(), simulator.peekMemoryWord(10))
    }

    /**
     * Tests JGE on negative ACC
     */
    @Test
    fun testJgeShouldntJump(){
        val prog = """
            .data
            store_word: .word 100
            .text
            LDW 1000
            JGE 3
            STP
            LDW store_word
            STO 10
            STP
        """.trimIndent()
        simulator.runSimulation(prog)
        // MEM[10] should be uninitialized as we should not jump because of ACC == 0xDEAD
        assertEquals(0xDEAD.toShort(), simulator.peekMemoryWord(10))
    }

    /**
     * Tests JGE on positive ACC
     */
    @Test
    fun testJgeShouldJump(){
        val prog = """
            .data
            store_word: .word 100
            .text
            LDW store_word
            JGE 3
            STP
            LDW store_word
            STO 10
            STP
        """.trimIndent()
        simulator.runSimulation(prog)
        // MEM[10] should be 100 as we should jump because ACC == 100
        assertEquals(100.toShort(), simulator.peekMemoryWord(10))
    }

    /**
     * Tests JNE on ACC == 0
     */
    @Test
    fun testJneShouldntJump(){
        val prog = """
            .data
            store_word: .word 0
            .text
            LDW store_word
            JNE 3
            STP
            LDW store_word
            STO 10
            STP
        """.trimIndent()
        simulator.runSimulation(prog)
        // MEM[10] should be uninitialized as we should not jump because of ACC == 0
        assertEquals(0xDEAD.toShort(), simulator.peekMemoryWord(10))
    }

    /**
     * Tests JNE on non-zero ACC
     */
    @Test
    fun testJneShouldJump(){
        val prog = """
            .data
            store_word: .word 1
            .text
            LDW store_word
            JNE 3
            STP
            LDW store_word
            STO 10
            STP
        """.trimIndent()
        simulator.runSimulation(prog)
        // MEM[10] should be 100 as we should jump because ACC == 1
        assertEquals(1.toShort(), simulator.peekMemoryWord(10))
    }

    /**
     * Tests STP instruction
     */
    @Test
    fun testStp(){
        val prog = """
            .data
            store_word: .word 1
            .text
            STP
            LDI 55
        """.trimIndent()
        simulator.runSimulation(prog)
        // ACC should be 0 as we shouldnt execute PC 1
        assertEquals(0, simulator.peekAcc())
    }

    /**
     * Tests MUL instruction
     */
    @Test
    fun testMul(){
        val prog = """
            .data
            multiplicand: .word 2
            multiplier: .word 15
            .text
            LDW multiplicand
            MUL multiplier
            STP
        """.trimIndent()
        simulator.runSimulation(prog)
        // ACC should be 30 as 2*15 = 30
        assertEquals(30, simulator.peekAcc())
    }

    /**
     * Tests DIV instruction
     */
    @Test
    fun testDiv(){
        val prog = """
            .data
            dividend: .word 55
            divisor: .word 11
            .text
            LDW dividend
            DIV divisor
            STP
        """.trimIndent()
        simulator.runSimulation(prog)
        // ACC should be 5 as 55/11 = 5
        assertEquals(5, simulator.peekAcc())
    }

    /**
     * Tests AND instruction
     */
    @Test
    fun testAnd(){
        val prog = """
            .data
            operand1: .word 15
            operand2: .word 10
            .text
            LDW operand1
            AND operand2
            STP
        """.trimIndent()
        simulator.runSimulation(prog)
        // ACC should be 10 as 15 AND 10 = 10 (1111 & 1010 = 1010)
        assertEquals(10, simulator.peekAcc())
    }

    /**
     * Tests OR instruction
     */
    @Test
    fun testOr(){
        val prog = """
            .data
            operand1: .word 12
            operand2: .word 3
            .text
            LDW operand1
            OR operand2
            STP
        """.trimIndent()
        simulator.runSimulation(prog)
        // ACC should be 15 as 12 OR 3 = 15 (1100 & 0011 = 1111)
        assertEquals(15, simulator.peekAcc())
    }

    /**
     * Tests syscall for printing a string
     */
    @Test
    fun testSyscallPrintString(){
        val logger = document.getElementById("loggerDiv") as HTMLDivElement
        logger.innerHTML = ""
        val prog = """
            .data
            out_string: .ascii "Hello World!"
            .text
            LDI 2
            syscall out_string
            STP
        """.trimIndent()
        simulator.runSimulation(prog)
        val printP = logger.firstChild as HTMLParagraphElement
        // loggerDiv should have a paragraph with contents of out_string due to syscall
        assertEquals("Hello World!", printP.innerHTML.toString())
    }

    /**
     * Tests syscall for printing an int
     */
    @Test
    fun testSyscallPrintFloat(){
        val logger = document.getElementById("loggerDiv") as HTMLDivElement
        logger.innerHTML = ""
        val prog = """
            .data
            out_word1: .word 0
            out_word2: .word 35
            .text
            LDI 0
            syscall out_word1
            STP
        """.trimIndent()
        simulator.runSimulation(prog)
        val printP = logger.firstChild as HTMLParagraphElement
        // loggerDiv should have a paragraph with contents of a 32 bit value where MSBs are outword1 and LSBs are outword2
        assertEquals("35", printP.innerHTML.toString())
    }

    /**
     * Tests syscall for printing a float
     */
    @Test
    fun testSyscallPrintInt(){
        val logger = document.getElementById("loggerDiv") as HTMLDivElement
        logger.innerHTML = ""
        val prog = """
            .data
            out_word1: .word 16528
            out_word2: .word 0
            .text
            LDI 1
            syscall out_word1
            STP
        """.trimIndent()
        simulator.runSimulation(prog)
        val printP = logger.firstChild as HTMLParagraphElement
        // loggerDiv should have a paragraph with contents of a 32 bit value where MSBs are outword1 and LSBs are outword2
        // 0x40900000 is 4.5 in IEEE754 single precision
        assertEquals("4.5", printP.innerHTML.toString())
    }

    /**
     * Tests program input without .data section
     */
    @Test
    fun testCompilationErrorMissingDataSection() {
        val logger = document.getElementById("loggerDiv") as HTMLDivElement
        val prog = """
            this shouldnt work
        """.trimIndent()
        assertEquals("Compilation error: wrong assembly syntax. Missing .data section.", simulator.runSimulation(prog))
    }

    /**
     * Tests program assembly input without .text section
     */
    @Test
    fun testCompilationErrorMissingTextSection() {
        val logger = document.getElementById("loggerDiv") as HTMLDivElement
        val prog = """
            .data
            x: .word 0
            nothing here
        """.trimIndent()
        assertEquals("Compilation error: wrong assembly syntax. Missing .text section.", simulator.runSimulation(prog))
    }

    /**
     * Tests program assembly with unrecognized instruction
     */
    @Test
    fun testCompilationErrorNoSuchInstruction(){
        val logger = document.getElementById("loggerDiv") as HTMLDivElement
        val prog = """
            .data
            .text
            NO_SUCH_INSTRUCTION
            STP
        """.trimIndent()
        assertEquals("Compilation error line 3 , no such instruction", simulator.runSimulation(prog))
    }

    /**
     * Tests program assembly with unrecognized label
     */
    @Test
    fun testCompilationErrorWrongLabel(){
        val logger = document.getElementById("loggerDiv") as HTMLDivElement
        val prog = """
            .data
            x: .word 0
            .text
            LDW y
            STP
        """.trimIndent()
        assertEquals("Compilation error line 4 , label 'y' not found", simulator.runSimulation(prog))
    }

    /**
     * Tests program assembly with wrong label syntax
     */
    @Test
    fun testCompilationErrorLabelNotFound(){
        val logger = document.getElementById("loggerDiv") as HTMLDivElement
        val prog = """
            .data
            x .word 0
            .text
            STP
        """.trimIndent()
        assertEquals("Label not found, line 2", simulator.runSimulation(prog))
    }

    /**
     * Tests program assembly with wrong label value type syntax
     */
    @Test
    fun testCompilationErrorUnrecognizedLabelValueType(){
        val logger = document.getElementById("loggerDiv") as HTMLDivElement
        val prog = """
            .data
            x: .this_is_wrong 0
            .text
            STP
        """.trimIndent()
        assertEquals("Unrecognized label value type, line 2", simulator.runSimulation(prog))
    }

    /**
     * Tests program assembly with wrong value for label type .word
     */
    @Test
    fun testCompilationErrorWrongValueTypeString(){
        val logger = document.getElementById("loggerDiv") as HTMLDivElement
        val prog = """
            .data
            x: .word "0"
            .text
            STP
        """.trimIndent()
        assertEquals("Value for label of type .word is not a number, line 2", simulator.runSimulation(prog))
    }

    /**
     * Tests program assembly with wrong value for label type .ascii
     */
    @Test
    fun testCompilationErrorWrongValueTypeWord(){
        val logger = document.getElementById("loggerDiv") as HTMLDivElement
        val prog = """
            .data
            x: .ascii 0
            .text
            STP
        """.trimIndent()
        assertEquals("Value for label of type .ascii is not a string, line 2", simulator.runSimulation(prog))
    }


    /**
     * Tests program with binary input
     */
    @Test
    fun testBinaryInput() {
        simulator.inputType = InputT.BIN
        val prog = """
            0000000000000110
            0010000000000111
            0001000000000100
            0111000000000000
            0000000000000000
            0000000000000000
            0001001000110100
            1001101010111100
        """.trimIndent()
        simulator.runSimulation(prog)
        // MEM[4] should be 0xACF0 as we add 0001001000110100 + 1001101010111100 (0x1234 + 0x9ABC)
        assertEquals(0xACF0.toShort(), simulator.peekMemoryWord(4))
    }

    /**
     * Tests program with hex input
     */
    @Test
    fun testHexInput() {
        simulator.inputType = InputT.HEX
        val prog = """
            0x0006
            0x2007
            0x1006
            0x7000
            0x0000
            0x0000
            0x1234
            0x9ABC
        """.trimIndent()
        simulator.runSimulation(prog)
        // MEM[4] should be 0xACF0 as we add 0x1234 + 0x9ABC
        assertEquals(0xACF0.toUShort().toShort(), simulator.peekMemoryWord(6))
    }










}