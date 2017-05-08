$("a").on("tap",function(){
    $(this).hide();
});

$("b").on("swipeleft",function(){
    alert("You swiped left!");
});

$("c").on("swiperight",function(){
    alert("You swiped right!");
});