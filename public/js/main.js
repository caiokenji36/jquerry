let tempoInicial = $("#tempo-digitacao").text();
let campo = $(".campo-digitacao");

$(document).ready(function () { //quando sua pagina estiver pronta, estiver carregada, vc chama tudo que esta aqui dentro
    atualizaTamanho();
    inicializaContadores();
    inicializaCronometro();
    $("#botao-reiniciar").click(reiniciaJogo);
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

    let tempoRestante = $("#tempo-digitacao").text();
    campo.one("focus", function () {
        let cronometroID = setInterval(function () {
            tempoRestante--;
            $("#tempo-digitacao").text(tempoRestante);
            if (tempoRestante < 1) {
                campo.attr("disabled", true);
                clearInterval(cronometroID);
                campo.addClass("campo-desativado");// aqui vc esta adicionando uma classe que vc criou no css
            }

        }, 1000);
    });

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


}



