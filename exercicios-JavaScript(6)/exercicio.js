//mudar a pagina

function VoltaPagina(){
    var voltaPagina = "/exercicios-JavaScript(5) /exercicio.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-13/ex018.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}

//Recarregar a pagina !
document.getElementById('btnReload').addEventListener('click', function() {
    // Recarrega a página
    location.reload();
});
function showPopup() {
    var popup = document.getElementById('popup');
    popup.
    
style.display = 'block';
}

function hidePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}
//exercicio tabuada

function tabuada(){
    let num = document.getElementById('txtN')
    let tab = document.getElementById('selTab')

    if(num.value.length == 0){
        window.alert('Por favor digite um numero!')
    }else{
        let n = Number(num.value)//conversao de string para number e guardando em uma nova variavel
        let c = 1 
        tab.innerHTML = ''//antes de comecar a tabuada ela sempre ficara limpa
        while (c <= 10) {
            let item = document.createElement('option')//estou criando um elemento que nao exitia que fique dentro do select
            item.text =`${n} x ${c} = ${n*c}`
            tab.appendChild(item)//adicionar um elemento filho
            item.value = `tab${c}`//para selecao de item
            c++
        }
    }
}