import requests
from bs4 import BeautifulSoup

url = "https://quotes.toscrape.com"
page = requests.get(url)
html_content = page.text

# Cria uma instância do objeto Beautiful Soup e usa o parser de HTML nativo
# do Python
soup = BeautifulSoup(html_content, "html.parser")


# Utiliza o método prettify para melhorar a visualização do conteúdo
print(soup.prettify())


# um objeto do tipo Tag corresponde a uma tag XML ou HTML do documento original. Toda tag possui um nome acessível através de .name. Por exemplo, quando vemos <header>, ele é um elemento do tipo tag e o nome dessa tag é header.
# acessando a tag 'title'
title = soup.title

# retorna o elemento HTML da tag
print(title)

# o tipo de 'title' é tag
print(type(title))

# o nome de 'title' é title
print(title.name)

# acessando a tag 'footer'
footer = soup.footer

# acessando o atributo classe da tag footer
print(footer['class'])

# Uma string corresponde a um texto dentro de uma tag e esse texto fica armazenado na classe NavigableString.

# Acessando a string de uma tag
print(title.string)

# Verificando o tipo dessa string
print(type(title.string))


# buscando na árvore:
# Imprime todas as ocorrências da tag "p" da página ou uma lista vazia,
# caso nenhum elemento corresponda a pesquisa
print(soup.find_all("p"))

# Imprime o elemento com o id especificado ou "None",
# caso nenhum elemento corresponda a pesquisa
print(soup.find(id="quote"))

# Imprime todo o texto da página
print(soup.get_text())

# Imprime todas as "divs" que possuam a classe "quote" ou uma lista vazia,
# caso nenhum elemento corresponda a pesquisa
print(soup.find_all("div", {"class": "quote"}))