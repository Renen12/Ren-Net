import { $ } from "https://ren-net.net/renworks/renWorks.js";
function update() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    if (minute.toString().length == 1) {
        minute = "0" + minute;
    }
    let time = `${hour}:${minute}`
    $("time-text").innerText = time;
}
setInterval(() => {
    update();
}, 60000);
function search() {
    let search = $("searchbox").value;
    let searchSelect = $("searchSelect");
    let searchType = searchSelect.value;
    let url = "";
    if (searchType == "hela") {
        url = "https://google.com/search?q=";
    }
    if (searchType == "ren-net") {
        url = "https://google.com/search?q=site:ren-net.net ";
    }
    window.open(url + search, '_blank').focus();
}
$("search").onclick = () => {
    search();
}
$("searchbox").onkeydown = (event) => {
    if (event.key == "Enter") {
        search();
    }
}