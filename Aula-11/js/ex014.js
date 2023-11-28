//mudar a pagina

function VoltaPagina(){
    var voltaPagina = "/Aula-11/ex013.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-11/ex015.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}

//exercicio condicao alinhada
var agora = new Date()
var hora = agora.getHours()
document.write(`<center> Agora sao: ${hora} horas <br><br></center>`)
if(hora < 12){
    document.write(`<center>Bom dia !!</center>`)
}else if(hora <= 18){
    document.write(`<center>Boa tarde !!</center>`)
}else{
    document.write(`<center>Boa noite !!</center>`)
}