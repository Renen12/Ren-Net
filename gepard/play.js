import { renWorks } from "../renworks/v2/renWorks.js"
function $(id) {
    return document.getElementById(id);
}
renWorks.beseechDropDown(["1", "2", "3", "4", "5", "6", "7"], "Hur många lag vill du ha?", (answer) => {
    let asNum = parseInt(answer);
    for (let i = 0; i < asNum; i++) {
        createPlayer("Lag " + (i + 1));
    }
});
/**
 * @typedef {Object} gameObject
 * @property {string[]} categories 
 * @property {string[]} answers 
 */
let gameObject = JSON.parse(localStorage.getItem("game"));
if (gameObject === null) {
    alert("Something has gone wrong. Please contact us at contact@ren-net.net or open a github issue.");
    window.location = "https://github.com/Renen12/Ren-Net";
}
console.dir(gameObject);
gameObject.categories.forEach(
    category => {
        let categoryDiv = document.createElement("div");
        let titleElement = document.createElement("h3");
        titleElement.innerText = category;
        categoryDiv.appendChild(titleElement);
        categoryDiv.isCategoryDiv = true
        document.body.appendChild(categoryDiv);
    });
document.querySelectorAll("div").forEach((element) => {
    if (element.isCategoryDiv) {
        element.className = "categories";
        for (let i = 100; i < 600; i += 100) {
            let questionButton = document.createElement("button");
            questionButton.innerText = i.toString();
            questionButton.className = "questions";
            questionButton.onclick = () => {
                gameObject.answers.forEach((value) => {
                    if (value.split("|")[2] === questionButton.innerText && value.split("|")[1] === element.querySelector("h3").innerText) {
                        localStorage.setItem("currentQuestion", value.split("|")[3]);
                        localStorage.setItem("currentAnswer", value.split("|")[0]);
                        if (questionButton.special) {
                            localStorage.setItem("special", true);
                        }
                        let win = window.open(`question.html`);
                        let timer = setInterval(() => {
                            if (win != null && win.closed) {
                                clearInterval(timer);
                                localStorage.setItem("special", false);
                            }
                        }, 700);
                        // The question
                        // alert(value.split("|")[3]);
                        // The correct answer
                        // alert(value.split("|")[0]);
                    }
                });
                questionButton.disabled = true;
            }
            element.appendChild(questionButton);
        }
    }
});
// If name is null, ask the player
function createPlayer(name_p) {
    let name = "";
    if (!name_p) {
        name = prompt("Vad ska spelarens namn vara?") || "Ny spelare";
        if (name.replaceAll(" ", "") == "") {
            name = "Ny spelare";
        }
    }
    else {
        name = name_p
    }

    let playerFieldSet = $("players");
    let score = 0;
    let newPlayerDiv = document.createElement("div");
    let addScoreButton = document.createElement("button");
    let removeScoreButton = document.createElement("button");
    let playerNameElement = document.createElement("p");
    playerNameElement.innerText = name;
    addScoreButton.innerText = "+";
    removeScoreButton.innerText = "-";
    playerNameElement.innerText += `: ${score}`;
    addScoreButton.onclick = () => {
        score += 100;
        playerNameElement.innerText = name + ": " + score;
    }
    removeScoreButton.onclick = () => {
        score -= 100;
        playerNameElement.innerText = name + ": " + score;
    }
    newPlayerDiv.appendChild(playerNameElement);
    newPlayerDiv.appendChild(addScoreButton);
    newPlayerDiv.appendChild(removeScoreButton);
    $("addPlayer").style.display = "grid"
    playerFieldSet.appendChild(newPlayerDiv);
}
$("addPlayer").onclick = () => {
    createPlayer(null);
}
let questions = document.querySelectorAll(".questions")
function makeBtnSpecial(btn) {
    btn.special = true;
}
for (let i = 0; i <= questions.length - 1; i++) {
    let question = questions[i];
    let random = Math.round(Math.random() * 10);
    if (i == questions.length - 1) {
        makeBtnSpecial(question)
        break;
    }
    if (random == 2) {
        makeBtnSpecial(question);
        break;
    }
}