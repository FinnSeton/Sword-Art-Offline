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
            { left: "71%", top: "52.7%" },
            { left: "69.5%", top: "55%" },
            { left: "68%", top: "56.5%" },
            { left: "66.6%", top: "58.5%" },
            { left: "65%", top: "60%" },
            { left: "63.4%", top: "60.5%" },
            { left: "61.6%", top: "60.6%" },
        ],
        path2: [
            { left: "69%", top: "49.2%" },
            { left: "68%", top: "49.2%" },
            { left: "66.7%", top: "48%" },
            { left: "65.5%", top: "47%" },
            { left: "64.2%", top: "46%" },
            { left: "62.8%", top: "46%" },
            { left: "61.6%", top: "46%" },
            { left: "60.3%", top: "46%" },
            { left: "59%", top: "45.2%" }
        ],
        path3: [
            { left: "54.7%", top: "49.2%" },
            { left: "55.7%", top: "51.2%" },
            { left: "57.5%", top: "51.2%" },
            { left: "59.3%", top: "51.2%" },
            { left: "59.3%", top: "54.1%" },
            { left: "58%", top: "54.6%" },
            { left: "56.3%", top: "55.8%" },
            { left: "55.6%", top: "58.5%" },
            { left: "56.6%", top: "60.6%" }
        ],
        path4: [
            { left: "53.6%", top: "45.6%" },
            { left: "53%", top: "48.6%" },
            { left: "52.4%", top: "51.6%" },
            { left: "51.5%", top: "54.3%" },
            { left: "49.9%", top: "55.2%" },
            { left: "48.1%", top: "55.2%" },
            { left: "46.4%", top: "55%" },
            { left: "44.4%", top: "54.7%" },
            { left: "42.8%", top: "54.7%" },
            { left: "41%", top: "55,2%" },
            { left: "39.5%", top: "56.4%" },
            { left: "38.1%", top: "58.4%" },
            { left: "36.8%", top: "60.4%" }
        ],
        path5: [
            { left: "57.8%", top: "38.4%" },
            { left: "57.4%", top: "34.4%" },
            { left: "55.8%", top: "33.4%" },
            { left: "53.8%", top: "34%" },
            { left: "52.3%", top: "35.5%" },
            { left: "50.3%", top: "34.5%" },
            { left: "48.6%", top: "32.2%" },
            { left: "46.6%", top: "32.4%" },
            { left: "44.9%", top: "33.9%" },
            { left: "43.9%", top: "36.6%" },
            { left: "42.9%", top: "38.97%" },
            { left: "41.2%", top: "41.3%" },
            { left: "41%", top: "45.3%" },
            { left: "40.8%", top: "48.6%" },
            { left: "39.9%", top: "50.9%" },
            { left: "38.6%", top: "53.4%" },
            { left: "37.4%", top: "55.4%" },
            { left: "36%", top: "58%" }
        ],
        path6: [
            { left: "58.4%", top: "64.5%" },
            { left: "57.6%", top: "66.9%" },
            { left: "56.2%", top: "68.3%" },
            { left: "54.5%", top: "67.3%" },
            { left: "53.2%", top: "65.3%" },
            { left: "51.4%", top: "65.2%" },
            { left: "49.6%", top: "65.4%" },
            { left: "47.6%", top: "65%" },
            { left: "46.5%", top: "62.3%" },
            { left: "44.8%", top: "61.3%" },
            { left: "44.1%", top: "60.8%" },
            { left: "41.4%", top: "60,8%" },
            { left: "39,7%", top: "61.7%" },
            { left: "38,2%", top: "63.4%" },

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