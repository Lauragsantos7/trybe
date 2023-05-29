# JSON é um formato de texto mto utilizado pra integração de sistemas. Baseado num sobcojunto de regras JS, embora seja independente de linguagem
import json

with open("exemplojson.json") as dados_file:
    # print(dados_file.read())

    # para usar como objeto e podr pegar cada elemento separadamente:
    print(json.load(dados_file))


# exemplo csv:
# import csv
# with open("nome-do-arq.csv") as dados_file:
    # dados_list = csv.DictReader(dados_file)
    # for dado in dados_list:
        # print(dado)
