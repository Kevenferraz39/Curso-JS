//mudar a pagina

function VoltaPagina(){
    var voltaPagina = "/Aula-11/ex014.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/exercicios-JavaScript/exercicio.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}

//exercicio switch


var agora = new Date()
var diaSem = agora.getDay()

/*
    0 = Domingo
    1 = Segunda
    2 = Terca
    3 = Quarta
    4 = Quinta
    5 = Sexta
    6 = Sabado
*/

switch(diaSem){
    case 0:
        document.write('<center>Domingo</center>')
        break
    case 1:
        document.write('<center>Segunda-feira</center>')
        break
    case 2:
        document.write('<center>Terca-feira</center>')
        break
    case 3:
        document.write('<center>Quarta-feira</center>')
        break
    case 4:
        document.write('<center>Quinta-feira</center>')
        break
    case 5:
        document.write('<center>Sexta-feira</center>')
        break
    case 6:
        document.write('<center>Sabado</center>')
        break
    default:
        document.write('<center>[! ERRO !]Dia da semana invalido </center>')
        break
}