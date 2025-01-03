try {
    let temp = JSON.parse(localStorage.getItem("frågorochsvar"));
} catch (error) {
    alert("Ogiltigt prov.")
    window.location = "prov.html"
}
let frågorochsvar = JSON.parse(localStorage.getItem("frågorochsvar"));
if (frågorochsvar == null) {
    alert("Ogiltigt prov.")
    window.location = "prov.html"
}

let fråga = document.getElementById("fråga");
let index = 1;
let svar = document.getElementById("svar");
let felsvar = 1;

fråga.innerText = `Fråga 1: ${Object.keys(frågorochsvar)[0]}`;

document.getElementById("svara").onclick = () => {

    let riktigasvaret = frågorochsvar[Object.keys(frågorochsvar)[index - 1]];

    if (riktigasvaret.toLowerCase().trim() === svar.value.toLowerCase().trim()) {
        if (index + 1 > Object.keys(frågorochsvar).length) {
            alert("Du har svarat på alla frågor.")
            window.location = "index.html"
        }
        fråga.innerText = `Fråga ${index + 1}: ${Object.keys(frågorochsvar)[index]}`;
        index++;
        svar.value = "";
        felsvar = 1;
    } else {
        if (felsvar == 3) {
            alert(`Fel svar, det rätta svaret var ${riktigasvaret}`);
            felsvar = 1;
            return;
        }
        alert("Fel svar, försök igen.");
        felsvar++;
    }
};