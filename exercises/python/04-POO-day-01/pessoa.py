class Pessoa:
    def diz_nome_e_idade(self, idade: int) -> None:
        print(f"{self.nome} tem {idade} anos.")
# SELFIE -> chamado de this em outras linguagens. Como pode haver vários objetos da classe Pessoa, é necessário referenciar, dentro da classe, o objeto atual que está acessando o método. Selfie é um param explíciit de todos os métodos, e recebe automaticamente como valor o objeto que está chamando o método. 

# OBS.: Os métodos de uma classe não precisam estar dentro dela bastando ser referenciado dentro dela. Ex.: 
# def método(self, idade: int) -> None:
#    print(f"{self.nome} tem {idade} anos.")

# class Pessoa:
#    diz_nome_e_idade = método

maria = Pessoa()
maria.nome = "Maria"
maria.diz_nome_e_idade(20) # saída: Maria tem 20 anos.

jorge = Pessoa()
jorge.nome = "Jorge"
jorge.diz_nome_e_idade(28) # saída: Jorge tem 28 anos.