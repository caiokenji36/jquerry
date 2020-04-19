let tempoInicial = $("#tempo-digitacao").text();
let campo = $(".campo-digitacao");

$(document).ready(function () { //quando sua pagina estiver pronta, estiver carregada, vc chama tudo que esta aqui dentro
    atualizaTamanho();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    $("#botao-reiniciar").click(reiniciaJogo);
    atualizaPlacar();
    //selectize é um plugin externo que eu baixei
    $("#usuarios").selectize({
        create:true,
        sortField: 'text'
    });

    //tooltipster é um plugin externo que eu baixei
    $(".tooltip").tooltipster({
        trigger: "custom"
    });
    
});

/*$( pode ser feito assim tambem
    function(){ //quando sua pagina estiver pronta, estiver carregada, vc chama tudo que esta aqui dentro
    atualizaTamanho();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
}
);
*/


function atualizaTamanho() {

    let frase = $(".frase").text(); //selecionar a classe frase
    let numeroPalavras = frase.split(" ").length; //o split vai quebrar(separar) o conteudo pelos espacos 
    let tamanhoFrase = $("#tamanho-frase");

    tamanhoFrase.text(numeroPalavras);
}


function inicializaContadores() {
    
    campo.on("input", function () {
        
        let conteudo = campo.val();
        let qtdPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qtdPalavras);

        let qtdCaracteres = conteudo.length;
        $("#contador-caracteres").text(qtdCaracteres);
    });

}


function inicializaCronometro() {

    
    campo.one("focus", function () {
        let tempoRestante = $("#tempo-digitacao").text();
        let cronometroID = setInterval(function () {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                clearInterval(cronometroID);
                finalizaJogo();
            }    

        }, 1000);
    });

}

function finalizaJogo(){
    campo.attr("disabled", true);
               
    //campo.addClass("campo-desativado");// aqui vc esta adicionando uma classe que vc criou no css
    campo.toggleClass("campo-desativado");
    inserePlacar();

}



//$("#botao-reiniciar").on("click",function(){

//});

function reiniciaJogo() {

    campo.attr("disabled", false);
    campo.val(""); // colocar uma string vazia no campo
    $("#contador-palavras").text(0);
    $("#contador-caracteres").text(0);
    $("#tempo-digitacao").text(tempoInicial);
    inicializaCronometro();

    //campo.removeClass("campo-desativado"); // para remover a classe
    
    campo.toggleClass("campo-desativado"); //ele funciona como o add e remove junto
    campo.removeClass("borda-vermelha");
    campo.removeClass("borda-verde");

}

function inicializaMarcadores(){
    campo.on("input",function(){
        let frase = $(".frase").text();
        let digitado = campo.val();
        let comparavel = frase.substr(0,digitado.length); //vai pegar do começo ate onde eu digitei
    
        if(digitado == comparavel){
            campo.addClass("borda-verde");
            campo.removeClass("borda-vermelha");
        }else{
            campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
    });
    
}


function atualizaTempoInicial(tempo){
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
}






