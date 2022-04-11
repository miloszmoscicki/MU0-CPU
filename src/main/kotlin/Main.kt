import react.child
import react.dom.render
import kotlinx.browser.document

fun main() {
    // hack needed for unit tests
    document.body!!.insertAdjacentHTML("beforeend", "<div id='root'></div>" )
    render(document.getElementById("root")) {
        child(app)
    }
}