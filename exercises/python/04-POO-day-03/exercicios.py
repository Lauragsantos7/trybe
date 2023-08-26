# 1 - Crie uma classe chamada Vehicle, que possui um atributo name do tipo string, capacity do tipo inteiro e um método move, que recebe um parâmetro distance do tipo inteiro e que retorna a mensagem '{self.name} carried {self.capacity} people across {distance} kilometers.'. 
# Crie uma classe Car que herda de Vehicle e modifica o método move para indicar, no começo da frase já existente, que foi especificamente um carro que levou as pessoas. Crie uma classe Motorcycle que herda de Vehicle e que tem capacidade fixada em 2.

class Vehicle():
    def __init__(self, name:str, capacity: int):
        self.name = name
        self.capacity = capacity
    
    def move(self, distance):
      return f"{self.name} carried {self.capacity} people across {distance} kilometers"
    
class Car(Vehicle):
   def modify_move(self, distance:int):
     return f"Car {super().move(distance)}"
   
class Motorcicle(Vehicle):
   def __init__(self, name: str):
      super().__init__(name, 2)
      

# 2 - Crie uma classe chamada Contact (contato), que deverá ter os atributos name e email. Crie uma classe chamada ContactList que deverá ter os atributos do tipo lista contacts e favorites. Esta classe deverá ter os métodos:

# add_contact: recebe um contato e o adiciona na lista
# remove_contact: recebe um nome e o remove da lista, retornando-o
# add_to_favorites: recebe um nome e o move da lista de contatos para a de favoritos
# remove_from_favorites: recebe um nome e o move da lista de favoritos para a de contatos
# Os três últimos métodos devem levantar um LookupError
class Contact():
   def _init__(self, name: str, email: str):
      self.name = name
      self.email = email


class ContactList(Contact):
  def __init__(self, name, email):
    super().__init__(name, email)
    self.contacts = []
    self.favorites = []
  
  def add_contact(self, contact: Contact):
     self.contacts.append(contact)
     
  def find_contact_by_name(self, name: str, favorites=False) -> Contact:
        contact_list = self.favorites if favorites else self.contacts

        try:
            contacts = [contact for contact in contact_list if contact.name == name][0]
        except IndexError:
            raise LookupError(f"Contact named {name} not found")

        return contacts

  def remove_contact(self, name: str):
     contact = self.find_contact_by_name(name)
     self.contacts.remove(contact)


  def add_to_favorites(self, name:str):
    contact = self.find_contact_by_name(name)
    self.contacts.remove(contact)
    self.favorites.append(contact)

  def remove_from_favorites(self, name: str):
      contact = self.find_contact_by_name(name)
      self.favorites.remove(contact)
      self.contacts.append(contact)
     

# 3 - Crie uma classe Animal com um atributo nome e um método fazer_som que imprime “Animal fazendo som”. Depois, crie uma classe Mamifero que herda de Animal e tenha um método amamentar. Por fim, crie uma classe Cachorro que herda de Mamifero e tenha um método latir e imprima “Au au!”.

class Animal:
   def __init__(self, name: str):
      self.name = name

   def fazer_som(self):
      return f"{self.name} fazendo som"
   
class MixinCorrer:
   def correr(self, vel):
      print(f"O {self.name} está correndo a {vel} km/h")
   
class Mamifero(Animal):
        
   def amamentar(self):
      print(f"{self.name} amamentando")
   
class Cachorro(Mamifero):
  
   def latir(self):
      print(f"{self.name} faz au au!")
   
class CachorroCorredor(Cachorro, MixinCorrer):
    pass


# 5 - Crie uma classe chamada Retangulo que represente um retângulo com os atributos base e altura. A classe deve ter métodos para calcular a área e o perímetro do retângulo.

class Retangulo:
   def __init__(self, base: int, altura: int):
      self.base = base
      self.altura = altura

   def calc_area(self):
      return self.base * self.altura

   def calc_perimetro(self):
     return (self.base * 2) + (self.altura *2)
# 6 
# ret = Retangulo(2, 4)
# print(ret.calc_area())
# print(ret.calc_perimetro())


# 7 Crie uma classe GastoMensal que contenha os seguintes atributos:
# internet: público supermercado: público luz: protegido agua:protegido aluguel: privado

class GastoMensal:
   
  def __init__(self, internet, supermercado, luz, agua, aluguel):
    self.internet =  internet
    self.supermercado = supermercado
    self._luz = luz
    self._agua = agua
    self.__aluguel = aluguel

  @property
  def luz(self):
    return self._luz
  @property
  def agua(self):
     return self._agua
  
  @agua.setter
  def agua(self, novo_gasto: int) -> None:
    self._agua = novo_gasto
  
  @luz.setter
  def luz(self, novo_gasto: int) -> None:
    self._luz = novo_gasto


