meu_numero = 0
while meu_numero < 42:
    meu_numero += int(input("Digite seu número: "))
# retorna sempre variável do tipo string. é necessário converter:'int()'
    print(meu_numero)

print("A soma de seus números superou 42")