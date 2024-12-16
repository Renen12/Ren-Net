function $(id) {
    return document.getElementById(id);
}
let winner = localStorage.getItem("winner");
setTimeout(() => {
    $("winner").innerText = winner;
    $("title").innerText = `Vinnaren är ${winner}!`
}, 3000);
