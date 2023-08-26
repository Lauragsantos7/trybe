class Eletrodoméstico:
    def __init__(
        self,
        cor: str,
        potência: int,
        tensão: int,
        preço: float | int
    ) -> None:
        self.cor = cor
        self.preço = preço
        self.potência = potência
        self.tensão = tensão
        self.velocidade_máxima = 3

        # Inicia os valores de `corrente_atual_no_motor`, `velocidade` e
        # `ligado` chamando o método `desligar` direto no construtor
        self.desligar()

    def ligar(self, velocidade: int) -> None:
        if velocidade > self.velocidade_máxima or velocidade < 0:
            raise ValueError(
                f"Velocidade deve estar entre 0 e {self.velocidade_máxima}"
            )

        self.velocidade = velocidade
        self.ligado = True

        corrente_máxima = self.potência / self.tensão
        velocidade_percentual = velocidade / self.velocidade_máxima
        self.corrente_atual_no_motor = corrente_máxima * velocidade_percentual

    def desligar(self) -> None:
        self.ligado = False
        self.velocidade = 0
        self.corrente_atual_no_motor = 0