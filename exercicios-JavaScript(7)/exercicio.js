

function VoltaPagina(){
    var voltaPagina = "/exercicios-JavaScript(6)/exercicio.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-13/ex018.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina

}
let num = document.getElementById('fnum')
let lista = document.getElementById('Flista')
let res = document.getElementById('res')
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
      valores.push(Number(num.value))//adicionar um elemento no meu vetor 
      let item = document.createElement('option')
      item.text = `Valor ${num.value} adicionado`
      lista.appendChild(item)
      res.innerHTML = ''//limpar o resultado após adicionar um elemento
    }else{
        window.alert('Valor invalido ou já encontrado na lista')
    }
    num.value = ''//para apagar oque esta no imput depois que clicar em adicionar dando certo ou errado
    num.focus()//para o cursor voltar ao imput sem ter que clicar nele 
}

function Finalizar(){
    if(valores.length == 0){
        alert('Adicione valores antes de finalizar!')
    }else{
        let tot = valores.length
        let maior = valores[0]
        let menor = valores [0]
        let soma = 0
        let media = 0
        for(let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor)
            menor = menor [pos]
        }
        media = soma / tot 
        res.innerHTML = ''
        res.innerHTML +=`<p>Ao todo temos ${tot} números cadastrados</p>`
        res.innerHTML +=`<p>O maior valor informado foi: ${maior}.<br>
        O menor valor informado foi: ${menor}.</p>`
        res.innerHTML +=`<p>Somando todos os valores temos: ${soma}.</p>`
        res.innerHTML +=`<p>A média dos valores digitados é: ${media}.</p>`
    }
}