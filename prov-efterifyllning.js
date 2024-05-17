// Retrieve and parse the questions and answers from localStorage
let frågorochsvar = JSON.parse(localStorage.getItem("frågorochsvar"));

// Initialize elements and variables
let fråga = document.getElementById("fråga");
let index = 1;
let svar = document.getElementById("svar");
let felsvar = 1;

// Display the first question
fråga.innerText = `Fråga 1: ${Object.keys(frågorochsvar)[0]}`;

// Add click event listener to the "svara" button
document.getElementById("svara").onclick = () => {
    // Check if all questions have been answered
    if (index +1> Object.keys(frågorochsvar).length) {
        alert("Du har svarat på alla frågor.");
        window.location = "index.html";
        return;
    }

    // Get the correct answer for the current question
    let riktigasvaret = frågorochsvar[Object.keys(frågorochsvar)[index - 1]];

    // Check if the user's answer is correct
    if (riktigasvaret.toLowerCase().trim() === svar.value.toLowerCase().trim()) {
        // Correct answer: move to the next question
        fråga.innerText = `Fråga ${index + 1}: ${Object.keys(frågorochsvar)[index]}`;
        index++;
        svar.value = "";
        felsvar = 1;  // Reset incorrect answer counter
    } else {
        // Incorrect answer
        if (felsvar == 3) {
            alert(`Fel svar, det rätta svaret var ${riktigasvaret}`);
            felsvar = 1;
            return;
        }
        alert("Fel svar, försök igen.");
        felsvar++;
    }
};