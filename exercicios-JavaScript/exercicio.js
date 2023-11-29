//mudar a pagina

function VoltaPagina(){
    var voltaPagina = "/Aula-11/ex015.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "exercicios-JavaScript(2)/exercicio.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}

//exercicio 
function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var date = new Date()
    var hora = date.getHours()
    msg.innerHTML = `Agora sao ${hora} horas`
    if(hora >= 0 && hora < 12){
        //Bom dia
        img.src = 'manha.jpg'
        document.body.style.background = 'rgb(166, 213, 218)'
    }else if(hora >= 12 && hora <= 18){
        //Boa tarde
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(244, 190, 97)'
    }else{
        //Boa noite
        img.src = 'noite.jpg'
        document.body.style.background = 'rgb(7, 7, 72)'
       
    }
}
