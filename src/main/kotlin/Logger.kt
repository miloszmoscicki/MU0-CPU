import io.ktor.http.*
import react.*
import react.dom.*
import kotlinext.js.*
import kotlinx.html.js.*
import kotlinx.coroutines.*
import kotlinx.css.*
import kotlinx.html.classes
import kotlinx.html.id
import kotlinx.html.style
import react.dom.aria.AriaRole
import react.dom.html.ReactHTML.ul
import styled.css
import styled.styledDiv
import kotlin.js.Console

/**
 * Defines actions to be performed on editing the logger list
 */
external interface LoggerProps : Props {
    var logs: List<String>
}

val logger = fc<LoggerProps> { props ->

    styledDiv {
        attrs.id = "loggerDiv"
        attrs.classes = setOf("border border-dark")
        props.logs.forEach { log ->
            if (log != "") {
                p {
                    +log
                }
            }

        }
        css{
            position = Position.fixed
            bottom = LinearDimension("0")
            width = LinearDimension("100%")
            height = LinearDimension("100px")
            overflowY = Overflow.scroll
        }
    }
}