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
}, 1000);
function search() {
    let search = $("searchbox").value;
    let searchSelect = $("searchSelect");
    let searchType = searchSelect.value;
    let url = "";
    if (searchType == "hela") {
        url = "https://google.se/search?q=";
    }
    if (searchType == "ren-net") {
        url = "https://google.se/search?q=site:ren-net.net ";
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
fetch("https://api.github.com/repos/Renen12/Ren-Net/commits?per_page=1").then(response => response.json()).then(response => {
   $("latest").innerText = "Senaste uppdatering: " + `"${response[0].commit.message}"`
    $("latest").onclick = () => {
       window.open(response[0].html_url, "_blank");
    }
});
$("logga").onclick = () => {
    window.location = "clown.png"
}