var backBtn = document.getElementById("back-btn");
var container = document.getElementById("container");
var mv = QueryString.mv;
var jsonData;
backBtn.href = "routes.html?mv=" + mv;

getJson("http://miguelkorn.nl/School/jobs.json", function (err, data) {
    if(err !== null) {
        console.log("Something went wrong: " + err);
    } else {
        console.log("Fetched JSON");
        jsonData = data;
    }
});

if(jsonData) console.log(jsonData);

var page1 = {
    name: "page1",
    content: "helloworld!"
};
var page2 = {
    name: "page2",
    content: "helloworld2"
};
var page3 = {
    name: "page3",
    content: "helloworld3"
};

var mc = new Hammer(container);
mc.on("swipeleft swiperight tap press", function (e) {
    console.log(e.type);
});

var currentPage = 1;
var pages = [];
pages.push(page1);
pages.push(page2);
pages.push(page3);

console.log(pages);

var fl = makeList(pages);
console.log(fl);

// container.innerHTML = fl;

function makeList(pages) {
    var tmpNum = 1;
    var list = "<ul>";
    pages.forEach(function (page) {
        list += "<li id='" + tmpNum + "'><h3>" + page.name + "</h3><p>" + page.content + "</p></li>";
        tmpNum++;
    });
    list += "</ul>";
    return list;
}

