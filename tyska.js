document.getElementById("byt").onclick = () => {
    window.location = "svensk-tyska.html"
}
let frågorochsvar = {
"der Tisch":  "bordet",

"der Stuhl":  "stolen",

"der Bleistift":  "pennan",

"der Spitzer":  "pennvässaren",

"das Buch":  "boken",

"das Heft": "skrivhäftet",

"der Schüler":  "eleven kille",

"die Schülerin":  "eleven tjej",

"die Schultasche":  "skolväskan",

"Der Hase springt": "Haren hoppar",

"Die Katze liebt Mäuse": "Katten älskar möss",

"Die Kuh gibt Milch": "Kon ger mjölk",

"der Hund": "hunden",

"die Katze": "katten",
"Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag": "Måndag, Tisdag, Onsdag, Torsdag, Fredag, Lördag, Söndag",

"das Wochenende": "Helgen",

"der Winter, der Frühling, der Sommer, der Herbst": "vintern, våren, sommaren, hösten",
"die Mutter, der Vater, der Sohn, die Tochter, die Oma, der Opa, der Bruder, die Schwester": "Mamman, Pappan, Sonen, Dottern, Farmorn/Mormorn, Farfarn/Morfarn, Brodern, Systern",
"Ich habe": "Jag har",
"Du hast": "Du har",
"Er hat": "Han har",
"Ich bin": "Jag är",
"Du bist": "Du är",
"Sie ist": "Hon är",
"Danke": "Tack",
"Bitte": "Varsågod",
"Auf Wiedersehen": "På återseende",
"Tschüss": "Hejdå",
}
let fråga = document.getElementById("fråga")
let index = 1
let svar = document.getElementById("svar")
let svara = document.getElementById("svara")
let felsvar = 1;
fråga.innerText = `Fråga 1: ${Object.keys(frågorochsvar)[0]}`
    if (index > Object.keys(frågorochsvar).length) {
        alert("Du har svarat på alla frågor.")
        window.location = "index.html"
    }
document.getElementById("svara").onclick = () => {
    let svenskasvaret = frågorochsvar[Object.keys(frågorochsvar)[index - 1 ]]
    if ( /* Svenska svaret */frågorochsvar[Object.keys(frågorochsvar)[index - 1 ]].toLowerCase().trim() == /* Användarens svar: */ svar.value.toLowerCase().trim()) {
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
    fråga.innerText = `Fråga ${index + 1}: ${Object.keys(frågorochsvar)[index]}`
    index++;
    svar.value = ""
}
