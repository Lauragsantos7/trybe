from jinja2 import Environment, FileSystemLoader
from custom_filters import convert_date, replace_text

# Configurando um loader
loader = FileSystemLoader('filters') # diretório em que o template está

# O FileSystemLoader é uma classe fornecida pelo Jinja2 que atua como um loader. Essa classe tem a finalidade de carregar o diretório onde os templates estão localizados, templates os quais serão posteriormente utilizados pela função get_template()

# Criando um ambiente Jinja2
environment = Environment(loader=loader)

environment.filters['convert_date'] = convert_date
# Adicionamos o filtro customizado ao ambiente, poderia ter sido dado qualquer nome ao nosso filtro
# O nome que for passado dentro dos colchetes como uma string, é o nome que irá ser chamado no template

environment.filters['replace_text'] = replace_text
# Adicionamos o filtro customizado ao ambiente, poderia ter sido dado qualquer nome ao nosso filtro
# O nome que for passado dentro dos colchetes como uma string, é o nome que irá ser chamado no template


# Carrega um template a partir de um arquivo
template = environment.get_template('filters.html')


# Cria um contexto
data = {
    'name': 'a primeira letra vai ficar maiúscula',
    'to_upper': 'todas as letras vão ficar maiúsculas',
    'to_lower': 'TODAS AS LETRAS VÃO FICAR MINÚSCULAS',
    'my_list': [0, 1, 2, 3, 4, 5],
    'text': 'Esse texto irá ser truncado',
    'date': '2023-05-21',
}

# Carregando um template e renderizando com um contexto
output = template.render(data)

# Imprime o resultado
print(output)
