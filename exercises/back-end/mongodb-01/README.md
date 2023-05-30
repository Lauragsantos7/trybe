# Mongo BD

- **1- Docker**

comando: docker run --name mongodb_v6 -d -p 27017:27017 mongo:6.0

Para ter acesso a um shel com o mongksh no container docker criaod, executar  comando:  docker exec -it mongodb_v6 mongosh

ir até o diretório onde está salvo o arquivo .json com os dados do banco de dados e executar o comando: docker cp trybnb.json mongodb_v6:/tmp/trybnb.json

para copiar os arquivos para o container.

Após, voltar para o pasta do projeto e usar o comando: 
docker exec mongodb_v6 mongoimport -d trybnb -c places --file /tmp/trybnb.json --jsonArray

No terminal Docker, executar os comandos pra confirmar a importação:
   para acessar o banco de dados:
use trybnb
  Para pesquisar todos os docs cadastrados na coleçao:
db.places.find()

- **2 - Recuperando Dados** 

para acessar o banco de dados:
use trybnb

Para pesquisar todos os docs cadastrados na coleçao:
db.places.find()

Realizar contagem de documentos:
db.places.countDocuments()

Recuperando docs baseado em um critério: 
o método find pode receber dois parâmetros: **query(critério de seleção a ser utlizado em uma pesquisa de docs) e projection(quais chaves devem ser retornadas ou não)**

**Query**

Procura o imovel sujo capo _id seja igual a 7

db.places.find({ '_id': 7 })

para saber quais imóveis estão localizados no brasil, existe um campo country_code que tá dentro de um objeto chamado address. como existe um aninhamento de campos, teremos que utilizar o campo composto **dotNotation** para filtrar os dados:

db.places.find({ 'address.country_code': 'BR' })

para contar esses imóveis, basta acrescentar o count ao final: 
db.places.find({ 'address.country_code': 'BR' }).count()


**Projection**

permite especificar quais campos devem ou não serem retornados em uma consulta utlizando o método find()

Para exibir apenas o nome do imóvel de _id 7 :

db.places.find({ '_id': 7 }, { 'name': true })

projection é um objeto que pode conter um ou mais campos com valor true ou false, em que apenas os valores true serão exibidos


exibir nome e endereço:
db.places.find({ '_id': 7 }, { 'name': true, 'address': true })

Ordenando uma resposta:
por padrão, os docs não sao rtornados na ordem do atributo _id, caso deseje esse retorno, é necessário especifar na busca:

db.places.find().sort({'_id': 1})
 e -1 para ordenação decrescente

- **3 - Operadores de comparação**

$eq: Específica uma condição de igualdade (equal). O operador $eq realiza a correspondência de documentos em que o valor de uma chave é igual ao valor especificado.

{<chave> { $eq: <valor> }}


$ne: Especifica uma condição de não igualdade (not equal). O operador $ne realiza a correspondência de documentos em que o valor de uma chave não é igual ao valor especificado.

{<chave> { $ne: <valor> }}


$gt: Especifica uma condição de maior que (greater than). O operador $gt realiza a correspondência de documentos em que o valor de uma chave maior que o valor especificado.

**db.places.find({price:  { $gt: 100 }}, {price: true})** pesquisa os imóveis com preço acima de 100 e retorna esse preço


$gte: Especifica uma condição de maior ou igual (greater than or equal). O operador $gte realiza a correspondência de documentos em que o valor de uma chave maior ou igual ao valor especificado.
{<chave> { $gte: <valor> }}


$le: Especifica uma condição de menor que (less than). O operador $le realiza a correspondência de documentos em que o valor de uma chave menor que o valor especificado.
{<chave> { $le: <valor> }}


$lte: Especifica uma condição de menor ou igual (less than or equal). O operador $gte realiza a correspondência de documentos em que o valor de uma chave menor ou igual ao valor especificado.

{<chave> { $lte: <valor> }}

- **Inserindo dados**
Dois métodos: insertOne() e insertMany()

Toda e qualquer manipulação de dados no MongoDB se dá através de documentos, ou seja, na inserção serão inseridos documentos assim como em uma consulta recuperamos documentos.

BDs NoSQL não possuem schemas, ou seja, não pussem uma estrutura rígida que deve ser seguida durante a inserção ou uma atualização de dos. Logo, os docs não precisam ter as mesmas chaves, pode ter chaves a menos, a mais ou com nomes distintos

db.places.insertOne({_id: 100, name: "Casa na Lua", description: "Uma vista única da terra"})

insertMany([{}]) deve ser um array pq são vários docs.

Terminei parte 01 da aula 53 - vida real. Falta aula o vivo e exercicios. 


**Aula ao vivo - turma 25 B - Isaac**

**iniciar um banco de dados:** 
use nomeDoBanco - se não tiver o banco, ele ja cria automaticamente (criei o banco class)

**criar uma coleção(tabela):** 
bd.nome-da-coleção.insertOne (criei coleção inventory)

db.inventory.find().pretty() (retorna mais legível, indentado)

**mongo no VSCODE**

abrir a extensão, conectar na porta que configurou no docker e fazer o arquivo para manipulação do DB, que no caso é o 'queries.mongodb'
