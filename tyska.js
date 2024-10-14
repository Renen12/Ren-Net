document.body.style.backgroundColor = "#808080"
if (nothing) {
    window.location = "finnsingenting.html"
}
document.getElementById("byt").onclick = () => {
    window.location = "svensk-tyska.html"
}
function answer() {
    let svenskasvaret = frågorochsvar[Object.keys(frågorochsvar)[index - 1]]
    if ( /* Svenska svaret */frågorochsvar[Object.keys(frågorochsvar)[index - 1]].toLowerCase().trim() == /* Användarens svar: */ svar.value.toLowerCase().trim()) {
        // orkar inte ändra
    } else {
        if (felsvar == 3) {
            alert(`Fel svar, det rätta svaret var ${svenskasvaret}`)
            felsvar = 1
            return

        }
        alert("Fel svar, försök igen.")
        felsvar++;
        return

    }
    if (index + 1 > Object.keys(frågorochsvar).length) {
        alert("Du har svarat på alla frågor.")
        window.location = "index.html"
    }
    fråga.innerText = `Fråga ${index + 1}: ${Object.keys(frågorochsvar)[index]}`
    index++;
    svar.value = ""
}
let fråga = document.getElementById("fråga")
let index = 1
let svar = document.getElementById("svar")
let svara = document.getElementById("svara")
let felsvar = 1;
fråga.innerText = `Fråga 1: ${Object.keys(frågorochsvar)[0]}`
document.getElementById("svara").onclick = () => {
    answer();
}
document.getElementById("svar").onkeydown = (k) => {
    if (k.keyCode == 13) {
        answer();
    }
}