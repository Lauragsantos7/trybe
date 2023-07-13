# Tipagem 

Em Python é possível fazer a checagem de tipos que podem ser divididas em dois grupos: estática ou dinâmica; estrutural ou nominal

**Tpagem estática** - o tipo de uma var é definido de forma que, antes do código ser executado, durante sua compilação, erros de tipo são detectados e distaparados. Ex.: TS

**Tipagem dinâmica** - ocorre durante a execução do código. qdo, a cada linha executada, os tipos das var vão sendo "descobertos" e erros de tipo são disparados somente durante a execução do programa.

**Tipagem nominal** - verifica se dois valores são do mesmo tipo de acordo com o nome do seu tipo. (???)

**Tipagem estrutural** - infere o tipo de um valor de acordo com os métodos aos quais o tipo dá suporte.

A tipagem em Python, por padrão, é dinâmica, mas foi intrpduzido recentemente suporte para tipagem estática através dos type hints

Por padrão, python tbm tem tipagem nominal, mas a ferramenta Protocol e a lib MyPy trazem a tipagem estrutural para Python tbm

Ou seja, por padrão, tipagem de python é dinâmica e nominal, mas se vc preferir, pode ser estática e estrutural.

**Type Annotations** ou Type Hints(Dicas de tipo) são utilizadas para checagem estática e são apenas DICAS: o comportamento em tempo de execução do Python continua inalterado e se vc desrespeitar a dica, o código rodará normalmente. 

Há analisadores de tipagem disponíveis para Python que podem ser rodados antes mesmo de rodar o código, descobrindo bugs por uso de tipos errados com antecedência

**Para usar dicas de tipo, basta colocar o o sinal de dois pontos(:) depois de uma declaração de var ou param. Ex.: var:int = 1 ou def my_func(parameter: str)**

**Para indicar o retorno, utiliza-se uma seta após o fechamento do parêntese: def my_func(parameter: str) -> int:**

**Tipos complexos** typing -> blocos de construtores de tipos https://docs.python.org/3/library/typing.html

- Any - deixar explícita a falta de tipagem
- Union - ode ter um entre dois tipos: Ex.:  essa função aceita um inteiro ou uma string : def my_func(parameter: Union[int, str]): (Pode usar pipe - (parameter: int | str):)
- Optional - o valor pode ser um tipo ou None: def my_func() -> Optional[int]
**Não é boa prática que uma função que retorne mais de um tipo**

- Callable - qdo queremos que indicar que o valor é uma função(ou um invocável qqr), visto que em Python funções podem ser passadas como param para outras funções e podem ser retornadas por outras funções
E.: def my_func(param: Callable[[int, str], float]) my_func recebe como parametro param, uma função que recebe um inteiro, uma string e retorna um float

**mypy** Ferramenta que permite realizar a verificação de conformidade de tipagem antes do código ser executado. 
- pip install mypy

rodar o comando **mypy app.py** para conferir os eventuais problemas de tipo

Para que o mypy exiba as linhas que deveriam ter anotações de tipo, mas não tem, pode ser executado de modo estrito: mypy app.py --strict\
É uma boa opção para realizar a tipagem gradual de um código não tipado inicialmente

**Inferência de tipo** Variáveis declaradas com seu valores -> 'var1 = 1' não precisam de Type Hints, a não ser que a var possa ter mais de um tipo

# POO
Toda classe tem como finalidade modelar com precisão a representação de uma entidade, dizendo quais características essa entidade tem e quais ações pode realizar. 

**Objetos** obj ou instância de classe é algo específico. ex.: class liquidificador tem vários métodos e atributos(ligar, desligar, cor, potência) comuns a todos os liquidificadores. 
ao instanciar um objeto 'meu_liquidificador = Liquidificador()' esse objeto já vem com todos os métodos que existem na classe 'Liquidificador'

**Atibutos e métodos** são propriedades das coisas. Uma classe define quais atributos tem, e um objeto, quais os valores dos atributos.\
Ex.: Um liquidificador tem uma cor e uma potência, a classe 'Liquidificador' vai declarar esses atributos, mas não vai definir os valores pra ele. Isso será feito no objeto criado a partir da classe:\
meu_liquidificador = Liquidificador()\
meu_liquidificador.cor = preto\

**Métodos e comportamentos** Métodos são ações que um objeto ou classe podem realizar. são funções.

**Construtor/Inicializador**

Construtor é um método especial que roda automaticamente quando a gente cria(instancia) um objeto.
Em Python, a operação é dividida em dois métodos:
__new__ (constructor)
__init__ (inicializador)

O python já implementa esses métodos por padrão para cada nova classe criada, mas vc pode implementá-la novamente, ou seja, sobrescrevê-los


**Classes como tipos**

Uma classe pode ser utilizada como tipo qdo uma instância dela é esperada como valor de alguma var. 