console.log(QueryString.mv);

var mv = QueryString.mv;
var optionOne = document.getElementById("optionOne");
var optionTwo = document.getElementById("optionTwo");

optionOne.href = "scenarios.html?mv=" + mv + "&option=0";
optionTwo.href = "scenarios.html?mv=" + mv + "&option=1";