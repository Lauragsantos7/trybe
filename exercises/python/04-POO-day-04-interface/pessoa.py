from ABC import ABC, abstractmethod

class Pessoa(ABC):
    def __init__(self, nome, idade):
        self.nome = nome
        self.idade = idade


    @abstractmethod
    def apresentar(self):
        pass

class PessoaEstudante(Pessoa):
    def __init__(self, nome, idade, matricula):
        super().__init__(nome, idade)
        self.matricula = matricula

    def apresentar(self):
        print(f"Olá, meu nome é {self.nome} e eu sou aluno com matricula {self.matricula}")

aluno = PessoaEstudante("Laura", 30, 1256847)

print(aluno.apresentar())