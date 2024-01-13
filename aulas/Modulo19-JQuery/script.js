
/* jQuery ou $ */

////////////////////////////////////////////    Manipulando estilos    //////////////////////////////////////////////////////

//$("h1").css("color","red");          // Se tivermos dois parametros é para adicionar (Set)

//$("h1").css("color");               // se tivermos apenas um parametro é para saber qual é (Get)

/*Não esquecer de manter o codigo o mais limpo possivel, mantendo o estilo apenas no css e o script apenas no javascript */


$("h1").addClass("Gigante"); // Add classe

$("h1").removeClass("Gigante"); // remove classe

$("h1").addClass("Gigante margem-50"); // add varias classes

alert($("h1").hasClass("Gigante")); // verifica se existe a classe

//////////////////////////////////////   Manipulando textos   //////////////////////////////////////////////

$("h1").text("Tchau.");        // Altera apenas o texto igual ao textContent

$("button").html("<em>Não Clica</em>");    // Altera o elemento de texto igual ao innerHtml

// $("button").eq(1).html("<em>Não Clica</em>");  .eq(1) seleciona apenas o elemento com indice 1 para fazer as mudanças
// $("button:eq(1)").html("<em>Não Clica</em>");  :eq(1) faz exatamente o mesmo que o exemplo anterior

///////////////////////////////////////    Atributos     /////////////////////////////////////////////

$("a").attr("href","https://www.bing.com");  // Adiciona ou verifica os atributos

alert($("h1").attr("class")); // Lembrando que as classes tbm são atributos

///////////////////////////////////////    Eventos     /////////////////////////////////////////

$("button").click(function(){$("h1").css("color","purple")});

$(document).keypress(function(event){$("h1").text(event.key)});

/* Exemplo avançado */
$("h1").hover(
    function(){$("h1").css("color","red")},
    function(){$("h1").css("color","blue")}
);

// $("button").on("click",function(){$("h1").css("color","purple")});  .on faz exatamente oq as três acima fazem, mas é mais pratica.

///////////////////////////////////////    Adicionar e Remover elementos     /////////////////////////////////////

$("h1").before("<button>Botao</button>"); // Adiciona um elemento antes do elemento selecionado
$("h1").after("<button>Botao</button>"); // Adiciona um elemento depois do elemento selecionado

$("h1").prepend("<button>Botao</button>"); // Adiciona um elemento dentro do elemento selecionado mas antes do conteudo do elemento
$("h1").append("<button>Botao</button>"); // Adiciona um elemento dentro do elemento selecionado mas depois do conteudo do elemento

// $("button").remove();     Remove todos os elementos selecionados, mas aceita um parametro para filtrar, tal como uma classe
// $("h1").empty();         apaga todo conteudo de dentro do elemento

/////////////////////////////////   Animações    ///////////////////////////////////////

$("button").click(function(){
    // $("h1").toggle();        O hide oculta o elemento de forma brusca, o show mostra, e o toggle alterna entre os dois.
    // $("h1").fadeToggle();       // Efeito de desaparecimento mais suave, igual ao toogle mas a sua versão hide e show são fadeOut e fadeIn
    // $("h1").slideToggle();       // igual aos outros dois, mas com efeito de ir pra cima ao desaparecer, sendo o slideUp para cima e slideDown para baixo
    // $("h1").animate({opacity:0.5});       // animate é usado para criar algum efeito usando css, mas apenas elementos que usam valores numericos como margem e etc
    $("h1").fadeOut().slideDown().animate({margin:20}).animate({opacity:0.5});  // Tudo pode ser feito em ordem
});