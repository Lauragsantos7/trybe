# events/models.py
from django.db import models


class Event(models.Model):
    TYPE_CHOICES = (
        ('C', 'Conference'),
        ('S', 'Seminar'),
        ('W', 'Workshop'),
        ('O', 'Other'),
    )

    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateTimeField()
    location = models.CharField(max_length=200)
    event_type = models.CharField(max_length=50, choices=TYPE_CHOICES)
    is_remote = models.BooleanField(default=False)
    image = models.ImageField(upload_to='events/img', blank=True)

    def __str__(self): # O método __str__ é sobrescrito para indicar como será a visualização do objeto
        return f'{self.title} - {self.date} - {self.location}' # Título do evento - Data - Local


# A tabela event ao ser criada no banco terá 8 colunas, sendo elas:

# id: inteiro e chave primária única pro evento (que não precisa ser explicitamente declarado no modelo);
# title: texto com no máximo 200 caracteres;
# description: texto sem limitação de caracteres;
# date: data e hora do evento;
# location: texto com no máximo 200 caracteres;
# event_type: texto com no máximo 50 caracteres e que só pode assumir os valores C, S, W ou O (ao usar o parâmetro choices, o Django faz a validação se o valor inserido é um dos valores permitidos);
# is_remote: booleano (True ou False) que indica se o evento é remoto ou não;
# image: imagem que será salva na pasta {CAMINHO-DE-MÍDIA}/events/img (o caminho de mídia pode ser definido no arquivo settings.py)