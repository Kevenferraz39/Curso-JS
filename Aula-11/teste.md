# README

Este código verifica se o usuário está em seu próprio país de origem ou não. Aqui está uma visão geral das etapas realizadas pelo código:

1. **Solicitação de Informações do Usuário:**
   - Utiliza a função `window.prompt()` para exibir uma caixa de diálogo solicitando que o usuário insira seu país de origem e o país onde está atualmente.

2. **Armazenamento de Valores:**
   - Armazena os valores inseridos pelo usuário nas variáveis `pais` e `local`, respectivamente.

3. **Verificação de País de Origem:**
   - Verifica se a variável `local` é diferente da variável `pais`. Se forem diferentes, conclui-se que o usuário é estrangeiro. Se forem iguais, o usuário é considerado nativo do país inserido.

4. **Exibição de Mensagem na Tela:**
   - Dependendo do resultado da verificação, o código utiliza a função `document.write()` para exibir uma mensagem na tela.
     - Se o usuário for estrangeiro, a mensagem exibida é "Você é estrangeiro porque nasceu no(a) (seu país de origem)".
     - Se o usuário for nativo, a mensagem exibida é "Você nasceu no (seu país de origem)".

5. **Nota Importante sobre document.write():**
   - É importante observar que o código utiliza a função `document.write()`, que não é recomendada para uso em situações reais, pois pode sobrescrever todo o conteúdo do documento HTML. Uma abordagem mais apropriada seria criar um elemento HTML (como um parágrafo) e atualizar seu conteúdo usando a função `textContent` ou `innerHTML`.