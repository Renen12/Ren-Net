let fileNames = [
    "30",
    "1",
    "513(2)",
    "The crimson forest",
    "514",
    "0",
    "14",
    "24",
    "11",
    "A safe place",
    "32",
    "4",
    "docks",
    "18",
    "19",
    "513",
    "37",
    "9",
    "31",
    "8",
    "pitfalls",
    "7",
    "25",
    "12",
    "389",
    "40",
    "5",
    "docks(2)",
    "3",
    "6",
    "2",
    "38",
    "15",
    "The crimson forest (2)",
    "17",
    "9.1",
    "34",
    "69",
    "154",
    "13",
    "33",
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