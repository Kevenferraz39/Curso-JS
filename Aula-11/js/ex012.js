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
