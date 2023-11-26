 //mudar pagina
 function VoltaPagina(){
    var voltaPagina = "/Aula-06/ex004.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-06/teste2.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}
//salario
var salario = 3000;

var ValorSalario = salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

document.write(`<center>Voce recebe: ${ValorSalario}</center>`) 
