import requests
import time

for _ in range(2):
              response = requests.get("https://www.cloudflare.com/rate-limit-test")
              #print(response.status_code)
              # time.sleep(2) # colocando 2 segundos entre uma req e outra:


page_test = "https://httpbin.org"

response_pag_2 = requests.get(f'{page_test}/delay/10')
# print(response_pag_2) # vai ter um delay de 10seg pq foi definido no

# quando o recurso demora mto a responder:
try:
    response_pag_ = requests.get(f"{page_test}/delay/6", timeout=2)
    # se demorar mais de 2seg pra responder, entra na exceção  e refaz a request:
except requests.ReadTimeout:
    response_pag_ = requests.get(f"{page_test}/delay/1")
finallly: print(response.status_code)
