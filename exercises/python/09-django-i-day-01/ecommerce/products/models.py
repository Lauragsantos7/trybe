# ecommerce/products/models.py

from django.db import models


class Product(models.Model):
    name = models.CharField(max_length=100)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    amount = models.IntegerField(default=0)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    image = models.ImageField(
      upload_to="media/products", null=True, blank=True
    )

    # https://docs.djangoproject.com/en/3.2/ref/models/fields/

# Perceba que utilizamos os tipos de dados do Django para definir os campos do nosso modelo. Aqui utilizamos:

# CharField para campos de texto curtos, passando a opção max_length para definir o tamanho máximo do campo;
# DecimalField para campos de números decimais, passando as opções max_digits e decimal_places para definir o número máximo de dígitos e o número de casas decimais, respectivamente;
# IntegerField para campos de números inteiros, passando a opção default para definir um valor padrão para o campo;
# TextField para campos de texto longos;
# DateTimeField para campos de data e hora, passando as opções auto_now_add e auto_now para definir que o campo deve ser preenchido automaticamente com a data e hora atual quando o objeto for criado e atualizado, respectivamente;
# ImageField para campos de imagens, passando as opções upload_to para definir o diretório em que as imagens serão salvas, null=True para permitir que o campo seja nulo e blank=True para permitir que o campo seja vazio.