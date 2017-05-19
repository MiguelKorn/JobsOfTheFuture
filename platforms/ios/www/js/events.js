function swipeEvent() {
    console.log('swipre ready');
    var app = document.getElementById("test");

    var mc = new Hammer(app);
    mc.on("panleft panright swipeleft swiperight tap press", function (e) {
        console.log(e.type);
        app.textContent = e.type +" gesture detected.";
    });
}