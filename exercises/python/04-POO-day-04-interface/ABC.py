from abc import ABC, abstractmethod


class Pessoa(ABC):
    @abstractmethod
    def nome(self):
        pass


class Vendedor(Pessoa):
    def __init__(self, seu_nome):
        self.seu_nome = seu_nome

    def nome(self):
        print(f"Seu nome é: {self.seu_nome}")





# A classe concreta fornece implementação de métodos abstratos, a classe base abstrata também pode fornecer uma implementação utilizando os métodos via super(). Vejamos um exemplo para utilizar o método usando super():
class X(ABC):
    @abstractmethod
    def exemplo(self):
        print("Classe-base abstrata")


class Y(X):
    def exemplo(self):
        super().exemplo()
        print("Subclasse")


z = Y()
z.exemplo()
