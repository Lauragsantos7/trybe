from faker import Faker


faker = Faker(locale='pt_BR') # parametro para habilitar o cpf

# garantindo previsibilidade: retorna sempre o mesmo resultado - posição zero
Faker.seed(0) # repare que usamos a classe 'Faker', e não a instância 'faker'
# o valor 0 é arbitrário, ou seja, você pode usar qualquer valor que quiser! A biblioteca Faker aceita valores dos tipos int, float, str, bytes e bytearray

print(faker.name())
print(faker.phone_number())
print(faker.email())
print(faker.cpf())

# saída: nomes aleatórios que representam nomes válidos

