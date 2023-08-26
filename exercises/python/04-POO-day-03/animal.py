class SerVivo:
    def __init__(self):
        self.idade = 0


    def faz_niver(self):
        self.idade += 1
       
class Animal(SerVivo):
    def __init__(self, especie: str, cor: str):
        super().__init__() # vazzio pq a classe mãe não recebe parametros
        self.especie = especie
        self.cor = cor

    def comer(self, comida:str):
        return f"O animal da especie {self.especie} está comendo { comida }"
    

class Gato(Animal):
    def __init__(self, cor: str, tem_bigode: bool, num_de_patas: int):
      #chama a classe mãe - Animal e usa o mesmo inicializador usado lá, com os dois parametros que ela recebe. Como a classe é gato, a espécie só pode ser gato, já deixa fixo, em hard coded, e a cor é recebida novamente como param
        super().__init__("Gato", cor)
        self.tem_bigode = tem_bigode
        self.patas = num_de_patas

    def miar(self):
        return "miaaaauu"
    

pacoca = Gato('laranja', True, 4)
print(pacoca.miar())
pacoca.faz_niver()
print(pacoca.idade)