var controlImg = document.getElementById("control-img");
var controlText = document.getElementById("control-text");
var toScenario = document.getElementById("to-scenario");
var imageSlider = document.getElementById("slider");
var dots = document.getElementsByClassName("dot");
var slider = new Hammer(imageSlider);
var currNum = 1;
var text = ["Kies een persoon", "Kies een scenario", "Kies een job", "Lees wat de persoon over de job te vertellen heeft"];

var showImage = function () {
    controlImg.alt = currNum;
    controlImg.src = "../img/controls/c" + currNum + ".png";
    controlText.innerHTML = text[currNum - 1];
    if(currNum===4) {
        toScenario.classList.remove("hide");
    }
    for (var i = 0; i < dots.length; i++) {
        (i + 1) === currNum ? dots[i].classList.add("active") : dots[i].classList.remove("active");
    }
};

var prevImage = function () {
    if (currNum !== 1) {
        currNum -= 1
    }
    showImage();
};

var nextImage = function () {
    if (currNum !== 4) {
        currNum += 1;
    }
    showImage();
};

showImage();

slider.on("swiperight", prevImage);
slider.on("swipeleft", nextImage);