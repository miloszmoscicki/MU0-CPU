<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
          integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
</head>
<body>
<div style="padding: 10px;">
<h1 class="bd-title" id="content">MU0 simple CPU simulator user manual</h1>
<div class="bd-content ps-lg-4">
    <h2>About</h2>
    <p>This website allows you to simulate running simple programs on an imaginary CPU based on von Neumann model.</p>
    <p><a href="http://www.cs.man.ac.uk/~pjj/cs1001/arch/node1.html">Read more about MU0</a></p>
    <h2>Simple set-up</h2>
    <ol>
        <li>Set input type element to one of: Assembly, Hexadecimal, Binary</li>
        <li>Enable/Disable simulator logs by clicking ⚙ -> Enable/Disable logs</li>
        <li>Enable/Disable dark mode by clicking ⚙ -> Dark mode</li>
    </ol>
    <h2>Running in standard mode</h2>
    <ol>
        <li>Enter the program in the code editor</li>
        <li>Click ▶ button</li>
        <li>Investigate program output and/or simulator logs</li>
    </ol>
    <h2>Running in debug mode</h2>
    <ol>
        <li>Enter the program in the code editor.</li>
        <li>Click 🐞 button.</li>
        <li>Step instruction with ⤼ button.</li>
        <li>Step cycle with 🔄 button. </li>
        <li>Investigate memory contents in the memory editor.</li>
    </ol>
    <h2>Investigating/Editing memory in debug mode</h2>
    <ul>
        <li>Click on table cell to see memory address.</li>
        <li>Change memory page with number picker on the right-hand side of the editor.</li>
        <li>Edit memory by entering new word content in hexadecimal format and clicking the Update button.</li>
        <li>When memory word is updated by the processor a memory cell will highlight in red showing the new data.</li>
    </ul>
    <h2>Investigating processor data flow.</li>
        <ul>
            <li>Step instruction/cycle in debug mode</li>
            <li>Observe action performed by indivdual processor block and data flow between components</li>
        </ul>
    <h2>Available instructions</h2>
    <p>The MU0 CPU allows for executing 16 different instructions. Currently implemented instructions are listed below.</p>
    <div class="bd-example">
        <table class="table">
            <thead>
            <tr>
                <th scope="col">Assembly syntax</th>
                <th scope="col">Opcode</th>
                <th scope="col">Description</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <th scope="row">LDW &ltmemory_address&gt</th>
                <td>0x0</td>
                <td>Loads a memory word from address defined in the operand and stores it in ACC.</td>
            </tr>
            <tr>
                <th scope="row">STO &ltmemory_address&gt</th>
                <td>0x1</td>
                <td>Stores contents of ACC into memory address defined in the operand.</td>
            </tr>
            <tr>
                <th scope="row">ADD &ltmemory_address&gt</th>
                <td>0x2</td>
                <td>Adds a memory word at address defined in the operand to contents of ACC.</td>
            </tr>
            <tr>
                <th scope="row">SUB &ltmemory_address&gt</th>
                <td>0x3</td>
                <td>Subtracts a memory word at address defined in the operand from contents of ACC.</td>
            </tr>
            <tr>
                <th scope="row">JMP &ltPC_address&gt</th>
                <td>0x4</td>
                <td>Changes program counter to value defined in operand.</td>
            </tr>
            <tr>
                <th scope="row">JGE &ltPC_address&gt</th>
                <td>0x5</td>
                <td>Changes program counter to value defined in operand if ACC contains a positive value.</td>
            </tr>
            <tr>
                <th scope="row">JNE &ltPC_address&gt</th>
                <td>0x6</td>
                <td>Changes program counter to value defined in operand if ACC is not 0.</td>
            </tr>
            <tr>
                <th scope="row">STP</th>
                <td>0x7</td>
                <td>Stops the execution of the program.</td>
            </tr>
            <tr>
                <th scope="row">LDI &ltconst_val&gt</th>
                <td>0x8</td>
                <td>Loads a constant defined in the operand and stores it in ACC.</td>
            </tr>
            <tr>
                <th scope="row">MUL &ltmemory_address&gt</th>
                <td>0x9</td>
                <td>Multiplies a memory word at address defined in the operand with contents of ACC, stores the result in ACC.</td>
            </tr>
            <tr>
                <th scope="row">DIV &ltmemory_address&gt</th>
                <td>0xA</td>
                <td>Divides contents of ACC by a memory word at address defined in the operand, stores the result in ACC.</td>
            </tr>
            <tr>
                <th scope="row">AND &ltmemory_address&gt</th>
                <td>0xB</td>
                <td>Performs a logical AND operation with contents of ACC and memory word at address defined in the operand, stores the result in ACC.</td>
            </tr>
            <tr>
                <th scope="row">OR &ltmemory_address&gt</th>
                <td>0xC</td>
                <td>Performs a logical OR operation with contents of ACC and memory word at address defined in the operand, stores the result in ACC.</td>
            </tr>
            <tr>
                <th scope="row">syscall &ltmemory_address&gt</th>
                <td>0xD</td>
                <td>Performs a syscall operation based on the contents of ACC:
                    <ul>
                       <li>
                           0 -> prints integer value from the least significant 32 bits starting from memory address defined in operand.
                       </li>
                        <li>
                            1 -> prints floating point value from the least significant 32 bits starting from memory address defined in operand.
                        </li>
                        <li>
                            2 -> prints ASCII representation of word starting from memory address defined in operand until null terminating zero.
                        </li>
                    </ul>
                </td>
            </tr>
            <tr>
                <th scope="row">NOP</th>
                <td>0xE</td>
                <td>No action.</td>
            </tr>
            </tbody>
        </table>
    </div>
<h2>Assembly syntax</h2>
<p>Each assembly program consists of .data and .text sections</p>
<p>In the .data section we can register labels of type .word and .ascii to be used in the .text section.
    During the preprocessing stage the simulator will write the registered values to memory and associate the label names with the memory address.
    The syntax of .data section line is as follows: <strong>&ltlabel_name&gt: &lt.word/.ascii&gt &ltlabel_value&gt</strong></p>
<div class="highlight"><pre class="chroma"><code>
    <span>.data</span>
    <span>label_word: .word 10</span>
    <span>label_words: .word 0,1,2,3</span>
    <span>label_string: .ascii "Hello World!"</span>
</code></pre></div>
<p>In the .text section each line corresponds to an individual instruction.
    We can use label instead of hardcoded operand whenever the instruction expects a memory address as an operand.
    Before starting the simulation the labels will be swapped for the memory address with which the labels are associated.</p>
<div class="highlight"><pre class="chroma"><code>
    <span>.text</span>
    <span>LDI 10</span>
    <span>STO label_word</span>
    <span>LDI 0</span>
    <span>syscall label_word</span>
</code></pre></div>
<h2>Example programs</h2>
<p>Calculating power given base and exponent.</p>
<div class="highlight"><pre class="chroma"><code>
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
</code></pre></div>
<p>For loop, which prints iteration number:</p>
<div class="highlight"><pre class="chroma"><code>
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
</code></pre></div>
        <h2>Supported browsers:</h2>
        <ul>
            <li>Chrome</li>
            <li>Safari</li>
            <li>Firefox</li>
        </ul>
</div>
</div>
</body>
</html>
