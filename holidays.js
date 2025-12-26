let christmas = true;
let halloween = false;
let newYears = false;

if (christmas) {
    document.body.style.backgroundColor = "#f90b0b"
}

if (newYears) {
    document.body.style.backgroundColor = "#000000";
    document.body.style.color = "#ffffff";
    document.getElementById("logga").src = "Ren-Net-NewYear.svg"
    for (let i = 1; i < 10; i++) {
        let firework = document.createElement("img");
        firework.src = "firework.webp"
        firework.style.position = "absolute";
        firework.style.top = Math.round(Math.random() * screen.availHeight) + "px";
        firework.style.left = Math.round(Math.random() * screen.availWidth) + "px";
        firework.onclick = () => {
            let sound = "Firework_launch.ogg";
            sound = new Audio(sound).play();

            setInterval(async () => {

                let currentTop = parseInt(window.getComputedStyle(firework).top) || 0;
                console.log("a" + currentTop)
                currentTop -= 10;
                console.log("b" + currentTop)

                if (parseInt(currentTop.toString().replace("-", "")) > screen.availHeight) {
                    let audio = new Audio("Firework_blast.ogg");
                    audio.play();
                    setTimeout(() => {
                        let twinkle = new Audio("Firework_twinkle.ogg");
                        twinkle.play();
                    }, Math.round(Math.random() * 1000))
                    firework.remove();
                }

                firework.style.top = currentTop;
            }, 5);
        }
        document.body.appendChild(firework)
    }

}