function Playerloca(path, position) {
    const imageContainer = document.getElementById("casje");
    const existingImage = document.querySelector("#casje img");
    if (existingImage) {
        imageContainer.removeChild(existingImage);
    }

    const positions = {
        startpos: [
            { left: 1380, top: 450 },
        ],
        path1: [
            { left: 1350, top: 480 },
            { left: 1327, top: 503 },
            { left: 1300, top: 520 },
            { left: 1242, top: 550 },
            { left: 1208, top: 555 },
            { left: 1176, top: 558 },
            { left: 50, top: 50 },
            { left: 400, top: 400 }
        ],
        path2: [
            { left: 250, top: 50 },
            { left: 350, top: 50 }
        ],
        path3: [
            { left: 450, top: 50 },
            { left: 550, top: 50 }
        ],
        path4: [
            { left: 650, top: 50 },
            { left: 750, top: 50 }
        ],
        path5: [
            { left: 850, top: 50 },
            { left: 950, top: 50 }
        ],
        path6: [
            { left: 1050, top: 50 },
            { left: 1150, top: 50 }
        ],
        path7: [
            { left: 1250, top: 50 },
            { left: 1350, top: 50 }
        ]
    };

    const image = document.createElement("img");
    image.src = "IMG/cas.png";
    image.style.left = positions[path][position].left + "px";
    image.style.top = positions[path][position].top + "px";
    imageContainer.appendChild(image);
}



Playerloca("startpos", 0); // 0 = 1, 1 =2 etc

