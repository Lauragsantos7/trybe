def add_two_numbers(num1: int, num2: int)-> int:
    return num1 + num2

print(add_two_numbers(1, 2.0))
# ao rodar o comando mypy app.py vai dar erro pq foi passado um float no seg parametro e a func esperava um int
# se rodar python3 app.py o retorno é '3.0' - não dá erro

# Para que o mypy exiba as linhas que deveriam ter anotações de tipo, mas não tem, pode ser executado de modo estrito: mypy app.py --strict

class Pessoa:
    def __init__(self, nome: str, idade: int, altura: float) -> None:
        self.nome = nome
        self.idade = idade
        self.altura = altura


