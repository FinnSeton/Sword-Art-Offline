function addImage(position) {
    const imageContainer = document.getElementById("casje");
    const existingImage = document.querySelector("#casje img");
    if (existingImage) {
        imageContainer.removeChild(existingImage);
    }

    const positions = {
        "startpos": { left: 1370, top: 450 },
        "pos2": { left: 200, top: 200 },
        "pos3": { left: 350, top: 350 }
    };

    const image = document.createElement("img");
    image.src = "IMG/cas.png";
    image.style.left = positions[position].left + "px";
    image.style.top = positions[position].top + "px";
    imageContainer.appendChild(image);
}


addImage("startpos");


