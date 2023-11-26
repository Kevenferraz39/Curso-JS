// muda a pagina

function VoltaPagina(){
    var voltaPagina = "/Aula-04/ex001.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina
    
function MudarPagina() {
var novaPagina = "/Aula-06/ex003.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}

// qual seu nome?
var nome = window.prompt("Qual e seu nome?")//a variavel nome esta recebendo oque eu digitei no prompt e armazenando 
    alert('E um grande prazer em te conhecer, '+ nome + '!')// concatenacao estou pedindo para que o alert exiba oque esta na minha variavel 
    