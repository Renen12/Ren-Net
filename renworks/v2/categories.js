import { renWorks } from "./renWorks.js";
function single_category(parent, name, contents) {
    /* <details style="color: rgb(224, 224, 224)">
        <summary style="font-size: x-large;">Functions</summary>
        text
    </details> */
    let details = renWorks.cnewa("details", {
        style: "color: rgb(224, 224, 224); font-size: medium",
    });
    details.innerHTML = contents
    let summary = renWorks.cnewa("summary", {
        style: "font-size: larger;"
    });
    summary.innerHTML = name
    details.appendChild(summary);
    parent.appendChild(details);
    return details;
}
function render_docs() {
    let functions = single_category(renWorks.get(".main"), "Funktioner", "");
    functions.style = null
    single_category(functions, "get()", "Välj ett element - samma som document.querySelector(), fast med mer felhantering.");
    single_category(functions, "unsafeGet()", "Samma som get(), fast utan felhantering.");
    single_category(functions, "qa()", "Hämta alla element med en identifierare.");
    single_category(functions, "beseech()", "Fråga användaren om data i textform.");
    single_category(functions, "beseechDropDown()", "Fråga användaren om ett av flera val.");
    single_category(functions, "enumerate()", "Gör någonting med varje element i en lista eller liknande.");
    single_category(functions, "matchingObj()", "Hitta ett objekt i en lista med den önskade titeln och det önskade värdet.");
    single_category(functions, "createNewElementWithAttributes()", "Skapa ett element med vissa egenskaper med bara en funktion");
    single_category(functions, "cnewa()", "Se createNewElementWithAttributes().");
    single_category(functions, "randItemFromArray()", "Hämta ett slumpmässigt element från en lista.");
    single_category(functions, "RemoveXFromString()", "Ta bort en bit av text från en annan.");
    single_category(functions, "mutRemoveXFromString()", "Samma som RemoveXFromString(), fast modifierar strängen istället för att bara returnera de nya versionen.");
    single_category(functions, "sorted()", "Sorterar en lista med nummer och returnerar den. (muterar originalvariabeln)");
    single_category(functions, "confirm()", "Frågar användaren en ja-eller-nej fråga.");
    single_category(functions, "ifFirstCharIsXRemoveX()", "Om den första bokstaven i en sträng är X, ta bort den.");
    single_category(functions, "connect()", `Returnerar en variabel som kör den givna funktionen när variabelns värde \"data\" ändras. <br><code style="color: lightblue"> function render(value) {<br>
renWorks.removeChildrenFromParent(renWorks.get(".main"))<br>
renWorks.get(".main").appendChild(renWorks.cnewa("h1", {}, value));<br>
}<br>
let asyncItem = renWorks.connect(render);<br>
asyncItem.data = "Hello, World!";<br>
setTimeout(() => {<br>
asyncItem.data = "Hello again, World!";<br>
}, 4000);<br> </code>`);
    single_category(functions, "removeChildrenFromParent()", "Tar bort alla underelement(\"barn\") från ett annat element(\"förälder\").");
    single_category(functions, "Result()", "Skapar ett nytt resultat. Innehåller en funktion som returnerar värdet, men ger ett felmeddelande om värdet är null eller liknande. Vissa renWorksfunktioner returnerar dessa.");
    let localStorageCategory = single_category(renWorks.get(".main"), "localStorage", "");
    localStorageCategory.style = null
    single_category(localStorageCategory, "localStorageItem", "En klass som representerar en variabel som är synkroniserad med localStorage.");
    single_category(localStorageCategory, "localStorageArray", "Samma som localStorageItem, fast den är en lista.");
}
render_docs();