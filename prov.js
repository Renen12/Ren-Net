let frågorochsvar = {};

function onnewquestion() {
    let fråga = document.getElementById("fråga-indata").value;
    let nyfrågaelement = document.createElement("p");
    nyfrågaelement.innerText = fråga;

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
    // Convert the object to a JSON string before storing it in localStorage
    localStorage.setItem("frågorochsvar", JSON.stringify(frågorochsvar));
    window.location = "prov-efterifyllning.html";
}