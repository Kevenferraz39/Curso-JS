//mudar a pagina

function VoltaPagina(){
    var voltaPagina = "exercicios-JavaScript/exercicio.html"//Definir para que pagina esse botao ira levar
    window.location.href = voltaPagina;//Voltar para pagina anterior
}
    //esta funcao abaixo passar para a proxima pagina

function MudarPagina() {
var novaPagina = "/Aula-11/ex016.html";//Definir para que pagina esse botao ira levar 

window.location.href = novaPagina;//Mudar para a proxima pagina
}

//exercicio Verificador de idade

function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtAno')
    var res = document.getElementById('res')
    
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[!ERRO!] Verifique os dados e tente novamente!')
    }else{
        window.alert('Tudo ok')
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //criando um elemento tag <img> 
        img.setAttribute('id', 'imagem') //atribuido um Id para o <img>
        if(fsex[0].checked){
            genero = 'Homem'
            res.innerHTML = `Ola, moco `

            if(idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'bb.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'moco.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'homem.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            res.innerHTML = `Ola, moca `

            if(idade >=0 && idade < 10){
                //crianca
                img.setAttribute('src', 'bebe.jpg')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src', 'moca.jpg')
            }else if(idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            }else{
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }
        res.innerHTML += `voce tem: ${idade} anos<br>`
        res.appendChild(img) //exibindo o <img>
    }
}
