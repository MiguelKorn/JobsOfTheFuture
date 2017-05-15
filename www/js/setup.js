function setOptions() {
    console.log(QueryString.mv);

    var mv = QueryString.mv;
    var optionOne = document.getElementById("optionOne");
    var optionTwo = document.getElementById("optionTwo");
    var optionThree = document.getElementById("optionThree");
    var optionFour = document.getElementById("optionFour");

    optionOne.href = "test.html?mv=" + mv + "&option=1";
    optionTwo.href = "test.html?mv=" + mv + "&option=2";
    optionThree.href = "test.html?mv=" + mv + "&option=3";
    optionFour.href = "test.html?mv=" + mv + "&option=4";
}