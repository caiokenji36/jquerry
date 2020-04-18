
function inserePlacar(){
    let corpoTabela = $(".placar").find("tbody"); //o find quer dizer que vc esta procurando uma tbody que esta dentro de placar
    let usuario = "Caio";
    let numPalavras=$("#contador-palavras").text();
   
    let linha = novaLinha(usuario, numPalavras);
    linha.find(".botao-remover").click(removeLinha);
    
    //corpoTabela.append(linha); //append para adicionar no html, tambem sempre adiciona no final da tabela
    corpoTabela.prepend(linha); // esse adiciona antes
}


function removeLinha(){
    $(".botao-remover").click(function(event){
        event.preventDefault(); //para nao acontecer algo de padrao
        $(this).parent().parent().remove();
    });
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
