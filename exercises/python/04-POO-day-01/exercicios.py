from typing import List
# Escreva uma função que recebe uma lista de inteiros e retorna a soma desses valores.
nums = [3, 8, 5, 4]
def sum(numbers: List[int]) -> int:
    soma = 0
    for num in numbers:
      soma += num
    return soma
      
print(sum(nums))

# Escreva uma função que recebe uma lista de strings e um caractere e retorna uma lista com as strings que começam com o caractere fornecido.

words = ["cama", "gato", "amor", "saudade", "galinha"]
caractere = "g"
def return_strings(words: List[str], caracter: str) -> List[str]:
  word_list = []
  for word in words:
      if word[0] == caracter:
         word_list.append(word)
  return word_list

print(return_strings(words, caractere))


# 3 - Escreva uma classe que representa um livro com título, autor e número de páginas e tem um método que retorna uma string que descreve o livro.
class Livro:
   def __init__(
         self,
         title: str,
         author: str,
         pages: int
   ) -> None:
      self.title = title
      self.author = author
      self.pages = pages

   def description_book(self):
      print(f"Nome do livro: {self.title}, autor: {self.author}, número de páginas: {self.pages}")


desc = Livro("Amor Líquido", "Balman", 180)

print(desc.description_book())


# 4 -Escreva uma classe que representa um carro com modelo, ano e velocidade e tem métodos que aceleram e desaceleram sua velocidade, e mostre uma mensagem com o modelo, ano e o valor da aceleração ou desaceleração.

class Car:
   def __init__(self, model:str, year: int, speed: int) -> None:
      self.model =  model
      self.year = year
      self.speed = speed

   def speed_up(self, value: int)-> str:
     self.speed += value
     print(f'O carro {self.model}, fabricado no ano {self.year}, e está acelerando a {self.speed}km/h')


   def slow_down(self, value: int) -> str:
      self.speed -= value
      print(f'O carro {self.model}, fabricado no ano {self.year}, e está desacelerando a {self.speed}km/h')
   


car = Car('gol', 2001, 100)
carr = car.speed_up(10)
car2 = car.slow_down(80)
print(carr)
print(car2)
