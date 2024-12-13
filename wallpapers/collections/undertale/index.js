let fileNames = [
    "together",
    "ditch",
    "Mettaton",
    "finale",
    "ruins",
    "friskandtoriel",
    "thebadguy",
    "friskandtoriel2",
    "sansandpapyrus",
    "theend",
    "happy",
    "finally",
    "thesun",
    "skateboards",
    "abadtime",
    "picture",
    "friends",
    "asgore",
    "sans",
    "butterscotch",
    "foolish",
    "theenddog",
    "We call that the sun",
    "damn",
    "Meeting the sun",
    "demons",
    "whoopeecushion",
    "gardens",
    "lmao",
]



fileNames.forEach((fileName) => {
    let imgElem = document.createElement("img")
    imgElem.src = fileName + ".png";
    imgElem.setAttribute("download", fileName + ".png")
    imgElem.onclick = () => {
        let tmpLink = document.createElement("a")
        tmpLink.download = ""
        tmpLink.id = "tmp"
        tmpLink.href = fileName + ".png"
        document.body.appendChild(tmpLink)
        document.getElementById("tmp").click();
        document.getElementById("tmp").remove();
    }
    imgElem.style.userSelect = "none"
    document.body.appendChild(imgElem);
});
