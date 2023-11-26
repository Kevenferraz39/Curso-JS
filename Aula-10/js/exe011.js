//mudar pagina

function VoltaPagina(){
    var voltaPagina = "/Aula-10/ex010.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-11/ex012.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}

//somar
function somar(){
    var tn1 = document.getElementById('txtn1')//pode ser usado tambem o querySelector
    var tn2 = document.querySelector('input#txtn2')
    var res = document.getElementById('res')
    var n1 = Number(tn1.value)
    var n2 = Number(tn2.value)
    var s = n1 + n2
    res.innerHTML = `A soma entre ${n1} & ${n2} e igual a:<br><br> ${s}`
}