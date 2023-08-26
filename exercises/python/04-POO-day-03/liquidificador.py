# para herdar de uma classe, basta passar a classe mãe como parametro da classe filha:
from eletrodomestico import Eletrodoméstico

class Liquidificador(Eletrodoméstico):
    # getter implementa a lógica de como recuperar um valor. É usado um decorator(@prperty para indicar que é um getter)
    @property
    def cor(self):
        return self.__cor.upper()

# setter implementa a lógica de como alterar um valor
    @cor.setter
    def cor(self, nova_cor: str) -> None:
        if nova_cor.lower() == "turquesa":
            raise ValueError("Não existe liquidificador turquesa")

        self.__cor = nova_cor
        
    def __init__(self, cor: str, potencia: str, tensao: str, preco: str) -> None:
        self.preco = preco
        self.cor = cor
        self._potencia = potencia
        self._tensao = tensao
        self.__ligado = False
        self.__velocidade = 0
        self.__velocidade_maxima = 3
        self.__corrente_atual_no_motor = 0

    def ligar(self, velocidade: int) -> None:
        if velocidade > self.__velocidade_maxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.__velocidade_maxima}"
            )

        self.__velocidade = velocidade
        self.__corrente_atual_no_motor = (
            (self._potencia / self._tensao) / self.__velocidade_maxima
        ) * velocidade
        self.__ligado = True

    def desligar(self):
        self.__ligado = False
        self.__velocidade = 0

    def esta_ligado(self):
        return self.__ligado


# composição: atribuir o objeto de uma classe a um atributo da outra, gerando, assim, um relacionamento de pertencimento entre elas
class Pessoa:
    def __init__(self, nome: str, saldo_na_conta: float) -> None:
        self.nome = nome
        self.saldo_na_conta = saldo_na_conta
        self.liquidificador: Liquidificador | None = None

    def comprar_liquidificador(self, liquidificador: Liquidificador) -> None:
        if liquidificador.preço <= self.saldo_na_conta:
            self.saldo_na_conta -= liquidificador.preço
            self.liquidificador = liquidificador

pessoa_cozinheira = Pessoa("Jacquin", 1000)
pessoa_cozinheira.comprar_liquidificador(liquidificador_vermelho)