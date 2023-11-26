//mudar pagina

function VoltaPagina(){
    var voltaPagina = "/Aula-06/teste2.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-10/ex010.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}

//O código apresentado em JavaScript, seleciona e modifica o conteúdo de dois elementos HTML, um parágrafo (p) e um div. Vamos analisar o código passo a passo:

var p1 = document.getElementsByTagName('p')[1]//esse numero 0 entre os couchets representa que estou selecionando o primeiro paragrafo, se fosse o segundo seria [1] e assim sicessivamente
        document.write("Esta escrito assim: "+ p1.innerHTML)  
        p1.style.color = 'red'
        /* 
        var d = document.getElementById('msg')
        d.style.color ='blue'
        */
        var d = document.querySelector('div#msg')
        d.style.color = 'red'