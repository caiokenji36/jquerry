$("#botao-frase").click(fraseAleatoria);
$("#botao-frase-id").click(buscaFrase);


function fraseAleatoria() {
    $("#spinner").toggle();

    $.get("http://localhost:3000/frases",trocaFraseAleatoria)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
    })
    .always(function(){// o always sempre vai funcionar mesmo se tiver a requisicao ou nao
        $("#spinner").toggle();
    });
}


function trocaFraseAleatoria(data) {
    let frase = $(".frase");
    let numeroAleatorio = Math.floor(Math.random() * data.length); // Math.floor para arredondar o numero
    frase.text(data[numeroAleatorio].texto);

    atualizaTamanho();
    atualizaTempoInicial(data[numeroAleatorio].tempo);
}

function buscaFrase(){
    $("#spinner").toggle();
    let fraseId = $("#frase-id").val(); // .val pega o valor do input
    let dados = { id: fraseId}; //enviando o id da frasId e passando na url em baixo
    $.get("http://localhost:3000/frases",dados,trocaFrase)
    .fail(function(){
        $("#erro").toggle();
        setTimeout(function(){
            $("#erro").toggle();
        },2000);
    })
    .always(function(){// o always sempre vai funcionar mesmo se tiver a requisicao ou nao
        $("#spinner").toggle();
    });
}

function trocaFrase(data){ //data é para voltar
    let frase = $(".frase");
    frase.text(data.texto);
    atualizaTamanho();
    atualizaTempoInicial(data.tempo);
}