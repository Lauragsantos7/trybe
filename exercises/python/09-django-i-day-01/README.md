# DJANGO 

pip install django
iniciar o projeto: no diretório: django-admin startproject ecommerce .

para executar o projeto:
python3 manage.py runserver

Executar as migrations (dentro do ambiente virtual): python3 manage.py migrate

Framework de alto nível para desenvolvimento web em Python.

alguns princípios fundamentais guiam o design e desenvolvimento do Django, fornecendo uma visão gral das facilidades que ele possibilita.

Modularização: os aplicativos Django são compostos por diversos módulos (chamados de apps), cada um com sua própria responsabilidade específica, o que facilita a organização e a manutenção do código, além de sua reutilização.

2- Padrão Model-Template-View (MTV): o Django segue um padrão de arquitetura em três camadas - model, template e view, popularmente referido pela comunidade como Model-Template-View ou MTV. Nessa arquitetura, os modelos (models) representam a estrutura dos dados (mapeamento do banco de dados), as visualizações (views) são responsáveis por concentrar a lógica (regras de negócio) e os templates lidam com a apresentação dos dados para a pessoa usuária (HTML que será renderizado no browser).

3- ORM (Object-Relational Mapping): o próprio Django já fornece um ORM que permite o uso de código Python para fazer as consultas e manipulações de banco de dados, tornando o desenvolvimento mais ágil por eliminar a necessidade de escrever consultas SQL manualmente.

4- Interface de administração pronta para uso: a interface de administração automática oferecida pelo Django lê metadados nos modelos para fornecer uma interface que permite gerenciar seus dados - adicionar, editar e excluir registros do banco de dados, por exemplo, sem a necessidade de escrever um código.

5- Roteamento de URLs: o Django usa um sistema de mapeamento simples entre os padrões de URL de requisições HTTP e as funções que definem suas views (exibições) correspondentes, facilitando além da organização do código, a manutenção e a expansão da aplicação.

6- Autenticação: O Django vem com um sistema de autenticação completo de fácil uso, que lida com contas de usuário, grupos, permissões e sessões baseadas em cookies, permitindo a criação de sites em que pessoas usuárias possam criar contas e fazer login/logout com segurança.

7- Segurança: o Django tem alguns recursos integrados para ajudar a proteger as aplicações contra vulnerabilidades comuns, como injeção de SQL, CSRF (Cross-Site Request Forgery) e XSS (Cross-Site Scripting), por exemplo.

**Django X Flask**
 é uma ótima opção para projetos complexos, que exigem inúmeros recursos e para aplicações cujo objetivo é criar um painel de administração para gerenciar dados de forma eficiente, uma vez que já oferece uma solução rápida e fácil para isso.
 Por sua vez, por seu minimalismo e flexibilidade, o Flask pode é uma ótima opção para projetos pequenos ou médios, nos quais a simplicidade e a flexibilidade são desejáveis, além da criação de APIs e microsserviços leves e personalizáveis.


Um arquivo de banco de dados db.sqlite3 foi criado automagicamente no diretório do projeto.. o Django já vem com um banco de dados SQLite configurado por padrão, para facilitar o desenvolvimento.

**Usando MYSQL**

*1 - o primeiro passo é alterar a variável DATABASE, no arquivo settings.py, para que ela tenha as configurações de acesso ao banco necessárias:
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.mysql',
        'NAME': 'ecommerce_database',
        'USER': 'root',
        'PASSWORD': 'password',
        'HOST': '127.0.0.1',
        'PORT': '3306',
        }
}

* 2 - criar um arquivo que conterá o script SQL que criará o banco de dados, dentro do diretório ./database

**Dockerfile**
para buildar a imagem: docker build -t ecommerce-db .

Executar o container:
docker run -d -p 3306:3306 --name=ecommerce-mysql-container -e MYSQL_ROOT_PASSWORD=password -e MYSQL_DATABASE=ecommerce_database ecommerce-db

Colocar o app que deseja criar no módulo settings, em "INSTALLED_APPS= [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",
+    "products", products foi criado
]"


rodar o comando django-admin startapp products

configurar o arquivo 'products/model"

https://docs.djangoproject.com/en/3.2/ref/models/fields/

instalar a lib Pollow para suporte a imagens:
python3 -m pip install Pillow