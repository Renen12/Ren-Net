async function main() {
    const url = "https://ren-net.pockethost.io";
    const pb = new PocketBase(url)
    const bloggar = await pb.collection("bloggar").getFullList({
        sort: "created"
    })
    for (let i = 0; i < bloggar.length; i++) {
        let post = bloggar[i];
        let surroundingDiv = document.createElement("div");
        surroundingDiv.className = "postDiv"
        let button = document.createElement("button")
        button.className = "post"
        button.innerText = post.title
        button.onclick = () => {
            let id = post.id;
            localStorage.setItem("post", id);
            window.location = `blogg.html`
        }
        surroundingDiv.appendChild(button);
        document.body.appendChild(surroundingDiv)
    }
}
main().then(() => {
    console.log("Finished Loading")
    document.getElementById("loader").remove();
})