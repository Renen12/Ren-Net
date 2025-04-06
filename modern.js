import { $ } from "https://ren-net.net/renworks/renWorks.js";
function update() {
    Date.prototype.getWeek = function () {
        var target  = new Date(this.valueOf());
        var dayNr   = (this.getDay() + 6) % 7;
        target.setDate(target.getDate() - dayNr + 3);
        var firstThursday = target.valueOf();
        target.setMonth(0, 1);
        if (target.getDay() != 4) {
            target.setMonth(0, 1 + ((4 - target.getDay()) + 7) % 7);
        }
        return 1 + Math.ceil((firstThursday - target) / 604800000);
    }    
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    if (minute.toString().length == 1) {
        minute = "0" + minute;
    }
    let time = `${hour}:${minute}`
    $("time-text").innerText = `Klockan ${time}, vecka ${date.getWeek()}`;
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