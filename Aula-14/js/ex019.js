//mudar a pagina

function VoltaPagina(){
    var voltaPagina = "/Aula-13/ex018.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/exercicios-JavaScript(7)/exercicio.html";//Definir para que pagina esse botao ira levar  

window.location.href = novaPagina;//Mudar para a proxima pagina
}
//Função
 /*
 function parimp(n){
    if(n%2==0){
        return 'Par!'
    }else{
        return 'Impara!'
    }
 }
 console.log (parimp(0))
 */
/*
 Primeira maneira de se fazer uma conta de fatorial
  // 5! 5 x 4 x 3 x 2 x 1 = ?

    function fatorial(n){
        let fat = 1
        for (let c = n; c > 1; c--){
        fat *= c
        }return fat
    }console.log(fatorial(5))

 */

   // Segunda maneira de se fazer uma conta de fatorial
  // 5! 5 x 4 = ?

    function fatorial(n){
        if(n == 1){
            return 1
        }else {
            return n * fatorial(n-1)
        }
    }console.log(fatorial(5))

    // isso se chama de recursividade 