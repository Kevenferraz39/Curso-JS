
function VoltaPagina(){
    var voltaPagina = "/Aula-09/exe005.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-10/exe011.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}

// analise do codigo: quando eu clicar na minha div eu vou
            /*colocar esse:
            var A = document.getElementById('area') vai funcionar em qual quer funcao por isso manterei isso aqui*/ 
            var A = document.getElementById('area')

                A.addEventListener('click',clicar)
                A.addEventListener('mouseenter',entrar)
                A.addEventListener('mouseout',sair)

            function clicar(){ 
            //var A = document.getElementById('area') //criar um objeto A que faz uma ligacao com o elemento area de id area que esta dentro do html.
                A.innerText = 'Clicou!!'// E esse objeto vai mudar o conteudo dele para Clicou!!
                A.style.background = 'red'
            }
            function entrar(){
                A.innerText = 'Entrou...'
                A.style.color = 'black'
            }
            function sair(){
                A.innerText = 'Saiu!'
                A.style.background = 'green'
                A.style.color = 'white'
            }