# events/views.py
from django.shortcuts import render, get_object_or_404
from django.http import Http404
from events.models import Event
# para rendereizar os eventos no template

def index(request):
    context = {"company": "Trybe", "events": Event.objects.all()}
    return render(request, 'home.html', context)

# Prontinho! A função acima usa o método render do Django para renderizar o template passado como segundo parâmetro home.html. O primeiro parâmetro, request, representa a requisição feita pela pessoa que usa a aplicação.

# O contexto pode conter qualquer tipo de dado, inclusive objetos do tipo QuerySet que são retornados quando fazemos uma consulta ao banco de dados. 

def about(request):
    return render(request, 'about.html')

def event_details(request, event_id):
    try:
        event = get_object_or_404(Event, id=event_id)
        return render(request, 'details.html', {'event': event})
    except Http404:
        return render(request, '404.html')


# Na função event_details, o parâmetro event_id será recebido e utilizado para resgatar o evento específico que se quer renderizar. Esse resgate é feito com o uso da função get_object_or_404(), essa função recebe dois parâmetros: o primeiro é o modelo a ser resgatado e o segundo indica a busca a ser feita. No exemplo acima, é buscado por um Event cujo id é igual ao event_id recebido como parâmetro. Caso o evento não seja encontrado, será levantada uma exceção do tipo Http404.