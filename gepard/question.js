function $(id) {
    let element = document.getElementById(id);
    if (element == null || element == undefined) {
        throw new Error("Could not find element with id " + id);
    }
    return element;
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
if (question[question.length - 1] != "?" && question != "Inte bestämd") {
    question += "?";
}
if (answer[answer.length - 1] != "?" && answer != "Inte bestämd") {
    answer += "?";
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
