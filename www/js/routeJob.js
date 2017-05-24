var mv = QueryString.mv;
var sc = QueryString.sc;
var currJobNum = Number(QueryString.job) || 0;
var currJobs;
var prevBtn = document.getElementById("job-prev");
var nextBtn = document.getElementById("job-next");
var jobImg = document.getElementById("job-img");
var charImg = document.getElementById("job-char-img");
var jobNum = document.getElementById("job-num");
var jobName = document.getElementById("job-name");
var jobStartBtn = document.getElementById("job-start");
var app = new Hammer(document.getElementById("app"));

var prev = new Hammer(prevBtn);
var next = new Hammer(nextBtn);

getJson("../js/jobs.json", function (err, data) {
    if (err !== null) {
        console.log("Something went wrong: " + err);
    } else {
        console.log("Fetched JSON");
        currJobs = data["scenarios"][sc];
        showJob();
    }
});
// var initAll = function (data) {
//
//     scName = data["scenarios"][sc]["name"];
//     jobs = data["scenarios"][sc]["jobs"];
//     jobOne.init();
//     jobTwo.init();
//     jobThree.init();
// };
var showJob = function () {
    var currJob = currJobs["jobs"][currJobNum];
    jobNum.innerHTML = (currJobNum + 1) + "/3";
    jobImg.src = "../img/bg/" + currJob["img"]["bg"];
    jobImg.alt = currJob["name"];
    charImg.src = "../img/mv/" + currJobs.name + "/" + lowercaseAndReplace(currJob.name) + "/" + currJob["img"][mv];
    jobName.innerHTML = currJob["name"];
    jobStartBtn.href = "showJob.html?mv=" + mv + "&sc=" + sc + "&job=" + currJobNum;
};

var showPrevJob = function () {
    if (currJobNum === 0) {
        currJobNum = 2;
    } else {
        currJobNum -= 1;
    }
    showJob();
};

var showNextJob = function () {
    if (currJobNum === 2) {
        currJobNum = 0;
    } else {
        currJobNum += 1;
    }
    showJob();
};

prev.on("tap", showPrevJob);
next.on("tap", showNextJob);

app.on("swiperight", showPrevJob);
app.on("swipeleft", showNextJob);