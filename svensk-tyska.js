document.body.style.backgroundColor = "#808080"
if (nothing) {
    window.location = "finnsingenting.html"
}
document.getElementById("byt").onclick = () => {
    window.location = "tyska.html"
}
let fråga = document.getElementById("fråga")
let index = 1
let svar = document.getElementById("svar")
let svara = document.getElementById("svara")
let felsvar = 1;
fråga.innerText = `Fråga 1 av ${Object.keys(frågorochsvar).length}: ${Object.values(frågorochsvar)[0]}`
function answer() {
    let svenskasvaret = Object.keys(frågorochsvar)[index - 1 ]
    if ( /* tyska svaret */Object.keys(frågorochsvar)[index - 1 ].toLowerCase().trim() == /* Användarens svar: */ svar.value.toLowerCase().trim()) {
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
    if (index +1 > Object.keys(frågorochsvar).length) {
        alert("Du har svarat på alla frågor.")
        window.location = "index.html"
    }
    fråga.innerText = `Fråga ${index + 1} av ${Object.keys(frågorochsvar).length}: ${Object.values(frågorochsvar)[index]}`
    index++;
    svar.value = ""
}
document.getElementById("svara").onclick = () => {
    answer();
}
document.getElementById("svar").onkeydown = (k) => {
    if (k.keyCode == 13) {
        answer();
    }
}
