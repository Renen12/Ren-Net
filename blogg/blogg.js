import { $, loadStyleMacros } from "/renworks/v1/renWorks.js"
const url = "https://ren-net.pockethost.io"
const pb = new PocketBase(url);
async function main() {
    let id = localStorage.getItem("post");
    if (id == null || id === "") {
        window.location = "index.html"
    }
    let richText = document.createElement("p");
    let record = await pb.collection("bloggar").getOne(id);
    richText.innerHTML = record.text;
    let textDiv = $("text");
    textDiv.appendChild(richText)
}
window.onload = async () => {
    main().then(() => {
        document.getElementById("loader").remove()
    })
}
