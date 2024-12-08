let fileNames = [
    "1",
    "0",
    "14",
    "24",
    "11",
    "A safe place",
    "4",
    "docks",
    "37",
    "9",
    "8",
    "7",
    "25",
    "12",
    "389",
    "40",
    "5",
    "3",
    "6",
    "2",
    "38",
    "15",
    "17",
    "69",
    "13",
    "10",
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