#  sobrescrita de métodos é mais comum em qualquer linguagem que tenha orientação a objetos. A sobrescrita ocorre quando um método definido em uma superclasse é novamente definido (reescrito/sobrescrito) na subclasse.

#  Para realizar a sobrescrita, basta declarar novamente o método na subclasse. 

class Animal:
    def se_mover(self):
        return f"o animal está se movendo"
    
    
class Gato(Animal):
    def se_mover(self):
      moviment = super().se_mover()
      # o retorno do método da superclasse foi salvo na variável moviment
      return f"{moviment} numa velocidade incrivel"
    # e foi acrescentado outra string ao final da frase 
    

gato = Gato()
print(gato.se_mover())