class Motocicleta:
    def __init__(self, vel_max):
        self.vel_max: vel_max

class Caminhao:
    def __init__(self, vel_max):
      self.vel_max = vel_max



def print_vel_max(veiculo):
   if isinstance(veiculo, Motocicleta):
        print(f"A velocidade máxima do veículo é de {veiculo.vel_max} km/h")
   else:
        raise TypeError("veículo errado")