
var buttonColors=["green","red","yellow","blue"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;

function nextSequence() {
    
    gameInteraction();
    userInteraction();
    $("h1").text("level "+level);
    level++;
}

function gameInteraction(){
    var random= Math.floor(Math.random()*4);
    var randomChosenColor=buttonColors[random];
    animacao(randomChosenColor);
    gamePattern.push(randomChosenColor);
    console.log(gamePattern);
}

function animacao(cor){
    $("#"+cor).fadeOut(200).fadeIn(200);
    var som= new Audio("sounds/"+cor+".mp3");
    som.play();
}

function userInteraction(){
    var userChosenColor;
    $(".btn").click(function (){
        userChosenColor=$(this).attr("id");
        //animatePress(userChosenColor);
        animacao(userChosenColor);
        userClickedPattern.push(userChosenColor);
        console.log(userClickedPattern);
    });
}

/*
function animatePress(currentColor){
    $("#"+currentColor).addClass("pressed");
    setTimeout(function (){$("#"+currentColor).removeClass("pressed")},100);
    
}
*/

function start(){
    if(level===0)
        $(document).keypress(nextSequence);
    
}

function checkAnswer(level){

}

start();
