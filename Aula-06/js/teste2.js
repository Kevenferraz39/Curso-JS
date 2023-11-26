//mudar pagina

function VoltaPagina(){
    var voltaPagina = "/Aula-06/teste.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

    
function MudarPagina() {
var novaPagina = "/Aula-09/exe005.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}

//salario

var salarioInput = prompt("Quanto voce recebe ?")//solicitar ao usuario que informe seu salario

   var salario = parseFloat(salarioInput)//Conversao do valor solicitado que chega em String para um Numero

   //Este if vai verificar se o valor recebido e um numero
    if(!isNaN(salario)){ 

       //formatar o salario como uma string no formato de moeda brasileira 
       var ValorSalario = salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
            //exibir o valor com a pergunta
        document.write(`<center>Voce recebe: ${ValorSalario} ?</center>`)
   }
    else{
       // Se a entrada não for um número válido
       document.write("Por favor, insira um número válido para o salário.")
   }