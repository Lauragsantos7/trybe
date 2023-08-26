# Plares do POO

Obs.: Não consegui ativar o ambiente virtual com o python 3.10 term que usar o comando python3.8 -m venv .venv para ativá-lo na versão 3.8

**Herança** é a capacidade de uma classe herdar atributos e métodos de outra classe\
Em python, a palavra-passe 'super' é usada para acessar métodos e atributos de uma classe pai ou uma superclasse a partir de ua classe filha ou subclasse. E a busca por esse método é feito em uma ordem específica - https://www.python.org/download/releases/2.3/mro/

*Herança múltipla* - Capacidade que uma classe tem de herdar de mais de uma classe ao mesmo tempo. Ou seja, a classe A pode herdar da classe B e C ao mesmo tempo.
Ex.: class A(B, C) - seu uso é bastante desencorajado pois gera complexidade extra
**Mixins** são classes que não têm estado, mas apenas métodos, que podem ser utilizados por outras classes

**Abstração** É a capacidade de abstratir características de um objeto do mundo real e tansformá-las em atributos de uma classe

**Encapsulamento** É a capacidade de evitar que os dados sofram acessos indevidos\
self.nome = nome -> membro público\
self._projeto = projeto -> membro protegido, acessível dentro da classe e suas subclasses\
self.__salario = salario -> membro privado, acessível apenas dentro da classe

**Polimorfismo** É a capacidade de redefinir métodos de uma classe herdada - diferentes métodos são chamados pelo mesmo nome

*Composição é atribuir o objeto de uma classe a um atributo da outra, gerando, assim, um relacionamento de pertencimento entre elas.*
Por exemplo: agora que temos nosso liquidificador funcionando, vamos associá-lo a uma pessoa cozinheira, dizendo que ela pode ter um liquidificador.


** video com decorator no final da aula em dicas pythonicas**