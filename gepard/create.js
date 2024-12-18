function $(id) {
    return document.getElementById(id);
}
class questionObject {
    constructor(answer, points, question) {
        this.points = points;
        this.answer = answer;
        this.question = question;
    }
}
/**
 * 
 * @param {string} title 
 */
async function newCategory(title) {
    let categoryDiv = document.createElement("div");
    categoryDiv.className = "category";
    let titleElement = document.createElement("h3");
    titleElement.innerHTML = title;
    titleElement.onclick = async () => {
        let name = prompt("Vad ska kategorin heta?") || "Ny kategori";
        if (name.replaceAll(" ", "") == "") {
            name = "Ny kategori";
        }
        titleElement.innerHTML = name;
        categoryDiv.querySelectorAll(".question").forEach((questionElement) => {
            questionElement.category = titleElement.innerHTML;
        });
    }
    categoryDiv.oncontextmenu = (event) => {
        event.preventDefault();
        categoryDiv.remove();
        return;
    }

    categoryDiv.appendChild(titleElement);
    for (i = 100; i < 600; i += 100) {
        let q = new questionObject("Inte bestämd", i, "Inte bestämd");
        let btn = document.createElement("button");
        btn.innerHTML = q.points;
        btn.onclick = async () => {
            q.question = prompt("Vad ska själva frågan vara?") || "Inte bestämd";
            q.answer = prompt("Vad ska \"svaret\" på frågan vara?") || "Inte bestämd";
            btn.answer = q.answer;
            btn.question = q.question;
        }
        btn.className = "question";
        btn.category = categoryDiv.querySelector("h3").innerText;
        categoryDiv.appendChild(btn)
    }
    categoryDiv.style.margin = "30px";
    document.body.appendChild(categoryDiv);

}
$("kategori").onclick = async () => {
    /**
     * @type {string}
     */
    let name = prompt("Vad ska kategorin heta?") || "Ny kategori";
    if (name.replaceAll(" ", "") == "") {
        name = "Ny kategori";
    }
    newCategory(name);
}
$("spara").onclick = async () => {
    let ct = [];
    document.querySelectorAll(".category").forEach(category => {
        ct.push(category.querySelector("h3").innerText);
    });
    let answers = [];
    document.querySelectorAll(".question").forEach((element) => {
        answers.push(element.answer + `|${element.category}|${element.innerText}|${element.question}`);
    });
    let combinedInfo = {
        categories: ct,
        answers: answers,
    }
    if (combinedInfo.categories.length == 0) {
        alert("Du behöver lägga till minst en kategori!");
        return;
    }
    navigator.clipboard.writeText(JSON.stringify(combinedInfo));
    alert("Speldatan är kopierad till ditt urklipp!");
}
$("spela").onclick = async () => {
    let ct = [];
    document.querySelectorAll(".category").forEach(category => {
        ct.push(category.querySelector("h3").innerText);
    });
    let answers = [];
    document.querySelectorAll(".question").forEach((element) => {
        answers.push(element.answer + `|${element.category}|${element.innerText}|${element.question}`);
    });
    let combinedInfo = {
        categories: ct,
        answers: answers,
    }
    localStorage.setItem("game", JSON.stringify(combinedInfo));
    if (combinedInfo.categories.length == 0) {
        alert("Du behöver lägga till minst en kategori!");
        return;
    }
    window.location = "play.html";
}
function loadGame(obj) {
    localStorage.setItem("game", obj);
    window.location = "play.html";
}
function ogiltig() {
    alert("Ogiltig speldata!");
}
$("ladda").onclick = async () => {
    try {
        let obj = prompt("", "Klistra in speldatan här!");
        if (obj == "") {
            ogiltig();
            return;
        }
        if (obj == null || obj == undefined) {
            ogiltig();
            return;
        }
        let pipesCounter = 0;
        for (let i = 0; i <= obj.length - 1; i++) {
            if (obj[i] == "|") {
                pipesCounter++;
            }
        }
        if (pipesCounter < 3) {
            ogiltig();
            return;
        }
        if (Object.keys(JSON.parse(obj)).length == 0) {
            ogiltig();
            return;
        }

        loadGame(obj)
    } catch (e) {
        ogiltig();
        return;
    }
}
for (let i = 0; i < 5; i++) {
    newCategory(`Ny kategori (${i + 1})`);
}