
function verificar(){
    var txtv = document.getElementById('txtvel')
    var res = document.getElementById('res')
    var vel = Number(txtv.value)
    res.innerHTML = ` A sua velocidade atual e de: ${vel}Km/h`
    if(vel > 60){
        res.innerHTML += ` Multado por exesso de velocidade`
    }
    res.innerHTML += ` Diriga com o cinto de seguranca`
}