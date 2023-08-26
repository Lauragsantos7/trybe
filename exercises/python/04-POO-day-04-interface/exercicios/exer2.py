# deverá ter uma interface chamada Entregavel que precisa conter um método chamado entregar. Essa interface vai ser implementada pelas classes Correios e Transportadora. O método entregar deverá receber como parâmetro um objeto da classe Cliente e um objeto da classe Endereco. Além disso, o método precisa imprimir uma mensagem informando que o serviço foi entregue com sucesso.

# ➡️ Siga os passos a seguir para a construção.

# Crie uma classe chamada Cliente com os atributos nome e telefone.
# Crie uma classe chamada Endereco com os atributos rua, numero, bairro, cidade e estado.
# Crie uma classe chamada Correios que implemente a interface Entregavel.
# Crie uma classe chamada Transportadora que implemente a interface Entregavel.
# Crie uma classe chamada Main com um método main que instancie um objeto de cada uma das classes Correios e Transportadora. Em seguida, crie um objeto da classe Cliente e um objeto da classe Endereco. Por fim, utilize o método entregar dos objetos Correios e Transportadora passando como parâmetro o objeto Cliente e o objeto Endereco.

class Clientes:
    def __init__(self, name: str, phone: int):
        self.name = name
        self.phone = phone

class Endereco:
    def __init__(self, street: str, number: int, district: str, city: str, state: str):
        self.street = street
        self.number = number
        self.district = district
        self.city = city
        self.state = state

from abc import ABC, abstractmethod
class Entregavel(ABC):
    @abstractmethod
    def entregar(cliente: Clientes, endereco: Endereco):
        pass
    
class Correios(Entregavel):
    def entregar(self, cliente: Clientes, endereco):
        print(f"Entregue com sucesso ao cliente {cliente.name} no endereço {endereco.street}, {endereco.number}")

class Transportadora(Entregavel):
    def entregar(self, cliente: Clientes, endereco):
        print(f"Entregue com sucesso ao cliente {cliente.name} no endereço {endereco.street}, {endereco.number}")

class Main:
    def main(self):
        correios = Correios()
        transpo = Transportadora()
        cliente = Clientes("Laura", 99999)
        end = Endereco('rua 1', 25, 'b. centro',  'patos', 'mg')
        correios.entregar(cliente, end)

if __name__ == "__main__":
    Main().main()
