var backBtn = document.getElementById("back");
var backText = document.getElementById("back-btn");
var jobText = document.getElementById("job-text");
var jobTool = document.getElementById("job-tool");
var char = document.getElementById("char-img");
var prevBtn = document.getElementById("prev");
var nextBtn = document.getElementById("next");
var bgImg = document.getElementById("bg-img");
var speechBubble = document.getElementById("speech-bubble");
var mv = QueryString.mv;
var sc = QueryString.sc;
var job = QueryString.job;
var currJob;
var currPage = 0;
var scName;
var prev = new Hammer(prevBtn);
var next = new Hammer(nextBtn);

backText.href = "chooseJob.html?mv=" + mv + "&sc=" + sc+"&job="+ job;

// var mc = new Hammer(jobText);
// mc.on("swipeleft swiperight tap press", function (e) {
//     console.log(e.type);
// });

getJson("../js/jobs.json", function (err, data) {
    if (err !== null) {
        console.log("Something went wrong: " + err);
    } else {
        console.log("Fetched JSON");
        scName = data["scenarios"][sc]["name"];
        currJob = data["scenarios"][sc]["jobs"][job];
        showJob();
    }
});

var showJob = function () {
    var jobName = lowercaseAndReplace(currJob["name"]);
    char.src = "../img/mv/" + scName + "/" + jobName + "/" + currJob['img'][mv];
    char.alt = currJob["img"][mv].replace(".png", "");
    bgImg.src = "../img/bg/" + currJob["img"]["bg"];
    bgImg.alt = currJob["img"][mv].replace(".png", "");


    setTimeout(function () {
        console.log("1sec ");
        char.classList.add("show");
        setTimeout(function () {
            speechBubble.classList.add("show");
            showJobText();
        },500);
    }, 500);
};

var showJobText = function () {
    console.log(currPage, currJob["texts"].length);

    prevBtn.classList.remove("hide");
    nextBtn.classList.remove("hide");
    backBtn.classList.add("hide");

    if (currPage === 0) {
        prevBtn.classList.add("hide");
    } else if (currPage === currJob["texts"].length - 1) {
        nextBtn.classList.add("hide");
        backBtn.classList.remove("hide");
    }

    // jobText.innerHTML = currJob["texts"][currPage];

    Typed.new('.type-text', {
        strings: [currJob["texts"][currPage]],
        typeSpeed: 0
    })
};

var prevJobText = function () {
    console.log("back");
    currPage -= 1;
    showJobText();
};

var nextJobText = function () {
    console.log("next");
    currPage += 1;
    showJobText();
};

prev.on("tap", prevJobText);
next.on("tap", nextJobText);
