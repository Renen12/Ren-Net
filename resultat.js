window.onload = function () {
  let betyg = document.getElementById("betyg");
  let se = document.getElementById("se");
  let march = document.getElementById("march");
  document.body.onmousedown = () => {
    if (document.getElementById("se") != null) {
      march.play();
    }
  };
  se.onclick = () => {
    se.remove();
    march.pause();
    switch (parseInt(localStorage.getItem("uträknatmedelvärde"))) {
      case 0:
        betyg.innerText = "Du fick ett F.";
        new Audio("vine-boom.mp3").play();
        setTimeout(() => {
          new Audio("milan.mp3").play();
        }, 1000);
        let img = document.getElementById("milan");
        img.src = "milan.jpg";
        break;
      case 1:
        betyg.innerText = "Du fick ett A.";
        let yipee = (document.getElementById("yipee").src = "yipee.webm");
        yipee.play();
        break;
      case 2:
        betyg.innerText = "Du fick ett B.";
        break;
      case 3:
        betyg.innerText = "Du fick ett C.";
        break;
      case 4:
        betyg.innerText = "Du fick ett D.";
        break;
      case 5:
        betyg.innerText = "Du fick ett E.";
        break;
      default:
        alert("Vad ska jag säga");
        window.close();
        break;
    }
  };
};
