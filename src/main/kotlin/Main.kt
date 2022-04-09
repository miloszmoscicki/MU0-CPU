import react.child
import react.dom.render
import kotlinx.browser.document

fun main() {
    document.body!!.insertAdjacentHTML("beforeend", "<div id='root'></div>" )
    render(document.getElementById("root")) {
        child(app)
    }
}