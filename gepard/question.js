function $(id) {
    let element = document.getElementById(id);
    if (element == null || element == undefined) {
        throw new Error("Could not find element with id " + id);
    }
    return element;
}
if (localStorage.getItem("special") == "true") {
    alert("Denna fråga är värd dubbelt så mycket poäng, men om ni svarar fel förlorar ni dubbelt så mycket poäng!");
}
/**
 * 
 * @param {string[]} text 
 */
function l(text) {
    text.forEach((t) => {
        console.log(t);
    });
}
let question = localStorage.getItem("currentQuestion")
let answer = localStorage.getItem("currentAnswer")
if (question == "undefined") {
    question = "Inte bestämd"
}
if (answer == "undefined") {
    answer = "Inte bestämd"
}
$("question").innerText = question;
document.onkeydown = (k) => {
    if (k.key == " ") {
        $("reveal").style.display = "none";
        $("question").innerText = answer
    }
    if (k.key == "Escape") {
        window.close();
    }
}
$("reveal").onclick = () => {
    $("reveal").style.display = "none";
    $("question").innerText = answer || "Inte bestämd";
}
