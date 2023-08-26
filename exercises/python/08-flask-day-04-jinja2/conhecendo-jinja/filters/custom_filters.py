# Os filtros customizados (ou personalizados) devem ser implementados como funções, e também devem receber pelo menos um parâmetro, que será a informação passada na chamada do filtro dentro do template.

from datetime import datetime

def convert_date(date):
    data_obj = datetime.strptime(date, "%Y-%m-%d")
    return data_obj.strftime("%d/%m/%Y")


# mais de um parâmetro:
def replace_text(string, old_text, new_text):
    return string.replace(old_text, new_text)

# A função replace_text tem a finalidade de substituir uma palavra ou trecho por outra palavra ou trecho. Em outras palavras, ela substitui um texto antigo (old_text) por um texto novo (new_text) e retorna a string modificada como resultado.