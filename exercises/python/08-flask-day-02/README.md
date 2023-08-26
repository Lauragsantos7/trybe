# Server Side Rendering
Técnica para renderizar o Front-End. 
diferente das bibliotecas Javascript React, Angular, Vue.js que renderizam do lado do cliente, ou seja, no próprio navegador. Existe a possibilidade de você escrever todo arquivo HTML no servidor e, depois, encaminhar uma versão estática para o cliente.

**Jinja2 -> mecanismo de template utilizado para criar páginas html dinâmicas por meio de incorporação de variáveis e comando Pyhton (if, else, for)

Pelo Jinja2 MVC, a controller (analisar arquivo home_controller)é responsável por indicar para o template o que será renderizado. Para isso, devemos identificar se o método HTTP foi um POST e reconhecer o nome passado pelo formulário com request.form.get.



Quando passamos parâmetros para um template no Jinja2, damos o nome de contexto (context).

Os parâmetros username e greeting serão passados como contexto para o template index.html, onde podemos utilizá-los para customizar a mensagem de saudação. Para fazer isso, basta atualizar a nossa tag <p>.

Filtros do jinja: https://jinja.palletsprojects.com/en/3.1.x/templates/#filters