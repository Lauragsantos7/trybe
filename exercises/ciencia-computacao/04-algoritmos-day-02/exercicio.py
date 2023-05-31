# Crie um algoritmo não recursivo para contar quantos números pares existem em uma sequência numérica (1 a n).

def countNumber():
    numbers = [1, 2, 3, 4, 5, 6, 8]
    count = 0
    for numb in numbers:
      if(numb % 2 == 0):
        count += 1
    return count

print(countNumber())


# 2 -Transforme o algoritmo criado acima em recursivo.

def counter(n):
   if(n == 1):
      return 0
   elif n % 2 == 0:
      return 1 + counter(n-1)
   else: return counter(n-1)
  
   
print(counter(8))

numbersList = [2, 3, 8, 10, 28, 13, 25]
print(max(numbersList))

# fazendo de forma recursiva:
def maxNumber(array, length, index):
   if(length == 0):
      return array[index]
   if(array[length - 1]> array[index]):
      return maxNumber(array, length -1, length-1)
   else: return maxNumber(array, length -1, index)



print(maxNumber(numbersList, len(numbersList), 0))

# Escreva um algoritmo recursivo para encontrar o máximo divisor comum (mdc) de dois inteiros.

def mdc(number1, number2):
   if(number2 == 0):
      return number1
   return mdc(number2, number1 % number2)

print(mdc(10,8))