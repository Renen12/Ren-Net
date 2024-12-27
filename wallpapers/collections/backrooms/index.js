let fileNames = [
    "30",
    "1",
    "513(2)",
    "The crimson forest",
    "514",
    "0",
    "14",
    "48",
    "24",
    "11",
    "A safe place",
    "32",
    "4",
    "docks",
    "18",
    "19",
    "513",
    "94",
    "37",
    "37.835",
    "9",
    "43",
    "31",
    "8",
    "pitfalls",
    "7",
    "94(2)",
    "25",
    "12",
    "389",
    "40",
    "5",
    "41",
    "docks(2)",
    "42",
    "3",
    "44",
    "49",
    "45",
    "6",
    "2",
    "38",
    "50",
    "15",
    "47",
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