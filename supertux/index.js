function update() {
    x.width = window.innerWidth;
    x.height = window.innerHeight;
}

let x = document.querySelector("iframe");
window.onresize = () => {
    update();
}
update();