class Carro:

    def identificar(self, model, brand, year, color) -> str:
        # sem o self não funciona
        print(f'Meu carro é um {model}, da {brand}. Ele é do ano {year} e tem a cor {color}')

 
my_car = Carro()

# definindo valores aos atributos:
my_car.year = 2022
print(my_car.year) 
# my_car.brand = 'Volks'
# my_car.model = 'Gol'
# my_car.color = 'azul'

my_car.identificar('gol', 'Volks', 2022, 'azul')
