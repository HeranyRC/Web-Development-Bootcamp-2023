
var numeroDeBotoes= document.querySelectorAll(".drum").length;

for(i=0;i<numeroDeBotoes;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",clicado);
}
/*
document.querySelector(".w").addEventListener("click",clicado);
document.querySelector(".a").addEventListener("click",clicado);
document.querySelector(".s").addEventListener("click",clicado);
document.querySelector(".d").addEventListener("click",clicado);
document.querySelector(".j").addEventListener("click",clicado);
document.querySelector(".k").addEventListener("click",clicado);
document.querySelector(".l").addEventListener("click",clicado);
*/
function clicado(){
    alert("Fui Clicado!");
}