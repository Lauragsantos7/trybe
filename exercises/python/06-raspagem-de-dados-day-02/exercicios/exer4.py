# Com o Beautiful Soup, faça a extração de todos os links da página https://pt.wikipedia.org/wiki/Rock_in_Rio.


import requests
from bs4 import BeautifulSoup

url = "https://pt.wikipedia.org/wiki/Rock_in_Rio"
page = requests.get(url)
html_content = page.text

# Cria uma instância do objeto Beautiful Soup e usa o parser de HTML nativo
# do Python
soup = BeautifulSoup(html_content, "html.parser")

print(soup.find_all("link"))


# busca na árvore: https://www.crummy.com/software/BeautifulSoup/bs4/doc.ptbr/#buscando-na-arvore

# resultado course:
html = requests.get("https://pt.wikipedia.org/wiki/Rock_in_Rio")

URL = "https://pt.wikipedia.org"
html = requests.get(f"{URL}/wiki/Rock_in_Rio")

page = html.text

def create_url(url: str, urn: str) -> str:
  url = url[:-1] if url[-1] == "/" else url
  urn = urn[1:] if urn[0] == "/" else urn
  return f"{url}/{urn}"


def transform_wiki_links(link: str) -> str:
  return link if link[:4] == "http" else create_url(URL, link)


links = [
      transform_wiki_links(anchor["href"])
      for anchor in soup.findAll("a")
      if anchor.get("href") is not None
  ]

for link in links:
      print(link)
