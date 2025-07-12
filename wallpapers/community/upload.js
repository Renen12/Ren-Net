import { $ } from "../../renworks/v1/renWorks.js";
let url = "https://ren-net.pockethost.io/"
const pb = new PocketBase(url);
$("wallpaper").onchange = async () => {
    const input = $("wallpaper");
    const data = {
        "image": input.files[0]
    };
    let dialog = document.createElement("dialog");
    dialog.style.borderColor = "blue";
    dialog.innerText = "Uploading, please wait...";
    document.body.appendChild(dialog);
    dialog.showModal();
    $("wallpaper").disabled = true;
    pb.collection('community_wallpapers_images').create(data).then(() => {
        dialog.close();
        $("wallpaper").disabled = false;
        alert("Your wallpaper has been uploaded!");
        window.location = "index.html"
    }).catch((err) => {
        dialog.close();
        $("wallpaper").disabled = false;
        alert("An error has occured, is your image in the right format(jpg, png, webp) or is it too large(max 5 megabytes)?");
    });
}