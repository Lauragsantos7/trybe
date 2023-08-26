# Classes abstratas
São aquelas que possuem um ou mias métodos abstratos(métodos declarados, porem sem implementação, ou seja, somente assinatura)

Uma classe abstrata em Python pode ser considerada um projeto, um contrato, ou um molde para outras classes. Por meio dela, pode-se criar um conjunto de métodos que devem ser feitos em qqr classe filha construída com base na classe abstrata

NÃO podem ser instanciadas e precisam de subclasses que gerem implementação para os métodos, e devem ser sobrescritos obrigatoriamente

Por padrão, o *Python não fornecce classes abstrtas*, Ele vem com um mṕdulo que as fornece - ABC
Um método torna-se abstrato qdo decorado com a palavra-passe @abstraticmethod

# interfaces 
são uma forma de definir um ocnjunto de métodos que devem ser implementados por uma classe que a utiliza, grantindo que essa classe atenda a um determinado contrato de implementação

Mesmo sem uma palavra reservada interface na linguagem Python e independente das ABCs, toda classe tem uma interface: os atributos públicos definidos (métodos ou atributos de dados), implementados ou herdados pela classe. Isso inclui métodos especiais, como __getitem__ ou __add__. Ou seja, a interface é antes de mais nada um conceito que pode ser aplicado sempre que necessário.

Interfaces formais e informais

As classes abstratas são exemplos de interfaces formais
Interface informal é mto parecida com uma classe python comum. Poderá definir métodos que posteriormente serão sobrescritos, mas não há obrigatoriedade para tal

**Protocolos**

São classes que herdam de typing.Protocol e foram introduzidos no Python3.8.\
Servem para possibilitar a tipagem estática na verificação estrutural - que tbm é chamada de duck typing. 
Vantagens de uso:\ Fazem verificação estrutual e não nominal, isso é, não forçam que as classes usem herança, basta ters os métodos esperados;\
Rodamem tempo de verificação estática, pegando erros antes de o código ser executado;\


deve-se utilizar os protocolos quando:

Estamos colocando tipagem estática em um código que já usa tipagem estrutural - duck typing - e queremos mantê-la.
Já estamos usando tipagem estática e queremos remover a tipagem nominal, deixando o código menos acoplado. Por exemplo, quando queremos ter mais de uma classe concreta que respeitam o mesmo protocolo.


