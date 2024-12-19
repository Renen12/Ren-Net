let fileNames = [
    "rouxls2",
    "together",
    "ditch",
    "Mettaton",
    "finale",
    "ruins",
    "friskandtoriel",
    "thebadguy",
    "friskandtoriel2",
    "rouxls",
    "sansandpapyrus",
    "theend",
    "happy",
    "finally",
    "thouworms",
    "thesun",
    "skateboards",
    "abadtime",
    "picture",
    "friends",
    "lancer",
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
    "minorincovenience",
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
