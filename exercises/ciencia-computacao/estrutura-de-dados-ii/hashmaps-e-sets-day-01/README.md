# hashmap e Dict

 Has map -> estrutura de dados que oferece operações de consulta e inserção e 0(1), além de usar um estrutura de chave-valor. VocÊ pode melhorar a legibilidade de seu código e pensar em diferentes lógicas durante a resolução dos desafios

**Hashing** - tranforma um dado em uma representação numérica única. Atribui um id para um determinado dado, mas diferente de um id sequencial. A composição do dado influencia diretamente no id gerado. Para isso, precisamos submeter o dado a alguma transformação matemática que considere a sua composição.
Função : ord(string)

A operação matemática se chama sah function e o resultado da operação, no caso de verificação de integridade, é chamado checksum (soma de verificação)

  O procedimento de hasshing tem uso em criptografia, armazenamento de senhas e compressão de arquivos, por exemplo. 


hash criptográfica: passa por uma função e tem uma saída. Representação hexadecimal( 0 a 9, A a F)


**hashing para estruturar dados**
A estratégia de armazenamento de hasmap é submeter o dado a um procedimeto matemático (has function) para obter um endereço único onde ela será guardada (address)

Uma vez obtido o endereço, basta armazenar o dado no local correto. 
O local de armazenamento é comumente chamado de buckets(baldes), que é onde vamos jogar os dados

**Correção de colisão :**

**Separate Chaining** Qdo mais de um resultado de operações dão o mesmo valor, é criado um array de elementos na posição, em vez de apenas um elemento.

Para buscar esses dados, procura-se dentro do array o número passado por parametro
Ex.:
14/10 = 1 e sobra 4 (armazena na posição 4)
24/10 = 2 e sobra 4(armazena tbm na posição 4)
4 = [ 14, 24]
Para resgatar os dados de 24, por ex., busca-se esse valor dentro do array que está na salvo no elemento de posição 4

**Open Adrressing :**

Se a posição estiver cheia, pula para a próxima posição vazia

Em Python, o classe Dict implementa a hashmap

# Dicionários - Dict

São estruturas de dados do tipo chave-calor que são implementadas como hasmaps por baixo dos panos. A combinação de hash functions e tratamento de colisões do Dict garantem uma complexidade assintótica de o(1) para inserção de consulta.



