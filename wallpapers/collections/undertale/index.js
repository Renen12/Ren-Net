let fileNames = ["thesun", "abadtime", "asgore", "butterscotch", "friends", "friskandtoriel", "friskandtoriel2", "happy", "Mettaton", "sansandpapyrus", "theenddog", "finale", "gardens", "Meeting the sun", "ruins", "sans", "theend"];
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