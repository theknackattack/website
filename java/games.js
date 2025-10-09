document.addEventListener("DOMContentLoaded", () => {
    const gallery = document.getElementById("game-gallery");
    const gameImages = [
        "fe8.jpg",
        "mhfu.jpg",
        "p5r.jpg",
        "tos.jpg"
    ];

    gameImages.forEach(imgName => {
        const img = document.createElement("img");
        img.src = `images/${imgName}`;
        img.alt = imgName.split('.')[0];
        gallery.appendChild(img);
    });

    const viewer = document.createElement("div");
    viewer.classList.add("image-viewer");
    viewer.innerHTML = `
        <span id="closeViewer">&times;</span>
        <img src="" alt="Large view">
    `;
    document.body.appendChild(viewer);

    const viewerImg = viewer.querySelector("img");
    const closeBtn = document.getElementById("closeViewer");

    gallery.addEventListener("click", e => {
        if (e.target.tagName === "IMG") {
            viewerImg.src = e.target.src;
            viewer.classList.add("active");
        }
    });

    closeBtn.addEventListener("click", () => {
        viewer.classList.remove("active");
    });

    viewer.addEventListener("click", e => {
        if (e.target === viewer) {
            viewer.classList.remove("active");
        }
    });
});
