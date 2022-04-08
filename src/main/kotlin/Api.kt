//import io.ktor.http.*
//import io.ktor.client.*
//import io.ktor.client.request.*
//import io.ktor.client.features.json.JsonFeature
//import io.ktor.client.features.json.serializer.KotlinxSerializer
//
//import kotlinx.browser.window
//import kotlinx.html.InputType
//
//val endpoint = window.location.origin // only needed until https://youtrack.jetbrains.com/issue/KTOR-453 is resolved
//
//val jsonClient = HttpClient {
//    install(JsonFeature) { serializer = KotlinxSerializer() }
//}
//
///*
//suspend fun getShoppingList(): List<ShoppingListItem> {
//    return jsonClient.get(endpoint + ShoppingListItem.path)
//}
//
//suspend fun addShoppingListItem(shoppingListItem: ShoppingListItem) {
//    jsonClient.post<Unit>() {
//        contentType(ContentType.Application.Json)
//        body = shoppingListItem
//    }
//}
//
//suspend fun deleteShoppingListItem(shoppingListItem: ShoppingListItem) {
//    jsonClient.delete<Unit>(endpoint + ShoppingListItem.path + "/${shoppingListItem.id}")
//}
//*/
//suspend fun setupModel(inputType: SetupInput) {
//    jsonClient.post<Unit>(endpoint + SetupInput.path){
//        contentType(ContentType.Application.Json)
//        body = inputType
//    }
//}
//
//
//suspend fun runSimulator(memInput: MemInput) {
//    jsonClient.post<Unit>(endpoint + MemInput.path){
//        contentType(ContentType.Application.Json)
//        body = memInput
//    }
//}
//suspend fun getPutResponse(): HttpStatusCode {
//    var response = jsonClient.get<HttpStatusCode>(endpoint + MemInput.path)
//    console.log(response)
//    return response
//}
//
//suspend fun receiveSimulatorLogs(): String {
//    val logs = jsonClient.get<String>(endpoint + MemInput.path)
//    console.log("Received logs")
//    console.log(logs)
//    return logs
//}