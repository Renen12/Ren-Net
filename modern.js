import { $ } from "https://ren-net.net/renworks/renWorks.js";
function update() {
    let date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    if (minute.toString().length == 1) {
        minute = "0" + minute;
    }
    if (second.toString().length == 1) {
        second = "0" + second;
    }
    let time = `${hour}:${minute}:${second}`
    $("time-text").innerText = time;
}
setInterval(() => {
    update();
}, 1000);
function search() {
    let search = $("searchbox").value;
    window.location = `https://google.com/search?q=${search}`
}
$("search").onclick = () => {
    search();
}
$("searchbox").onkeydown = (event) => {
    if (event.key == "Enter") {
        search();
    }
}