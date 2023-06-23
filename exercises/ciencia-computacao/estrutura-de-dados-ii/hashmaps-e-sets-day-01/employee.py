class Employee:
    def __init__(self, id_num, name):
        self.id_num = id_num
        self.name = name


class HashMap:
    def __init__(self):
        # iniciar a lista com 10 posições, uma lista de listas para armazenar mais de um dado dentro de cada elemento
         self._buckets = [[] for i in range(10)]

    def get_address(self, id_num):
        # o endereço é o id divido por 10 (escolha do programador de onde guardar na memória o elemento do endereço)
        return id_num % 10

    def insert(self, employee):
        address = self.get_address(employee.id_num)
        self._buckets[address].append(employee)

        # acessr o dado de interesse:

    def get_value(self, id_num):
        address = self.get_address(id_num)
        for item in self._buckets[address]:
            if item.id_num == id_num:
                return item.name
        return None

    # consultar se determinada chave existe:
    def has(self, id_num):
        address = self.get_address(id_num)
        return self._buckets[address] is not None
    
    # só funciona se tiver apenas um item em cada posição:
    def update_value(self, id_num, new_value):
        address = self.get_address(id_num)
        employee = self._buckets[address]
        employee.name = new_value


if __name__ == "__main__":
    employees = [(14, "name1"), (23, "name2"), (10, "name3"), (9, "name4")]
    registry = HashMap()

    for id_num, name in employees:
        employee = Employee(id_num, name)
        registry.insert(employee)

    print(registry.get_value(23))
