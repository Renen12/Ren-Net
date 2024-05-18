let frågorochsvar = {};
let laddningsframgång = 0
function onnewquestion() {
    let fråga = document.getElementById("fråga-indata").value;
    let nyfrågaelement = document.createElement("p");
    nyfrågaelement.innerText = fråga;
    if (fråga.trim() == "" ) {
        alert("Du kan inte lägga till en tom fråga.")
        return
    }
    // Use a unique id for each question element
    let questionId = "nyfråga-" + Date.now();
    nyfrågaelement.id = questionId;

    let nyfrågasvarelement = document.createElement("input");
    nyfrågasvarelement.type = "text";
    
    // Use a unique id for each answer element
    let answerId = "nyfrågasvar-" + Date.now();
    nyfrågasvarelement.id = answerId;

    document.body.appendChild(document.createElement("br"));
    document.body.appendChild(nyfrågaelement);
    document.body.appendChild(nyfrågasvarelement);
}

function onexamstart() {
    let questionElements = document.querySelectorAll('p[id^="nyfråga-"]');
    questionElements.forEach(questionElement => {
        let questionId = questionElement.id;
        let answerId = "nyfrågasvar-" + questionId.split('-')[1];
        let answerElement = document.getElementById(answerId);
        if (answerElement) {
            frågorochsvar[questionElement.innerText] = answerElement.value;
        }
    });
    if (Object.keys(frågorochsvar).length <= 0) {
        alert("Du kan inte fylla i ett tomt prov.")
        return
    }
    // Convert the object to a JSON string before storing it in localStorage
    localStorage.setItem("frågorochsvar", JSON.stringify(frågorochsvar));
    window.location = "prov-efterifyllning.html";
}
document.getElementById("dela").onclick = () => {
    let questionElements = document.querySelectorAll('p[id^="nyfråga-"]');
    questionElements.forEach(questionElement => {
        let questionId = questionElement.id;
        let answerId = "nyfrågasvar-" + questionId.split('-')[1];
        let answerElement = document.getElementById(answerId);
        if (answerElement) {
            frågorochsvar[questionElement.innerText] = answerElement.value;
        }
    });
    if (Object.keys(frågorochsvar).length <= 0) {
        alert("Du kan inte fylla i ett tomt prov.")
        return
    }
    navigator.clipboard.writeText(JSON.stringify(frågorochsvar))
}
document.getElementById("ladda").onclick = () => {
    document.getElementById("laddatext").style.display = "block"
    document.getElementById("ladda").innerText = "Ladda"
    laddningsframgång++
    if (laddningsframgång === 2) {
        if (document.getElementById("ladda").value.trim() == "") {
            alert("Du kan inte ladda ett tomt prov.")
            return
        }
        localStorage.setItem("frågorochsvar", document.getElementById("laddatext").value)
        window.location = "prov-efterifyllning.html"
    }
}