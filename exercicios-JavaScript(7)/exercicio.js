//mudar a pagina

function VoltaPagina(){
    var voltaPagina = "/exercicios-JavaScript(6) /exercicio.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-13/ex018.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}
let num = document.querySelector('input#fnum')
let lsta = document.querySelector('select#Flista')
let res = document. querySelector('div#res')
let valores = []

    function isNumero(n){
        if(Number(n) >= 1 && Number(n) <= 100){
            return true
        }else{
            return false
        }
    }
    function inLista(n, l){
        if(l.indexOf(Number(n)) != -1){
            return true
        }else{
            return false
        }
    }

function adicionar(){
    // verificação se o valor recebido é um número!
    if(isNumero(num.value) && !inLista(num.value, valores)){
      
    }else{
        window.alert('Valor invalido ou já encontrado na lista')
    }
}