//mudar a pagina

function VoltaPagina(){
    var voltaPagina = "/Aula-11/rodizio.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-11/ex014.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}

//exercicio condicao alinhada

function validar(){
    var idade = document.getElementById('idade')
    var res = document.querySelector('p.res')
    var i = Number(idade.value)
    res.innerHTML =`<center>Voce tem ${i} anos.<br><br></center>`
if(i < 16){
    res.innerHTML += '<center>Nao vota</center>'
} else if(i < 18 || i > 65){
    res.innerHTML += '<center>Voto opcional</center>'
    res.innerHTML += '<button onclick="votei()">Votar</button>'
} else{
    res.innerHTML += '<center>Voto obrigatorio</center>'
}
}

function votei(){
    alert('Votei')
}