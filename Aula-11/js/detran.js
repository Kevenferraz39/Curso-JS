//mudar de pagina
function VoltaPagina(){
    var voltaPagina = "/Aula-11/teste.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-11/rodizio.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}

function verificar(){
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = ` A sua velocidade atual e de: ${vel}Km/h`
    if(vel > 60){
        res.innerHTML += ` Multado por exesso de velocidade`
    }
    res.innerHTML += ` Diriga com o cinto de seguranca`
}