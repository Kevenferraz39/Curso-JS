//mudar a pagina

function VoltaPagina(){
    var voltaPagina = "/exercicios-JavaScript(3)/exercicio.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-12/ex017.html";//Definir para que pagina esse botao ira levar  

window.location.href = novaPagina;//Mudar para a proxima pagina
}

//repeticao while

    var c = 1
        while(c < 6){
            console.log('tudo bem?')
            c++
        }
   
        var c = 1
        do{
            console.log('tudo bem?')
            c++
        }
        while(c <= 6)