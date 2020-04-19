
$("#botao-placar").click(mostraPlacar);


function inserePlacar(){
    let corpoTabela = $(".placar").find("tbody"); //o find quer dizer que vc esta procurando uma tbody que esta dentro de placar
    let usuario = "Caio";
    let numPalavras=$("#contador-palavras").text();
   
    let linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);
    
    //corpoTabela.append(linha); //append para adicionar no html, tambem sempre adiciona no final da tabela
    corpoTabela.prepend(linha); // esse adiciona antes

    $(".placar").slideDown(500);
    scrollPlacar();

}

function scrollPlacar(){
    var posicaoPlacar = $(".placar").offset().top;   

posicaoPlacarPx = posicaoPlacar+"px";

setTimeout( function () {
    $('body, html').stop().animate({ scrollTop: posicaoPlacarPx }, 100);
}, 500);

}


function removeLinha(){
        event.preventDefault(); //para nao acontecer algo de padrao
        //$(this).parent().parent().remove();
        let linha = $(this).parent().parent();
        linha.fadeOut(1000); // igual o remover, mas com efeito
        setTimeout(function(){
            linha.remove();
        },1000);
        
 
    }
    

function novaLinha(usuario, numPalavras){
    let linha = $("<tr>");
    let colunaUsuario = $("<td>").text(usuario);
    let colunaPalavras = $("<td>").text(numPalavras);
    let colunaRemover = $("<td>");
    let link = $("<a>").addClass("botao-remover").attr("href","#");
    let icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);
    
    return linha;
}

function mostraPlacar(){
    //$(".placar").show(); //quando clica mostra e o hide esconde
   // $(".placar").toggle();//ele ja faz o show e o hide junto
  // $(".placar").slideDown(2000); // coloca uma animacao de aparecer e tem o slideUp
  $(".placar").stop().slideToggle(800); // faz os 2 ao mesmo tempo

}
