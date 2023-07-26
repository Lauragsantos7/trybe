import requests
from parsel import Selector

response = requests.get("http://books.toscrape.com/")

selector = Selector(text=response.text)
# print(selector) # saída: <Selector query=None data='<html lang="en-us" class="no-js"> <!-...'>

# para recuperar algum arquivo da página, deve-se inspecioná-la, ver qual o seu elemento css e usá-lo aqui para a recuperação. No site acima, tem  imagens com a tag img, que possuem a classe thumbnail
# selector.css é cada seletor css da pagina. 

# print(selector.css("img.thumbnail").getall())
# para pegar o primeiro item do array: print(selector.css("img.thumbnail").getall()[0])
# pegar o primeiro item que se encaixa na descrição:  print(selector.css("img.thumbnail").get())
# fazendo iterações com for:
# for thumbnail in selector.css("img.thumbnail").getall():
#     print(thumbnail)



# pegando um link - tag a:
# print(selector.css("div.image_container a").get()) # ou:
# print(selector.css("div.image_container a::attr(href)").get())

# pegando uma url da page:
thumb_url = selector.css("div.image_container a::attr(href)").get()
thumb_request = requests.get("http://books.toscrape.com/" + thumb_url)
thumb_selector = Selector(text=thumb_request.text)
book_title = thumb_selector.css("div.product_main h1")
print(book_title)

# Se fosse um array de urls:
# thumb_url = "div.image_container a::attr(href)"
# for url in selector.css(thumb_url).getall():
#   thumb_request = requests.get("http://books.toscrape.com/" + url)
#   thumb_selector = Selector(text=thumb_request.text)
#   book_title = thumb_selector.css("div.product_main h1")
#   print(book_title.get())


# buscando produtos e preços
titles = selector.css(".product_pod h3 a::attr(title)").getall()
# Estamos utilizando a::attr(title) para capturar somente o valor contido no texto do seletor

# Os preços estão no texto de uma classe price_color
# Que se encontra dentro da classe .product_price
prices = selector.css(".product_price .price_color::text").getall()

# Combinando tudo podemos buscar os produtos
# em em seguida buscar os valores individualmente
for product in selector.css(".product_pod"):
    title = product.css("h3 a::attr(title)").get()
    price = product.css(".price_color::text").get()
    print(title, price)


# pegar infos de várias páginas:

# Define a primeira página como próxima a ter seu conteúdo recuperado
URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = 'page-1.html'
while next_page_url:
    # Busca o conteúdo da próxima página
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)
    # Imprime os produtos de uma determinada página
    for product in selector.css(".product_pod"):
        # busca o preço e o título
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").get()
        print(title, price)
        # Busca o detalhe de um produto
        detail_href = product.css("h3 a::attr(href)").get()
        detail_page_url = URL_BASE + detail_href

        # Baixa o conteúdo da página de detalhes
        detail_response = requests.get(detail_page_url)
        detail_selector = Selector(text=detail_response.text)

        # Extrai a descrição do produto
        description = detail_selector.css("#product_description ~ p::text").get()
        print(description)
        # "Fatiamos" a descrição removendo o sufixo '...more' caso venha junto com o titulo do livro
        suffix = "...more"
        if description.endswith(suffix):
            description = description[:-len(suffix)]
            #  partir da versão 3.9 do Python, teremos uma função chamada removesuffix, que é equivalente à palavra[:-len(suffix)].
        print(description)
    # Descobre qual é a próxima página
    next_page_url = selector.css(".next a::attr(href)").get()