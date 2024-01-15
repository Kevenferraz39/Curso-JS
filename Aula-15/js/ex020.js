//mudar a pagina

function VoltaPagina(){
    var voltaPagina = "/Aula-14/ex019.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-04/ex001.html";//Definir para que pagina esse botao ira levar  

window.location.href = novaPagina;//Mudar para a proxima pagina
}

let amigo = {
    nome:'keven', 
    sexo:'M', 
    peso:65.3, 
    engorgar(p=0){
        console.log('Engordou')
        this.peso += p
    }
}
amigo.engorgar(0)//adicionar peso ou valor a amigo
console.log(`${amigo.nome} pesa ${amigo.peso}Kg`)
