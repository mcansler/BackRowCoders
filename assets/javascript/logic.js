$(".map").click(function(){
    $(".map").hide();
    $(".battleScreen").show();
    $(".defeatScreen").hide();
    $(".victoryScreen").hide();
})

$(".battleScreen").click(function(){
    $(".map").hide();
    $(".battleScreen").hide();
    $(".victoryScreen").show();
    $(".defeatScreen").hide();
})

// Logic to move the screen to the victory or defeat screen following click of the pokemon
$(".marker").click(function(){
    var catchChance;

    if (catchChance === 0) {
         $(".map").hide();
         $(".battleScreen").hide();
         $(".victoryScreen").hide();
         $(".defeatScreen").show();
    } else { 
        $(".map").hide();
        $(".battleScreen").hide();
        $(".victoryScreen").show();
        $(".defeatScreen").hide();
    }
})

$(".victoryScreen").click(function(){
    $(".map").hide();
    $(".battleScreen").hide();
    $(".victoryScreen").hide();
    $(".defeatScreen").show();
})

$(".defeatScreen").click(function(){
    $(".map").show();
    $(".battleScreen").hide();
    $(".victoryScreen").hide();
    $(".defeatScreen").hide();
})