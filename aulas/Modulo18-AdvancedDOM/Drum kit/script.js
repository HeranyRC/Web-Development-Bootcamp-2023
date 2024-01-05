//click do mouse
var numeroDeBotoes= document.querySelectorAll(".drum").length;

for(i=0;i<numeroDeBotoes;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",clicado);
    
}
function clicado(){
    var botao=this.innerHTML;
    criarSom(botao);
    animacaoDosBotoes(botao);
    
}
//click do teclado
document.addEventListener("keydown",function(event){
    criarSom(event.key);
    animacaoDosBotoes(event.key);
});
//////////////////////////////////////
function criarSom(tecla){

    switch (tecla) {
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
        break;

        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
        break;

        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
        break;

        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
        break;

        case "j":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
        break;

        case "k":
            var kickBass= new Audio("sounds/kick-bass.mp3");
            kickBass.play();
        break;

        case "l":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
        break;

        /*default:
            alert(tecla);
        */
    }
}
/////////////////////////////////////////////////

function animacaoDosBotoes(botao){
    var botaoPressionado= document.querySelector("."+botao);
    botaoPressionado.classList.toggle("pressed");
    //função anonima dentro do set time out
    setTimeout(function(){
        botaoPressionado.classList.toggle("pressed");
    },100);
}



