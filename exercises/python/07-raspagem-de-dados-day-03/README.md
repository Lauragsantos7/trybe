
# mongo e Crawlers 
dentro do amb virtual:\
python3 -m pip install pymongo

# Bancos de dados NoSql

De acordo com o teorema CAP, criado pelo cientista da computação Eric Brewer, qualquer sistema distribuído de dados pode apenas prover duas das três propriedades seguintes:

Consistência (Consistency): Significa que todas as pessoas que utilizam o banco de dados visualizam os mesmos dados não importando qual servidor elas estejam conectadas (no caso do banco de dados estar distribuído em mais de um servidor). Para que isso aconteça, sempre que os dados forem gravados em um nó (servidor), ele deve ser instantaneamente replicado para todos os outros nós (servidores) antes que a gravação seja considerada bem-sucedida;
Disponibilidade (Availability): Significa que qualquer pessoa que realizar uma solicitação de dados, obterá uma resposta! Mesmo que um ou mais nós (servidores) estejam desativados. Em outras palavras, todos os nós em funcionamento do banco de dados retornam uma resposta válida para qualquer solicitação, sem exceção;
Tolerância a Partição (Partition Tolerance): É a quebra de comunicação (e possivelmente de dados) dentro de um banco de dados que funciona sobre vários servidores (nós) permitindo que, em caso de uma ou mais falhas de comunicação entre um ou mais servidores, o sistema deve continuar a funcionar.

Como o teorema CAP dis que qualquer sistema distribuído de dados pode prover apenas duas das três propriedades, temos as seguintes combinações para bancos de dados:

Banco de dados CP: Um banco de dados do tipo CP (Consistency and Partition Tolerance) entrega consistência e tolerância a falhas em detrimento da disponibilidade. Quando uma partição (divisão) ocorre entre dois nós, por exemplo, uma divisão de uma tabela em duas, por aplicação de uma forma normal, o nó não consistente deverá ser desativado (indisponível) até que tudo se resolva;
Banco de dados AP: Um banco de dados do tipo AP (Availability and Partition Tolerance) entrega disponibilidade e tolerância a falhas em detrimento da consistência. Quando ocorre uma partição, todos os nós permanecem disponíveis, exceto aqueles que estão trabalhando no processo de particionamento. Quando a partição é resolvida, todos os nós realizam uma sincronização dos dados para corrigir as inconsistências do sistema.
Bancos de dados relacionais são do tipo CP, pois quando realizamos uma modificação na estrutura do banco de dados ele fica indisponível para garantir a consistência (permitir que todas as pessoas tenham acesso aos dados mais recentes).

Já os bancos de dados NoSQL são do tipo AP, pois quando realizamos uma modificação na estrutura do banco de dados, o mesmo não fica indisponível. Na pior das hipóteses uma pesquisa no banco de dados não retornará os dados mais recentes, contudo ainda retornará uma resposta.

# Mongo DB

https://www.mongodb.com/docs/manual/core/document/#bson-document-format


Um registro no MongoDB é chamado de documento, o qual é uma estrutura de dados composta por pares de chaves e valores.

Documentos embarcados, são documentos, dentro de documentos! Vamos ver muito disso em nosso conteúdo! Um conjunto de documentos é chamado de coleção. Coleções são análogas as tabelas nos bancos de dados relacionais.

Os documentos são armazenados em um formato chamado de BSON (Binary JSON), que é uma representação binária de documentos JSON, além de possuir mais tipos de dados que um JSON convencional. 

**Configurando Docker**

docker run --name mongodb_v6 -d -p 27017:27017 mongo:6.0

Para manipular os banco de dados, coleções e documentos no MongoDB, utilizaremos uma ferramenta de linha de comando chamada mongosh (Mongo Shell).

docker exec -it mongodb_v6 mongosh

Baixar o arquivo json que deseja copiar da máquina local para o container. Abir uma janela do terminal no diretório em que esse arquivo se encontra e copiá-lo no container:
docker cp 'nome_do_arquivo'.json mongodb_v6:/tmp/'nome_do_arquivo'.json

**Carregar o arquivo JSON para o Mongo:**\
A ferramenta mongoimport importa conteúdo de um arquivo .JSON, .CSV ou .TSV criados pela ferramenta utilitária mongoexport.

docker exec mongodb_v6 mongoimport -d 'nome_do_arq' -c places --file /tmp/'nome_do_arq'.json --jsonArray


**2 - Recuperando Dados** 

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
por padrão, os docs não sao retornados na ordem do atributo _id, caso deseje esse retorno, é necessário especificar na busca:

db.places.find().sort({'_id': 1})
 e -1 para ordenação decrescente

- **3 - Operadores de comparação**

https://www.mongodb.com/docs/v6.0/reference/operator/query-comparison/

$eq: Específica uma condição de igualdade (equal). O operador $eq realiza a correspondência de documentos em que o valor de uma chave é igual ao valor especificado.

{'chave' { $eq: 'valor' }}


$ne: Especifica uma condição de não igualdade (not equal). O operador $ne realiza a correspondência de documentos em que o valor de uma chave não é igual ao valor especificado.

{'chave': { $ne: 'valor' }}


$gt: Especifica uma condição de maior que (greater than). O operador $gt realiza a correspondência de documentos em que o valor de uma chave maior que o valor especificado.

**db.places.find({price:  { $gt: 100 }}, {price: true})** pesquisa os imóveis com preço acima de 100 e retorna esse preço


$gte: Especifica uma condição de maior ou igual (greater than or equal). O operador $gte realiza a correspondência de documentos em que o valor de uma chave maior ou igual ao valor especificado.
{'chave': { $gte: 'valor' }}


$le: Especifica uma condição de menor que (less than). O operador $le realiza a correspondência de documentos em que o valor de uma chave menor que o valor especificado.
{'chave': { $lt: 'valor' }}


$lte: Especifica uma condição de menor ou igual (less than or equal). O operador $gte realiza a correspondência de documentos em que o valor de uma chave menor ou igual ao valor especificado.

{'chave': { $lte: 'valor' }}

- **Inserindo dados**
Dois métodos: insertOne() e insertMany()

Toda e qualquer manipulação de dados no MongoDB se dá através de documentos, ou seja, na inserção serão inseridos documentos assim como em uma consulta recuperamos documentos.

BDs NoSQL não possuem schemas, ou seja, não pussem uma estrutura rígida que deve ser seguida durante a inserção ou uma atualização de docs. Logo, os docs não precisam ter as mesmas chaves, pode ter chaves a menos, a mais ou com nomes distintos

db.places.insertOne({_id: 100, name: "Casa na Lua", description: "Uma vista única da terra"})

insertMany([{}, {}]) deve ser um array pq são vários docs.


**Aula ao vivo - turma 25 B - Isaac**

**iniciar um banco de dados:** 
use nomeDoBanco - se não tiver o banco, ele ja cria automaticamente (criei o banco class)

**criar uma coleção(tabela):** 
bd.nome-da-coleção.insertOne (criei coleção inventory)

db.inventory.find().pretty() (retorna mais legível, indentado)

**mongo no VSCODE**

abrir a extensão, conectar na porta que configurou no docker e fazer o arquivo para manipulação do DB, que no caso é o 'queries.mongodb'



# Parte 2 

**Pesquisa pela ocorrência de palavras em campos de texto ou por valores dentro de um alista, alterar e excluir documentos**

**Operador $and** - avaliará um array que contém um conjunto de expressões. Se todas as expressões forem verdadeiras para um ou mais docs, eles serão retornados.

Ex.: pesquisar imóveis com preço menor ou igual a $50.00, entre dois e 3 quartos e que o proprietário seja superhost:

  db.places.find({
    $and: [
      { price: { $lte: 50.00 } },
      { bedrooms: { $gt: 1, $lte: 3 } },
      { "host.host_is_superhost": { $eq: true } }
    ]
  })


**Operador $or** - pesquisa por imóvel com 2 quartos ou menos ou que possua mais de uma cama:

  db.places.find({
    $or: [
      { bedrooms: { $lte: 2 } },
      { beds: { $gt: 1 } }
    ]
  })



# Operadores de consulta:
**Operador $all** - verifica a presença de valores dentro de array. Qdo é preciso passar mais de um valor para comparação em um atributo do tipo array e a ordem desta lista não importa. (semelhante ao and)

pesquisar os imóveis que possuem fogão e geladeira:
db.places.find({ amenities: { $all: ["Stove", "Refrigerator"] } })

OBS.: o comando abaixo:\
db.places.find({ amenities: ["Garagem", "jacuzzi", "Armários", "piscina"] })

retorna somente os docs em que o array seja EXATAMENTE IGUAL ao passado como parâmetro e na mesma ordem. 

**Operador $elemMatch** - retorna todos os docs que satisfaçam ao menos um critério, ou seja, com esse operador você pode especificar várias queries para um mesmo array,. (semelhante ao or)

db.places.find({
  amenities: {$elemMatch: {$in: ['TV', "Stove"]}}, {_id: true, amnities: true}
})

busca os ids e o 'amenites' dos imóveis que tenham tv ou fogao dentro de 'amenities'


**Operadores $regex e $exists** 

*$regex* - procura por padrões de texto dentro de textos gdes
db.places.find({
  house_rules: {$regex: "Pro", $options: "i"}, 
  {house_rules: true}
})
retorna os docs em que house_rules tenham um trecho que possua os caracteres 'Pro', independente da palavra a que fazem parte. $options: "i" para pesquisar por maiúsculas e minúsculas

*$exists* - filtra docs em que o atributo especificado existe ou não. 
  db.places.find({ reviews: { $exists: true } })
  // ou
  db.places.find({ cancellation_policy: { $exists: false } })



  **Update** 

  updateOne() para alterar apenas um valor
  updateMany() para alterar vários valores


  db.places.updateOne(
    {_id: 100},
    {$set: {name: "Nova casa da Laura", street: "Aqui mesmo"}
  })
* pode usar o $set para criar uma nova coluna
* se usar $unset, apaga a coluna 

db.placesupdateMany({
{crtiério de busca},
{coluna que quer alterar - altera todos os que preenchem o ctitério definido na chave anterior}
  })


**Delete**

deleteOne()
deleteMany()

db.places.deleteOne({ _id: 11 })

Caso você não passe filtros na query, ela irá remover o primeiro registro da coleção

 Remove todos os docs em que 'host_identity_verified' seja falso:
db.places.deleteMany({ "host.host_identity_verified": { $eq: false } })

Caso não passe nenhum param, remove TODOS OS DOCS DO DB.
