let recebeMensagem = document.getElementById('recebeMensagem');
let dataAtual = new Date();
let dia = dataAtual.getDate();
let mensagem = [
            {   
                nome:"keven",
                msg: "Mensagem 1"
            },
            {
                msg: "Mensagem 2"
            },
            {
                msg: "Mensagem 3"
            },
            {
                msg: "O fechamento de ponto esta proximo"
            },
            {
                msg: "Mensagem 5"
            },
            {
                msg: "Mensagem 6"
            },
            {
                msg: "Mensagem 7"
            },
            {
                msg: "Mensagem 8"
            },
            {
                msg: "Mensagem 9"
            },
            {
                msg: "Mensagem 10"
            },
            {
                msg: "Mensagem 11"
            },
            {
                msg: "Mensagem 12"
            },
            {
                msg: "Mensagem 13"
            },
            {
                msg: "Mensagem 17"
            },
            {
                msg: "Mensagem 18"
            },
            {
                msg: "Mensagem 19"
            },
            {
                msg: "Mensagem 1"
            },
            {
                msg: "Mensagem 20"
            },
            {
                msg: "Mensagem 21"
            },
            {
                msg: "Mensagem 22"
            },
            {
                msg: "Mensagem 23"
            },
            {
                msg: "Mensagem 24"
            },
            {
                msg: "Mensagem 25"
            },
            {
                msg: "Mensagem 26"
            },
            {
                msg: "Mensagem 27"
            },
            {
                msg: "Mensagem 28"
            },
            {
                msg: "Mensagem 29"
            },
            {
                msg: "Mensagem 30"
            },
            {
                msg: "Mensagem 31"
            },]
// Verificar se o dia é válido para o array de mensagens
iniciar = () => {
    if (dia >= 1 && dia <= mensagem.length) {
        recebeMensagem.innerHTML += `
            <div class="recado">
                <p">Bom dia${nome}</p>
                <br>
                <hr>
                <p>${mensagem[dia - 1].msg}</p>
            </div>
        `;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    iniciar();
});
