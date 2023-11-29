**Readme.md - Aplicação de Respostas Emocionais Aleatórias**

Este repositório contém um código JavaScript associado a um formulário HTML com o id 'myForm'. O código está configurado para responder ao evento de envio do formulário, proporcionando respostas emocionais aleatórias com base na opção selecionada pelo usuário.

### Funcionalidades Principais:

1. **Evento de Envio do Formulário:**
   - O código é acionado quando o formulário é enviado.
   - `event.preventDefault();` evita o comportamento padrão de envio do formulário para uma página de destino, impedindo a recarga da página.

2. **Obtenção da Opção Selecionada:**
   - `var selectedOption = document.querySelector('input[name="option"]:checked').value;`
   - Obtém o valor da opção de rádio selecionada pelo usuário. As opções incluem 'option1', 'option2', 'option3', 'option4', 'option5', 'option6', cada uma correspondendo a um estado emocional específico (triste, feliz, com raiva, magoada, com medo, ansiosa).

3. **Respostas Personalizadas para Cada Opção:**
   - O código contém um objeto `responses` que mapeia cada opção para um array de respostas associadas.

4. **Geração de um Índice Aleatório:**
   - `var randomIndex = Math.floor(Math.random() * responses[selectedOption].length);`
   - Gera um índice aleatório dentro dos limites do array de respostas associado à opção selecionada.

5. **Exibição da Resposta Aleatória:**
   - `document.getElementById('res').textContent = responses[selectedOption][randomIndex];`
   - Exibe a resposta aleatória correspondente à opção selecionada no elemento HTML com o id 'res'.

### Como Usar:
- Integre o código JavaScript com o seu formulário HTML.
- Certifique-se de que o formulário tenha opções de rádio com o nome "option".
- Personalize as respostas no objeto `responses` para atender às necessidades da sua aplicação.

### Contribuições:
Contribuições são bem-vindas! Sinta-se à vontade para fazer melhorias, correções ou adições ao código. Certifique-se de seguir as melhores práticas de desenvolvimento.