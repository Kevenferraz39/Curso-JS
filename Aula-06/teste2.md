**readme.md**

# Calculadora de Salário

<div align="center">
    <h2>Este código é uma aplicação JavaScript que utiliza o prompt do navegador para obter o salário de um usuário. O código faz o seguinte:</h2>
</div>

1. **Solicitação de Salário:**
    - Utiliza a função `prompt()` para solicitar ao usuário que informe seu salário. A função retorna o valor inserido pelo usuário como uma string.

2. **Conversão para Número:**
    - Converte o valor inserido, que é uma string, para um número de ponto flutuante usando a função `parseFloat()`.

3. **Verificação de Validade:**
    - Verifica se o valor inserido pelo usuário é um número válido usando a função `isNaN()`. A função `isNaN()` retorna true se o valor passado for NaN (Not-a-Number), ou seja, se não for um número válido.

4. **Formatação como Moeda Brasileira:**
    - Se o valor inserido for um número válido, o código formata o salário como uma string no formato de moeda brasileira usando o método `toLocaleString()` do objeto Number.

5. **Exibição na Página HTML:**
    - O código então exibe o valor formatado do salário com a pergunta "Você recebe: {ValorSalario}?" utilizando a função `document.write()`.

6. **Tratamento de Erro:**
    - Se o valor inserido não for um número válido, o código exibe uma mensagem de erro pedindo para o usuário inserir um número válido para o salário.

<div align="center">
    <p>Este código é uma aplicação simples que demonstra como obter e validar a entrada do usuário, além de formatar o valor inserido.</p>
</div>