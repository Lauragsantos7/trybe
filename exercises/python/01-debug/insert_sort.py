def insertion_sort(array):
    for i in range(1, len(array)):
        current_value = array[i]
        position = i

        while position > 0 and array[position - 1] > current_value:
            array[position] = array[position - 1]
            position -= 1

        array[position] = current_value
        # breakpoint aqui
# clicar na bolinha vermelha como botão direito e selecionar a opção editar com a expressão i>=5. O breakpoint só vai funcionar quedo i for maior ou igual a 5
    return array


def main():

    array = [23, 423, 1, 54, 8, 980, 45, 768, 34, 55, 88, 99, 100, 234, 567]

    sorted_array = insertion_sort(array)

    print(f"Array ordenado: {sorted_array}")


if __name__ == "__main__":
    main()
