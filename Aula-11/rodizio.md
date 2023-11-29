# README

Este código define uma função chamada "validar" que é acionada quando um usuário clica em um botão (não mostrado no código) para verificar o rodízio de placa automotiva. Aqui estão as ações realizadas pela função:

1. **Seleção de Elementos do DOM:**
   - Seleciona os elementos do DOM com os IDs 'txtnome', 'txtplaca' e 'res'.

2. **Obtenção de Valores dos Campos:**
   - Obtém os valores dos campos 'txtnome' e 'txtplaca'.

3. **Obtenção do Último Dígito da Placa:**
   - Obtém o último dígito do valor do campo 'txtplaca' convertendo-o para um número inteiro.

4. **Inserção de Mensagem de Saudação:**
   - Insere uma mensagem de saudação no elemento 'res'.

5. **Verificação do Rodízio:**
   - Verifica o rodízio com base no último dígito do número da placa.
   - Se o último dígito for 1 ou 2, a função insere a mensagem "Rodízio é na segunda-feira".
   - Se o último dígito for 3 ou 4, a função insere a mensagem "Rodízio é na terça-feira".
   - E assim por diante, até chegar ao último dígito 9 ou 0, quando a função insere a mensagem "Rodízio é na sexta-feira".
   - Se o último dígito for qualquer outro número, a função insere a mensagem "Número inválido na placa".

Portanto, o código determina o dia da semana em que um veículo deve participar do rodízio com base no último dígito do seu número de placa.