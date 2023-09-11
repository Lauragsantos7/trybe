# Django REST Framework - DRF

REST é um estilo de arquitetura de software que define um conjunto de princípios e restrições a serem usadas para a criação de serviços web. Uma aplicação que segue essas diretrizes REST é chamada de RESTful.


pip install django djangorestframework
pip install markdown django-filter mysqlclient

django-admin startproject playlistify .
 django-admin startapp core

cria o docker
roda as migations :
python3 manage.py migrate

 Criar super usuário para acessar o admin de django:
 python3 manage.py createsuperuser

 login: lauras
 password: 513416006Ls

 rodando o projeto:
 python3 manage.py runserver


 serializers: https://www.django-rest-framework.org/api-guide/serializers/#metadata

 Um serializador de dados no DRF é o que permite converter objetos Python em formatos como JSON, XML, YAML, entre outros. Isso é importante para que os dados sejam enviados e recebidos de forma estruturada e legível por diferentes sistemas e clientes. Resumidamente, isso garante maior compatibilidade, controle de dados e facilita as validações.

 Alguém faz uma requisição HTTP para a API.
A URL envia a requisição para a view.
A view processa a requisição e envia os dados para o serializer.
O serializer serializa os dados e os envia para a model.
A model processa os dados e faz as consultas necessárias no banco de dados.
O banco de dados devolve os resultados para a model.
A model processa os dados e os envia para o serializer.
O serializer serializa os dados e os envia para a view.
A view envia os dados serializados para quem os solicitou.
A partir disso, a pessoa que fez a requisição pode fazer o que quiser com os dados recebidos.

**Viewsets**

são classes que fornecem uma abstração para agrupar a lógica de manipulação de um CRUD (Create, Retrieve, Update, Delete) relacionada a um modelo de dados específico.

Eles fornecem uma interface consistente e poderosa para manipular recursos RESTful, permitindo que você defina facilmente métodos para lidar com diferentes operações em um único local.