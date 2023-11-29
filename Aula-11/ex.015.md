# README

Este código cria um programa em JavaScript para exibir o dia da semana atual em uma página HTML. Aqui estão os principais pontos do código:

1. **Obtenção do Dia da Semana:**
   - Utiliza o objeto `Date` do JavaScript para obter os dados de data e hora atuais.
   - Usa o método `getDay()` para obter o índice do dia da semana (0 para domingo, 1 para segunda-feira, e assim por diante).

2. **Utilização de Switch para Determinar o Dia da Semana:**
   - Emprega uma declaração `switch` para determinar o dia da semana com base no valor de `diaSem`.
   - Exibe a palavra correspondente ao índice de `diaSem` usando a função `document.write()`.

3. **Exemplo de Funcionamento:**
   - Por exemplo, se o valor de `diaSem` for 1, o programa exibirá "Segunda-feira".

4. **Tratamento de Casos Inválidos:**
   - Se o valor de `diaSem` não corresponder a nenhum dos casos listados na declaração `switch`, o programa exibirá a mensagem de erro "[! ERRO !] Dia da semana inválida".

Dessa forma, o código proporciona uma maneira simples de exibir o dia da semana atual em uma página HTML, com um tratamento de erro para casos em que o valor não é válido.