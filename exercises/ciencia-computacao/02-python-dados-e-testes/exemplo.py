import sys
# quando executamos um script e adiconamos os parametros, os mesmo estarão disponíveis atraves de uma variável chamada sys.arv, que é rpeenchida sem que preciseos fazer nada. Na prática, podemos escrever o conteúdo abaixo em um arq e passar alguns parametros ao executá-lo


if __name__ == "__main__":
    for argument in sys.argv:
        print("Received -> ", argument)


# passando os parametros: executar o comando: python3 exemplo.py 2 4 "teste"

# É possível tbm modificar a saída padrão de erros:
err = "Arquivo não encontrado"
print(f"Erro aconteceu: {err}", file=sys.stderr)


# imprimir nome da pessoa usuária na vertical:
for name in input('Digite seu nome: '): print(name)

# somando números num mesmo input:


# desempacotamento de valores: Separa os valores recebidos em variáveis diferentes
a, b = "cd"
print(a)  # saída: c
print(b)  # saída: d

head, *tail = (1, 2, 3) # Quando um * está presente no desempacotamento, os valores são desempacotados em formato de lista.
print(head)  # saída: 1
print(tail)  # saída: [2, 3]

# manipulação de arquivos:
characteres_file = open("meus-personagens-favoritos.txt", mode="w")
# mode: ler, escrever, editar...
characteres_file.write("Tio Patinhas\n")
characteres_file.write("Neo\n")
characteres_file.write("Homem Aranha\n")

print("Batman", file=characteres_file)

more_characters = ['Sonho\n', 'DeadPool\n']
characteres_file.writelines(more_characters)
# writelines: para escrever várias linhas
characteres_file.close()
# roda o arquivo com python3 exemplo.py e depois cat NomedoArquivo.txt

# Criamos um contexto, limitando o escopo onde o arquivo está aberto.
# O uso do "as" aqui é somente para atribuir o valor utilizado no contexto à variável file
with open("arquivo.txt", "w") as file:
    # como estamos DENTRO do contexto, verificamos que o arquivo está ABERTO
    # através do atributo booleano 'closed' (file.closed = False)
    print(file.closed)
# como estamos FORA do contexto, o arquivo está FECHADO (file.closed = True)
print(file.closed)

# um arquivo é iterável e pode ser percorrido em um laço de repetição:
# escrita
with open("arquivo.txt", "w") as file:
    LINES = ["Olá\n", "mundo\n", "belo\n", "do\n", "Python\n"]
    file.writelines(LINES)

# leitura
with open("arquivo.txt", "r") as file:
    for line in file:
        print(line)  # não esqueça que a quebra de linha também é um caractere da linha