import { $, bindDialogueProperty, createNewElementWithAttributes, hideDialogue, killDialogue, newDialogue, } from "./renWorks.js";
let referenceForLater = createNewElementWithAttributes("h2", {
    class: "external"
}, "renWorks exports some useful functions such as createElementWithAttributes and $(elementId).");
document.body.appendChild(referenceForLater);
// referenceForLater.innerText = "Modified"
let myDialogue = newDialogue({
    showImmediately: true,
    center: true,
    htmlContents: `<button id="mybtn">My button</button>`,
    type: "INFO",
})
$("mybtn").style.backgroundColor = "red"
// Hide dialogue gracefully: hideDialogue(myDialogue)
// Hide dialogue gracelessly: killDialogue(myDialogue)