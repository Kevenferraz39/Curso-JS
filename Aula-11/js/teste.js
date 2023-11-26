function VoltaPagina(){
    var voltaPagina = "/Aula-11/ex012.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-11/detran.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}
// qual o teu pais ?
var pais = window.prompt('Qual se pais de origem ?')
var local = window.prompt('Em que pais voce esta?')

if(local != pais){
    document.write(`<center>voce estrangeiro porque naceu no(a) ${pais}</center>`)
}else{
    document.write(`<center>voce naceu no ${pais}</center>`)
}