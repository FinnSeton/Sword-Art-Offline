function Playerloca(path, position) {
    const imageContainer = document.getElementById("casje");
    const existingImage = document.querySelector("#casje img");
    if (existingImage) {
        imageContainer.removeChild(existingImage);
    }

    const positions = {
        startpos: [
            { left: 1380, top: 450 }
        ],
        forestcamp: [
            { left: 1125, top: 558 }
        ],
        dorp: [ {left: 1075, top: 415}
        ],
        smallcastle: [
            { left: 675, top: 610 }
        ],
        bigcastle: [
            { left: 640, top: 340 }
        ],

        path1: [
            { left: 1350, top: 480 },
            { left: 1327, top: 503 },
            { left: 1300, top: 520 },
            { left: 1242, top: 550 },
            { left: 1208, top: 555 },
            { left: 1176, top: 558 },
        ],
        path2: [
            { left: 1320, top: 450},
            { left: 1295, top: 450},
            { left: 1275, top: 435},
            { left: 1250, top: 420},
            { left: 1225, top: 420},
            { left: 1200, top: 420},
            { left: 1175, top: 420},
            { left: 1150, top: 420},
            { left: 1125, top: 415},      
        ],

        path3: [
            { left: 1050, top: 470},
            { left: 1065, top: 470},
            { left: 1100, top: 470},
            { left: 1130, top: 470},
            { left: 1130, top: 495},
            { left: 1100, top: 500},
            { left: 1075, top: 510},
            { left: 1060, top: 535},
            { left: 1075, top: 555},
        ],
        path4: [
            { left: 1025, top: 410 },
            { left: 1010, top: 440 },
            { left: 1000, top: 470 },
            { left: 950, top: 505 },
            { left: 920, top: 505 },
            { left: 880, top: 500 },
            { left: 845, top: 500 },
            { left: 815, top: 500 },
            { left: 780, top: 505 },
            { left: 750, top: 520 },
            { left: 735, top: 535 },
            { left: 700, top: 550 },
        ],
        path5: [
            { left: 1100, top: 350 },
            { left: 1095, top: 315 },
            { left: 1070, top: 300 },
            { left: 1025, top: 310 },
            { left: 995, top: 320 },
            { left: 960, top: 305 },
            { left: 930, top: 290 },
            { left: 895, top: 290 },
            { left: 860, top: 310 },
            { left: 835, top: 335 },
            { left: 810, top: 355 },
            { left: 785, top: 380 },
            { left: 785, top: 410 },
            { left: 775, top: 445 },
            { left: 760, top: 465 }, 
            { left: 735, top: 485 },
            { left: 710, top: 505 },
            { left: 685, top: 530 },


        ],
        path6: [
            { left: 1050, top: 50 },
            { left: 1150, top: 50 }
        ],
        path7: [
            { left: 635, top: 575 },
            { left: 640, top: 535 },
            { left: 655, top: 510 },
            { left: 675, top: 490 },
            { left: 695, top: 475 },
            { left: 710, top: 450 },
            { left: 730, top: 425 },
            { left: 735, top: 395 },
            { left: 730, top: 365 },
            { left: 715, top: 340 },
        ]
    };

    const image = document.createElement("img");
    image.src = "IMG/cas.png";
    image.style.left = positions[path][position].left + "px";
    image.style.top = positions[path][position].top + "px";
    imageContainer.appendChild(image);
}



Playerloca("startpos", 0); // 0 = 1, 1 =2 etc

