// mudar a pagina

function VoltaPagina(){
    var voltaPagina = "/Aula-06/ex002.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-06/ex004.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}

//exercicio
var N1 = Number(window.prompt("Digite um numero:"))//o valor recebido e uma string
        //Nuber.parceInt() esta passando o meu dado coletado que esta em string para numero inteiro 

    var N2 = Number(window.prompt("Digite outro numero:"))//o valor recebido e uma string
        //Nuber.parceInt() esta passando o meu dado coletado que esta em string para numero inteiro 

    var sum = N1 + N2// esta variavel soma o resultado obtidos e armazena

    alert(`A soma  entre ${N1} e ${N2} e igual a ${sum}`)// esse alert exibe a mensagem "O resultado e:" e concatena o resultado coletado com + 'sum' nome da variavel definida 