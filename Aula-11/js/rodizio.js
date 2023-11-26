function VoltaPagina(){
    var voltaPagina = "/Aula-11/detran.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-11/ex013.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}

function validar() {
    var no = document.getElementById('txtnome');
    var placa = document.getElementById('txtplaca');
    var res = document.getElementById('res');

    // Obtém os valores dos campos
    var nome = no.value;
    var ultimoDigito = parseInt(placa.value.slice(-1));

    res.innerHTML = `Ola, ${nome.toUpperCase()} o seu `;

    // Verifica o rodízio baseado no último dígito
    if (ultimoDigito === 1 || ultimoDigito === 2) {
        res.innerHTML += 'rodízio e na segunda-feira';
    } else if (ultimoDigito === 3 || ultimoDigito === 4) {
        res.innerHTML += 'rodízio e na terça-feira';
    } else if (ultimoDigito === 5 || ultimoDigito === 6) {
        res.innerHTML += 'rodízio e na quarta-feira';
    } else if (ultimoDigito === 7 || ultimoDigito === 8) {
        res.innerHTML += 'rodízio e na quinta-feira';
    } else if (ultimoDigito === 9 || ultimoDigito === 0) {
        res.innerHTML += 'rodízio e na sexta-feira';
    } else {
        res.innerHTML += 'Número inválido na placa';
    }
}
