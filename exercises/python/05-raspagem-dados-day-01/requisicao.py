import requests

response = requests.get("https://www.betrybe.com")
# print(response.status_code)

# print(response.headers["Content-Type"]) # saida: text/html; charset=utf-8

# conteúdo de texto do site:
# print(response.text)

# qual o modelo de requsição:
response_pag2 = requests.post("http://httpbin.org/post", data="some content")

# a página utilizada no exemplo é uma pagina para validações de status e possíveis erros
# print(response_pag2.text)
response_pag2_get = requests.get("http://httpbin.org/get", headers={"Accept": "application/json"})

# print(response_pag2_get.text)


response_pg2_get = requests.get("http://httpbin.org/get")
# print(response_pg2_get.json())

# exceção: 
response_exception = requests.get("http://httpbin.org/status/404")
# print(response_exception.raise_for_status())

