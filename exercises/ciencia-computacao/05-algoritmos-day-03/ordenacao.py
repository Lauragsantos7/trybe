# *Selection Sort*
def search(numbers, start, end):
    min_element = numbers[start]
    min_element_index = start

    for i in range(start + 1, end): # Busca pelo menor elemento
        if numbers[i] < min_element:
            min_element = numbers[i]
            min_element_index = i

    return min_element_index # Retorna a posição do menor elemento

def selection_sort(numbers):
    n = len(numbers)

    for index in range(n - 1): # Início da iteração para ordenar os N-1 elementos
        min_element_index = search(numbers, index, n)
        numbers[index], numbers[min_element_index] = numbers[min_element_index], numbers[index] # Trocando os elementos utilizando desempacotamento.

    return numbers


# *Insertion Sort*
def insertion_sort(numbers):
    n = len(numbers) # Quantidade de elementos na lista

    for index in range(1, n): # Começaremos a ordenar pelo segundo elemento
        key = numbers[index] # Pegamos o segundo elemento e o definimos como chave

        new_position = index - 1 # Tomamos a posição anterior para iniciar a comparação
        while new_position >= 0 and numbers[new_position] > key: # Enquanto a chave for menor, remaneja o elemento para frente
            numbers[new_position + 1] = numbers[new_position] # Remaneja o elemento
            new_position = new_position - 1

        numbers[new_position + 1] = key # Insere a chave na posição correta

    return numbers

numbers = [7, 5, 9, 2, 6, 8]
print(insertion_sort(numbers))




# **Buble Sort*

def bubble_sort(numbers):
    n = len(numbers) # Quantidade de elementos na lista

    for ordered_elements in range(n - 1): # Precisamos ordenar n-1 elementos
        for item in range(0, n - 1 - ordered_elements): # Vamos percorrer até o elemento anterior ao ordenado
            if numbers[item] > numbers[item + 1]: # se um elemento for maior, flutuamos ele para cima
                current_element = numbers[item]
                numbers[item] = numbers[item + 1]
                numbers[item + 1] = current_element
                
                # Lembra da troca com desempacotamento?
                # numbers[item], numbers[item + 1] = numbers[item + 1], numbers[item]
    return numbers

numbers = [7, 5, 9, 2, 6, 8]
print(bubble_sort(numbers))