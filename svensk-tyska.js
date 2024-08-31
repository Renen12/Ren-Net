// ändra om det kommer något till prov
document.body.style.backgroundColor = "#808080"
let nothing = true
if (nothing) {
    window.location = "finnsingenting.html"
}
document.getElementById("byt").onclick = () => {
    window.location = "tyska.html"
}
let frågorochsvar = {
    "die Schule": "skolan",
    "die Schulfächer": "skolämnen",
    "die Kunst": "konsten, bildämnet",
    "Geschichte": "historia",
    "Erdkunde": "geografi",
    "die Stunde": "timmen, lektionen",
    "Zwillinge": "tvillingar",
    "Warum nicht?": "Varför inte?",
    "die Affenhitze": "apvärmen, hettan",
    "der Eingang": "ingången",
    "Bis dann!": "Då ses vi då!",
}
let fråga = document.getElementById("fråga")
let index = 1
let svar = document.getElementById("svar")
let svara = document.getElementById("svara")
let felsvar = 1;
fråga.innerText = `Fråga 1: ${Object.values(frågorochsvar)[0]}`
document.getElementById("svara").onclick = () => {
    let svenskasvaret = Object.keys(frågorochsvar)[index - 1 ]
    if ( /* tyska svaret */Object.keys(frågorochsvar)[index - 1 ].toLowerCase().trim() == /* Användarens svar: */ svar.value.toLowerCase().trim()) {
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
    if (index +1 > Object.keys(frågorochsvar).length) {
        alert("Du har svarat på alla frågor.")
        window.location = "index.html"
    }
    fråga.innerText = `Fråga ${index + 1}: ${Object.values(frågorochsvar)[index]}`
    index++;
    svar.value = ""
}
