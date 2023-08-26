# nums = [3, 2, 5, 4, 1, 2, 3, 1, 3, 4, 1]
# número que aparece mais vezes :
def count(nums):
    count = {}
    most_frequent = nums[0]

    for num in nums:
        if num not in count: # na primeira vez, recebe 1
            count[num] = 1
        else: count[num] += 1 # a cada vez que encontra o elemento novamente, acrescenta 1

        if count[num] > count[most_frequent]:
            most_frequent = num
    return most_frequent



# separar palavras de acordo com a sua letra inicial

def screening(text):
    screen = {}
    for word in text:
        first_char = word[0] # primeira letra
        if first_char not in screen:
            screen[first_char] = [word]
        else:
            screen[first_char].append(word)
    return screen




# um tupla de qual fruta aparece mais e a quantidade

def find_mos_fruit(fruits: 'list[str]') -> 'tuple[str, int]':
    fruits_counts = {}
    most_common_fruit = ""
    highest_count = 0

    for fruit in fruits:
        if fruit in fruits_counts:
          fruits_counts[fruit] += 1
        else:
            fruits_counts[fruit] = 1

        if fruits_counts[fruit] > highest_count:
            most_common_fruit = fruit
            highest_count = fruits_counts[fruit]

    return most_common_fruit, highest_count



# uma tupla com dois nomes de pessoas na fila. Sabe-se que o da direita está atrás do da esquerda, mas não se sabe a ordem completa. Como descobrir?

def get_order(orders: 'list[tuple[str, str]]') -> 'list[str]':
    # transformar a lista em dicionário, em que a primeira pessoa é a chave e a segunda e o valor
    orders_map = {pair[0]: pair[1] for pair in orders}
    
    # aqui, a primeira pessoa é o valor e a segunda é a chave (para melhorar a complexidade da pesquisa)
    inv_orders_map = {pair[1]: pair[0] for pair in orders}

    next_in_line = ""
    for person in orders_map:
        if person not in inv_orders_map:
          # se a pessoa não estiver no lado direito, ou seja, não estiver atras de ngm, qr dizer que ela é a primeira pessoa da fila:
          # pesqusias em um dic na sua 'chave' é o(1), no 'valor' é o(n). O correto é pesquisar pela chave, por isso a chave é posição 1 e o valor é posição 0 na const inv_orders_map
            next_in_line = person
    result = [next_in_line]

    while next_in_line in orders_map:
        result.append(orders_map[next_in_line])
        next_in_line = orders_map[next_in_line]

    return result
    




orders = [
        ("Fernanda", "Rafa"),
        ("Fran", "Daniel"),
        ("Mirian", "Gabriel"),
        ("Matheus", "Yasmin"),
        ("Geovani", "Fernanda"),
        ("Rafa", "Fran"),
        ("Daniel", "Mirian"),
        ("Gabriel", "Matheus"),
    ]

print(get_order(orders))