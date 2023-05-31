def countdown(n):
    if (n == 0):
      print('Fim')
    else:
        print(n)
        countdown(n - 1)  # chamada recursiva

countdown(5)

def factorial(n):
    if n <= 1: # caso base
        return 1
    else:
        return n * factorial(n - 1) # caso recursivo
    


def sum(count):
    if count == 0:
        return 0
    # não pode ter string no retorno que dá erro 
    else:
        return count + sum(count -1)

print(sum(5))

