
var buttonColors=["green","red","yellow","blue"];
var gamePattern=[];
var userClickedPattern=[];
var level=0;
var flag=true;
var lastItem= userClickedPattern.length-1

function nextSequence() {
    
    gameInteraction();
    
    $("h1").text("level "+level);
    level++;
}
userInteraction();
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
        checkAnswer(lastItem);
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
    if(flag)
        $(document).keypress(nextSequence);
    else
        alert("Yha");
    flag=false;
}

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel]==gamePattern[currentLevel]){
        console.log("Certo...");
        nextSequence();
    }
} 

start();
