import functools


@functools.singledispatch  # decorando a função para criar um dispatcher
def func(parâmetro):
    print(parâmetro)


@func.register(int)  # passando um tipo para o registrador do dispatcher
def _(parâmetro):  # observe que o nome da função é irrelevante
    print(parâmetro * 2)


@func.register  # NÃO passando o tipo para o registrador
def _(parâmetro: float):  # mas passando o tipo como type hint
    print(parâmetro * 5)


func(4)  # saída: 8
func(4.0)  # saída: 20.0
func("4")  # saída: 4


# A sobrecarga pode ser feita decorando uma função ou um método com o decorador equivalente e, em seguida, registrando funções/métodos adicionais com o decorator @nome_da_função.register. Essas funções/métodos adicionais não devem ter um nome, sendo declaradas com um _. Para isso, o register deve receber o tipo do parâmetro ou esse tipo deve ser declarado como dica de tipo (type hint) nas funções decoradas.