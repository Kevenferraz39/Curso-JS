function VoltaPagina(){
    var voltaPagina = "/Aula-10/exe011.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-11/teste.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}

var nome = window.prompt("Qual o seu nome?");
var vv = parseFloat(window.prompt("Qual a velocidade permitida pela via?"));
var velocidade = parseFloat(window.prompt("Qual a sua velocidade?"));

if (vv < velocidade) {
    document.write(`<center> Ola, ${nome}. Voce esta a ${velocidade}Km/h. MULTADO </center>`);
} else if (vv > velocidade) {
    document.write(`<center> Ola, ${nome}. Voce esta a ${velocidade}Km/h abaixo da velocidade da rodovia que é ${vv}Km/h.<br> Voce deve alcançar a velocidade e manter</center>`);
} else {
    document.write(`<center> Ola, ${nome}. Voce esta na velocidade correta de ${velocidade}Km/h</center>`);
}
