# Verificador de Idade e Gênero Web App

Este código JavaScript faz parte de uma aplicação web que realiza a verificação da idade e gênero com base no ano de nascimento fornecido pelo usuário.

## Funcionalidades

### 1. Função `verificar()`

- A função é definida para ser chamada quando algum evento ocorre, como ao clicar em um botão.

### 2. Obtendo o Ano Atual e Elementos do Documento

- `var data = new Date()`: Cria um objeto `Date` para obter a data atual.
- `var ano = data.getFullYear()`: Extrai o ano atual do objeto `Date`.
- `var fano = document.getElementById('txtAno')`: Obtém o elemento HTML com o id 'txtAno' (presumivelmente um campo de entrada para o ano de nascimento).
- `var res = document.getElementById('res')`: Obtém o elemento HTML com o id 'res' (presumivelmente um local onde os resultados serão exibidos).

### 3. Verificação do Ano de Nascimento

- `if(fano.value.length == 0 || fano.value > ano)`: Verifica se o campo de entrada para o ano está vazio ou se contém um ano maior que o ano atual. Se verdadeiro, exibe um alerta de erro.

### 4. Manipulação dos Elementos do Documento e Exibição de Resultados

- Caso contrário, exibe um alerta indicando que está tudo bem.
- Obtém o valor do botão de rádio selecionado para determinar o gênero (homem ou mulher).
- Calcula a idade com base no ano de nascimento fornecido.
- Cria dinamicamente um elemento de imagem (`<img>`).
- Define o ID da imagem como 'imagem'.
- Com base no gênero e na faixa etária, define o caminho da imagem.
- Atualiza o conteúdo do elemento com o id 'res' para cumprimentar o usuário, mostrar a idade e anexa a imagem criada dinamicamente.

## Como Usar

1. Abra o arquivo HTML no seu navegador.
2. Preencha o campo de ano de nascimento.
3. Selecione o gênero.
4. Clique no botão para verificar.
5. Os resultados serão exibidos na área designada.

Divirta-se usando o verificador de idade e gênero!
