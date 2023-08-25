# FLASK
https://flask.palletsprojects.com/en/2.3.x/

Framework web em Python que permite a criação de aplicações web de forma simples e rápida. 
amb virtual:  python3 -m venv .venv && source .venv/bin/activate\
instalar flask:
pip install Flask

O arquivo principal de uma aplicação Flask, denominado app.py, é responsável por criar a instância da aplicação web e configurar sua execução, incluindo definições como porta, URL e modo de depuração. Nesse arquivo, você pode personalizar as configurações de sua aplicação e controlar como ela será executada e acessada.\
No arquivo app.py, é possível configurar as rotas da aplicação Flask, que são definidas por meio de métodos Python decorados com @app.route("/"). Essas rotas determinam os diferentes caminhos ou URLs da aplicação, permitindo que o Flask saiba qual função executar quando um determinado caminho for acessado.

comando para rodar a aplicação:python3 nome-do-arquivo ou python-flask python3 -m flask run(sem o  'if __name__ == '__main__':......')

**Docker**

Vamos começar nosso Dockerfile com base em uma imagem Python padrão da comunidade python:3-alpine3.17, na qual realizaremos a instalação de nossas bibliotecas listadas nos arquivos requirements.txt.

**Ferramentas WSGI(Werkzeug)**
https://werkzeug.palletsprojects.com/en/2.3.x/

O padrão WSGI(Web Server Gateway Interface) define uma interface padrão para a comunicação entre servidores web e aplicativos Python. esse padrão determina como as solicitações HTTP devem ser feitas, como os dados devem ser processados e como as respostas devem ser enviadas de volta ao servidor.
Por meio desse padrão, o Flask pode retornar strings ou objetos JSON a partir de métodos Python. 

Werkzeug - Ferramentas em alemão, é um kit de ferramento para app web em Python que oferece diversas funcionalidades para o Flask, como rotas de URL, geração de URLs, manipulação de solicitações HTTP, resposta HTTP, suporte a sessões, gerenciamento de arquivos estáticos, etc..\
O Flask oferece servidor embutido para uso durante  o desenvolvimento e há possibilidade de configurá-lo para utilizar um serv diferente em produção.\
vamos escolher o servidor Waitress, que é recomendado para aplicações de pequeno e médio porte devido a sua fácil configuração e utilização.

Para instalar o servidor manualmente:
adicione a linha waitress==2.1.2 no final do arquivo requirements.txt e, em seguida, instale as dependências novamente.
# Local:
pip install --no-cache-dir -r dev-requirements.txt
# Docker:
docker compose build flask

Quando usamos o servidor de desenvolvimento do Flask, o servidor é reiniciado a cada alteração no código. No entanto, quando usamos o Waitress, isso não acontece. Portanto, se você fizer alterações no código, precisará reiniciar o servidor manualmente.
Como não configuramos nenhum tipo de log para o Waitress, não veremos nenhuma mensagem de log no terminal. Mas pode ter tranquilidade: o servidor está funcionando perfeitamente.

CRUD com flask - 
MODELS - Models - As models no padrão MVC são responsáveis por representar a lógica de negócios da aplicação e cuidar do acesso e da manipulação dos dados armazenados no banco de dados. Elas desempenham um papel fundamental como uma camada de abstração entre a aplicação e o banco de dados.


Existem alguns métodos específicos do Pymongo que utilizaremos:

find: Retorna uma lista com todos registros filtrados por uma query (que é opcional);
find_one: Equivalente ao find, mas retorna somente um registro;
find_one_and_update: Procura um registro e o atualiza com os dados informados;
delete_one: Excluir o primeiro registro que encontrar com a query informada;
insert_one: Insere um novo registro.

CONTROLLERS - recebe e processa as requisições HTTP, manipulnado os dados necessários e retornando uma resposta apropriada para o cliente. 

Usaremos alguns recursos interessantes do Flask:

Blueprint: permite modularizar e reutilizar rotas em diferentes partes do código;
jsonify: retorna uma resposta JSON para uma requisição, com o cabeçalho completo;
request: encapsula a requisição HTTP, fornecendo os parâmetros da URL e o corpo da requisição.