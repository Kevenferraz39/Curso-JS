//mudar a pagina

function VoltaPagina(){
    var voltaPagina = "/exercicios-JavaScript(6)/exercicio.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/exercicios-JavaScript(6)/exercicio.html";//Definir para que pagina esse botao ira levar  

window.location.href = novaPagina;//Mudar para a proxima pagina
}
//Variaveis compostas


let num = [5,8,4]
num.sort()//ordena os valores dentro da minha variavel 
let res = document.getElementById('res')
//num[3]=6 éssa é a forma manual de se fazer uma adicao de conteudo na minha variavel
num.push(6)
res.innerHTML += `O tamanho do vetor é: ${num.length} <br>`
res.innerHTML += `Os valores armazenados são: ${num} <br>`

/*
Forma comom de se fazer 
for(let pos = 0; pos < num.length;pos++){
    res.innerHTML += `${num[pos]}`
}
*/

//Forma mais simplificada 
for(let pos in num){
    res.innerHTML += `${num[pos]}`
}