**readme.md**

# Salário Formatado

<div align="center">
    <h2>Este código apresenta o salário de um indivíduo em reais brasileiros (BRL). Vamos analisar o código passo a passo:</h2>
</div>

1. **Definição do Salário:**
    - `var salario = 3000;`: Define uma variável chamada "salario" e atribui a ela o valor 3000.

2. **Formatação do Salário:**
    - `var ValorSalario = salario.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });`: Define uma variável chamada "ValorSalario". O método `toLocaleString` é aplicado à variável "salario". Este método formata um número de acordo com a localidade (no caso, 'pt-BR') e as opções fornecidas (`style: 'currency', currency: 'BRL'`).

3. **Exibição na Página HTML:**
    - `document.write(<center>Voce recebe: ${ValorSalario}</center>)`: Utiliza a função `document.write` para escrever na página HTML o valor da variável "ValorSalario". O texto "Voce recebe: " é exibido, seguido do valor do salário formatado em reais brasileiros.

4. **Centralização na Página:**
    - Todos os elementos HTML escritos usando `document.write` são exibidos no centro da página usando a tag `<center>`.

<div align="center">
    <p>Portanto, o código define uma variável chamada "salario" e atribui a ela o valor 3000. Em seguida, ele formata esse valor em reais brasileiros usando o método `toLocaleString`. Por fim, o valor formatado é exibido na página HTML, envolvido pela tag `<center>` para garantir que ele seja centralizado.</p>
</div>