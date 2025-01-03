let url = "https://ren-net.pockethost.io"
async function main() {
    const pb = new PocketBase(url);
    let wallpapers = await pb.collection('community_wallpapers_images').getFullList({
        sort: 'created',
    });
    if (wallpapers.length == 0) {
        let dialog = document.createElement("dialog");
        dialog.style.borderColor = "blue";
        dialog.innerText = "No wallpapers have been uploaded, why don't you upload some?";
        dialog.onclick = () => { window.location = "upload.html" };
        document.body.appendChild(dialog);
        dialog.showModal();
    }
    for (let i = 0; i < wallpapers.length; i++) {
        let source = `${url}/api/files/community_wallpapers_images/${wallpapers[i].id}/${wallpapers[i].image}`;
        let image = document.createElement("img");
        image.src = source;
        image.style.maxWidth = "100%";
        image.style.maxHeight = "100%";
        image.style.objectFit = "contain";
        document.body.appendChild(image);
    }

}
main();