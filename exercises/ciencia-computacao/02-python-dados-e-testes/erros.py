# Exceções: 
print(10 * (1 / 0))
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# ZeroDivisionError: division by zero
print(4 + spam * 3)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# NameError: name 'spam' is not defined
print('2' + 2)
# Traceback (most recent call last):
#   File "<stdin>", line 1, in <module>
# TypeError: can only concatenate str (not "int") to str

# Para tratar execeções, utilizamos o comando try e except: Se nenhua execeção ocorrer, o cláusula except é ignorada e a execução da intrução try é finalizada

while True:
    try:
        x = int(input("Por favor digite um número inteiro: "))
        break
    except ValueError:
        # 'ValueError' é a exceção que ocorre quando a função int() recebe um  valor que não pode ser traduzido para número inteiro
        print("Oops! Esse não era um número inteiro. Tente novamente...")

# ao manipular arquivos, podemos usar o finally ou else para fechá-lo. O finally permite a implementação de ações de limpeza, que sempre devem ser executadas independente da ocorrênica de ações. Já o else, ocorre sempre que o try for bem sucedido. 
try:
    with open("arquivo.txt", "r") as file:
        print(file.read())
except FileNotFoundError:
    # será executado caso haja a exceção 'FileNotFoundError'
    print("Arquivo inexistente")
else:
    # será executado se tudo ocorrer bem no try
    print("Arquivo manipulado e fechado com sucesso")
finally:
    # será sempre executado, independentemente de erro
    print("Fim da tentativa de ler o arquivo")