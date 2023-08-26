from abc import ABC, abstractmethod

# classe abstrata chamada Funcionario que servirá de base para as classes Programador, Analista e Gerente. Nessa classe abstrata deverá conter um método abstrato chamado calcularBonificacao a ser implementado nas classes filhas. Então, o método calcularBonificacao deverá retornar o valor do salário do funcionário acrescido de um bônus, que precisa ser calculado da seguinte forma:

# Para o Programador o bônus será de 20% do salário;
# Para o Analista o bônus será de 30% do salário;
# Para o Gerente o bônus será de 40% do salário;


class Funcionarios(ABC):
    @abstractmethod
    def calcularBonificacoes(salario):
        pass
    

class Programador(Funcionarios):
  def __init__(self, salario: float):
     self.salario = salario
    
    
  def calcularBonificacoes(self):
    remuneracao = self.salario * 1.2
    return (f" salário do programador é {self.salario} e sua remuneração é {'{:.2f}'.format(remuneracao)},")

class Analista(Funcionarios):
  def __init__(self, salario):
   self.salario = salario
    
  def calcularBonificacoes(self):
    remuneracao = self.salario * 1.3
    return (f" salário do analista é {self.salario} e sua remuneração é {'{:.2f}'.format(remuneracao)},")
  

class Gerente(Funcionarios):
 def __init__(self, salario):
   self.salario = salario
    
 def calcularBonificacoes(self):
    remuneracao = self.salario * 1.4
    return (f" salário do gerente é {self.salario} e sua remuneração é {'{:.2f}'.format(remuneracao)},")
 


class Main:
   def main(self):
     programador = Programador(500)
     analista = Analista(1000)
     gerente = Gerente(2000)

     print(programador.calcularBonificacoes())
     print(analista.calcularBonificacoes())
     print(gerente.calcularBonificacoes())


if __name__ == "__main__":
    Main().main()