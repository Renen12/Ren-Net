import { createNewElementWithAttributes } from "./renWorks.js";
let referenceForLater = createNewElementWithAttributes("h2", {
    centered: true,
    class: "external"
}, "renWorks exports some useful functions such as createElementWithAttributes and $(elementId).");
// referenceForLater.innerText = "Modified"