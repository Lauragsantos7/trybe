import area


PEOPLE_PER_SQUARE_METER = 2  # numero de pessoas por metro quadrado em média
FIELD_LENGTH = 60  # em metros
FIELD_WIDTH = 45  # em metros
people_at_concert = (
    area.rectangle(FIELD_LENGTH, FIELD_WIDTH) * PEOPLE_PER_SQUARE_METER
)
print("Estão presentes no show aproximadamente", people_at_concert, "pessoas.")

# Os nossos valores de teste estão sendo exibidos quando importamos o módulo. Mas não queremos que isso aconteça.

# Para corrigir, podemos acrescentar uma condicional ao módulo para somente exibir esses valores de teste quando o módulo for executado como script.

# A variável __name__ é utilizada pelo interpretador Python para identificar o arquivo que esta sendo executado e seu valor será "__main__" quando invocamos um módulo como script.
# if __name__ == "__main__":
#     print("Área do quadrado:", square(10))
#     print("Área do retângulo:", rectangle(2, 2))
#     print("Área do círculo:", circle(3))