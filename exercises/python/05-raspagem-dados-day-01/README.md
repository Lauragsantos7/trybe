# Raspagem de dados:
Técnica computacional para extrair dados provenientes de um serviço ou aplicação .estruturando-os em bancos de dados, planilhas ou outros formatos
**passo a passo de efetuar uma request em um site:**
1 - instalar lib request:
python3 -m pip install requests

Quando a página retorna o status 429, é erro de exceço de requisiçoes, nesse caso, deve-se esperar um tempo para normalizar. 
Uma dica para evitar isso, é colocar as req um pouco espaçadas para não atingir esse limite

python3 -m pip install parsel
lib para recuperar e ler as respostas às requests

REGEX 
para fazer limpeza dos dados que são retornado, por ex, retirar o simbolo antes do valor, podemos usar expressões regulares.

podemos substituir o método getall pelo método re, ou o método get por re_first. Ambos, além de recuperar valores, aplicarão a expressão regular sobre aquele valor.
prices = selector.css(".product_price .price_color::text").re(r"£\d+\.\d{2}")
print(prices)\

digitar help(str) no terminal iterativo para ler a doc sobre limpeza de dados em Python

https://scrapy.org/ ferramente para raspagem de dados

Jupyter: interface gráfica que permite a execução de código célula a célula