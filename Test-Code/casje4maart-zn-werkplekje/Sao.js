function Playerloca(path, position) {
    const imageContainer = document.getElementById("casje");
    const existingImage = document.querySelector("#casje img");
    if (existingImage) {
        imageContainer.removeChild(existingImage);
    }

    const positions = {
        startpos: [
            { left: "92%", top: "56.25%" }
        ],
        forestcamp: [
            { left: "75%", top: "69.75%" }
        ],
        dorp: [
            { left: "71.67%", top: "51.87%" }
        ],
        smallcastle: [
            { left: "45%", top: "76.25%" }
        ],
        bigcastle: [
            { left: "42.67%", top: "42.5%" }
        ],
        path1: [
            { left: "90%", top: "51.43%" },
            { left: "88.47%", top: "50.2%" },
            { left: "86.67%", top: "52%" },
            { left: "82.8%", top: "55%" },
            { left: "80.53%", top: "55.62%" },
            { left: "78.4%", top: "55.87%" }
        ],
        path2: [
            { left: "88%", top: "45%" },
            { left: "86.33%", top: "45%" },
            { left: "85%", top: "43.12%" },
            { left: "83.33%", top: "42%" },
            { left: "81.67%", top: "42%" },
            { left: "80%", top: "42%" },
            { left: "78.33%", top: "42%" },
            { left: "76.67%", top: "42%" },
            { left: "75%", top: "51.87%" }
        ],
        path3: [
            { left: "70%", top: "54.38%" },
            { left: "70.87%", top: "54.38%" },
            { left: "73.33%", top: "54.38%" },
            { left: "75.33%", top: "54.38%" },
            { left: "75.33%", top: "61.87%" },
            { left: "73.33%", top: "62.5%" },
            { left: "71.67%", top: "63.75%" },
            { left: "70.67%", top: "67.19%" },
            { left: "71.67%", top: "69.38%" }
        ],
        path4: [
            { left: "68.33%", top: "51.25%" },
            { left: "67.33%", top: "55%" },
            { left: "66.67%", top: "59.38%" },
            { left: "63.33%", top: "63.12%" },
            { left: "61.33%", top: "63.12%" },
            { left: "58.67%", top: "62.5%" },
            { left: "55.67%", top: "62.5%" },
            { left: "53.67%", top: "62.5%" },
            { left: "52%", top: "63.12%" },
            { left: "50%", top: "68.75%" },
            { left: "49%", top: "67.19%" },
            { left: "46.67%", top: "68.75%" },
            { left: "46.67%", top: "73.12%" },
            { left: "46.33%", top: "76.25%" },
            { left: "45.33%", top: "78.12%" },
            { left: "44%", top: "79.37%" },
            { left: "42.67%", top: "81.25%" },
            { left: "41.67%", top: "82.87%" },
            { left: "40%", top: "85%" },
            { left: "38%", top: "87.5%" }
        ],
        path5: [
            { left: "73.33%", top: "46.25%" },
            { left: "73%", top: "42.19%" },
            { left: "71.33%", top: "40%" },
            { left: "68.33%", top: "41.25%" },
            { left: "66.33%", top: "42.5%" },
            { left: "64%", top: "40.37%" },
            { left: "61%", top: "38.12%" },
            { left: "59.67%", top: "38.12%" },
            { left: "57.33%", top: "41.25%" },
            { left: "55.67%", top: "44.37%" },
            { left: "54%", top: "46.87%" },
            { left: "52.33%", top: "49.38%" },
            { left: "52.33%", top: "53.75%" },
            { left: "51.67%", top: "58.12%" },
            { left: "50.67%", top: "61.87%" },
            { left: "49.33%", top: "63.12%" },
            { left: "48.33%", top: "64.37%" },
            { left: "46.33%", top: "67.5%" }
        ],
        path6: [
            { left: "70%", top: "6.25%" },
            { left: "76.67%", top: "6.25%" }
        ],
        path7: [
            { left: "42.33%", top: "71.87%" },
            { left: "42.67%", top: "66.87%" },
            { left: "44%", top: "63.75%" },
            { left: "46%", top: "61.25%" },
            { left: "47.67%", top: "59.37%" },
            { left: "49.33%", top: "56.25%" },
            { left: "51.33%", top: "53.12%" },
            { left: "51.67%", top: "49.37%" },
            { left: "51.33%", top: "45.62%" },
            { left: "50.67%", top: "42.5%" }
        ]
    };

    const image = document.createElement("img");
    image.src = "IMG/cas.png";
    image.style.left = positions[path][position].left;
    image.style.top = positions[path][position].top;
    imageContainer.appendChild(image);
  }
  
  // Example usage: Change player's location to "path1", position 0
  Playerloca("path1", 1);