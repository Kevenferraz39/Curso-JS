// muda pagina

function VoltaPagina(){
    var voltaPagina = "/Aula-06/ex003.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-09/exe005.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}

var nome = window.prompt("Qual o seu nome amigo?")
document.write(`<center><b>Ola, ${nome} o seu nome tem ${nome.length} letras.<b></center><br>`)

    document.write(`<center>${nome} o seu nome em maiusuculo fica assim ${nome.toUpperCase()}</center><br>`)

var Nome = window.prompt("Qual o seu nome amigo?")
document.write(`<center><b>Ola, ${Nome} o seu nome tem ${Nome.length} letras.<b></center><br>`)

    document.write(`<center>${Nome.toUpperCase()} o seu nome em maiusuculo fica assim ${Nome.toLowerCase()}</center>`)