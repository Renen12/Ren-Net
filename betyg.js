function räknaut() {
    let allafelaktiga = false
    let hkk = document.getElementById("hkk")
    let no = document.getElementById("no")
    let so = document.getElementById("so")
    let eng = document.getElementById("eng")
    let idh = document.getElementById("idh")
    let ma = document.getElementById("ma")
    let språk = document.getElementById("språk")
    let bl = document.getElementById("bl")
    let sl = document.getElementById("sl")
    let sv = document.getElementById("sv")
    const alla = [hkk.value, no.value, so.value, eng.value, idh.value, ma.value, språk.value, bl.value, sl.value, sv.value]
    let medelvärde = 0;
    let felaktigabetyg = 0;
    alla.forEach(function(värde) {
       try {
        switch (värde.toUpperCase()) {
            case "a".toUpperCase():
                medelvärde += 1
                break
            case "b".toUpperCase() :
                medelvärde += 2
                break
            case "c".toUpperCase():
                medelvärde += 3
                break
            case "d".toUpperCase():
                medelvärde += 4
                break
            case "e".toUpperCase():
                medelvärde += 5
                break
            case "f".toUpperCase():
                medelvärde += 0
                break
            default:
                felaktigabetyg += 1
                break
        }
       } catch (error) {
        console.log(error)
       }
    });
    if (felaktigabetyg == alla.length) {
        alert("Du måste skriva i några icke felaktiga betyg.")
        allafelaktiga = true
    }
    if (felaktigabetyg > 0 && allafelaktiga == false) {
        alert(`Du har ${felaktigabetyg} felaktiga betyg! Felaktiga betyg inkluderas inte i medelvärdet.`)
    }
    if (allafelaktiga != true) {
        const uträknatmedelvärde = Math.round(medelvärde / alla.length)
        localStorage.setItem("uträknatmedelvärde", uträknatmedelvärde)
        window.location = "resultat.html"
    }
}