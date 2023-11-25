var pais = window.prompt('Qual se pais de origem ?')
var local = window.prompt('Em que pais voce esta?')

if(local != pais){
    document.write(`<center>voce estrangeiro porque naceu no(a) ${pais}</center>`)
}else{
    document.write(`<center>voce naceu no ${pais}</center>`)
}