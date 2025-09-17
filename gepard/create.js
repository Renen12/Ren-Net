import { renWorks } from "../renworks/v2/renWorks.js"
let isPreviewing = false;
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

function setCursor(cursor) {
    for (const c of document.querySelectorAll("div")) {
        if (c.className == "category") {
            c.style.cursor = cursor;
        }
        for (const x of c.querySelectorAll("button")) {
            x.style.cursor = cursor;
        }
    }
}
renWorks.get("#preview").onclick = () => {
    isPreviewing = !isPreviewing
    if (isPreviewing) {
        setCursor("help")
    }
    else {
        setCursor("auto")
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
        let name = prompt("Vad ska kategorin heta?") || `Ny kategori (${document.querySelectorAll(".category").length + 1})`;
        if (name.replaceAll(" ", "") == "") {
            name = `Ny kategori (${document.querySelectorAll(".category").length + 1})`;
        }
        titleElement.innerHTML = name;
        categoryDiv.querySelectorAll(".question").forEach((questionElement) => {
            questionElement.category = titleElement.innerHTML;
        });
    }
    titleElement.oncontextmenu = (event) => {
        event.preventDefault();
        categoryDiv.remove();
        return;
    }

    categoryDiv.appendChild(titleElement);
    for (let i = 100; i < 600; i += 100) {
        let q = new questionObject("Inte bestämd", i, "Inte bestämd");
        let btn = document.createElement("button");
        btn.innerHTML = q.points;
        btn.onclick = async (event) => {
            if (isPreviewing) {
                alert(`Fråga: ${btn.question || "Inte bestämd"}, svar: ${btn.answer || "Inte bestämd"}`);

                return;
            }
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
    let name = prompt("Vad ska kategorin heta?") || `Ny kategori (${document.querySelectorAll(".category").length + 1})`;
    if (name.replaceAll(" ", "") == "") {
        name = `Ny kategori (${document.querySelectorAll(".category").length + 1})`;
    }
    document.querySelectorAll(".category").forEach((category) => {
        let categoryName = category.querySelector("h3").textContent;
        if (categoryName == name) {
            alert(`Du kan inte lägga till en kategori med samma namn som ${categoryName}!`);
            throw new Error("Duplicate question");
        }
    });
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
            throw new Error("Empty string object")
        }
        if (obj == null || obj == undefined) {
            ogiltig();
            throw new Error("Null object")
        }
        let pipesCounter = 0;
        for (let i = 0; i <= obj.length - 1; i++) {
            if (obj[i] == "|") {
                pipesCounter++;
            }
        }
        if (pipesCounter < 3) {
            ogiltig();
            throw new Error("Not enough pipe symbols")
        }
        // if (Object.keys(JSON.parse(obj)).includes("answers")) {
        //     ogiltig();
        //     throw new Error("Invalid object")

        // }
        let parsed = JSON.parse(obj);
        if (parsed) {
            console.dir(parsed)
            let answers = parsed.answers;
            let categoriesParsed = parsed.categories;
            for (const previousCategory of document.querySelectorAll("div")) {
                if (previousCategory.className === "category") {
                    previousCategory.remove()
                }
            }
            for (const category of categoriesParsed) {
                newCategory(category)
            }
            let categories = Array.from(document.querySelectorAll("div"))
            for (let i = 0; i < categories.length; i++) {
                if (categories[i].className !== "category") {
                    categories.splice(i, 1);
                }
            }
            for (const object of answers) {
                let split = object.split("|");
                let itemAnswer = split[0];
                let itemCategory = split[1];
                let points = split[2];
                let question = split[3];
                let categories_comprehensive = []
                for (let i = 0; i < categories.length; i++) {
                    categories_comprehensive.push({
                        elem: categories[i],
                        name: categories[i].querySelector("h3").textContent,
                    });
                }
                let matchingCategory = renWorks.matchingObj(categories_comprehensive, ["name", itemCategory])
                let properIndex = (points / 100) - 1
                let button = matchingCategory.elem.querySelectorAll("button")[properIndex]
                button.question = question;
                button.answer = itemAnswer
            }
        }
    } catch (e) {
        ogiltig();
        throw new Error(e)

    }
}
for (let i = 0; i < 5; i++) {
    newCategory(`Ny kategori (${i + 1})`);
}