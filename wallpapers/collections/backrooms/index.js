let fileNames = [0, 10, 11, 12, 13, 14, 15, 17, 1, 24, 25, 2, 37, 389, 38, 3, 40, 4, 5, 69, 6, 7, 8, 9, 'A safe place'
];
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