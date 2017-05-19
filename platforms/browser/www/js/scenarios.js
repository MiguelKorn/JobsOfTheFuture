var backBtn = document.getElementById("back-btn");
var container = document.getElementById("container");
var currentPage = 1;
var mv = QueryString.mv;
var scenario = QueryString.option;
var jsonData = null;
backBtn.href = "routes.html?mv=" + mv;

var mc = new Hammer(container);
mc.on("swipeleft swiperight tap press", function (e) {
    console.log(e.type);
});

getJson("../js/jobs.json", function (err, data) {
    if(err !== null) {
        console.log("Something went wrong: " + err);
    } else {
        console.log("Fetched JSON");
        handleScenarios(data);
    }
});

var handleScenarios = function (data) {
    jsonData = data;
    showJob(mv, scenario);
};

var showJob = function (mv, scenario, job, text) {
    job = job || 0;
    text = text || 0;

    console.log(jsonData["scenarios"][scenario]["jobs"][job]);
    console.log(jsonData["scenarios"][scenario]["jobs"][job]["texts"][text]);
    container.innerHTML = jsonData["scenarios"][scenario]["jobs"][job]["texts"][text]["text"];

};



