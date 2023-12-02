//mudar a pagina

function VoltaPagina(){
    var voltaPagina = "/exercicios-JavaScript(4)/exercicio.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/exercicios-JavaScript(5)/exercicio.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}

//teste
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
//exercicio 

function validar(){
    //recebendo os dados emitidos no forms do html
    let inicio = document.getElementById('txtIn')
    let fim = document.getElementById('txtFn')
    let passo = document.getElementById('txtP')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
       window.alert('[!ERRO!] Faltam dados')
       res.innerHTML = 'Impossivel contar!1'
    } else{
        res.innerHTML = 'Contando: '
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if(p <= 0){
            window.alert('passo invalido coniderando passo 1')
            p = 1
        }
        if(i <  f){
            //contagem cresente
             for(let c = 1; c <= f; c+= p){
            res.innerHTML += `${c} \u{f449}`
        }
        res.innerHTML += `\u{1F3C}`
        } else{
            //contagem regreciva
            for(let c = i; c>= f; c-= p){
                res.innerHTML += `${c} \u{1F3C}`
            }
        }
        res.innerHTML += `${c} \u{f449}`
    }
}
