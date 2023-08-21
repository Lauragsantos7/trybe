from jinja2 import TemplateNotFound, Environment
from dict_loader import DictLoader

templates = {
    'index.html': '<h1>Um template sem exceções!</h1>',
    'about.html': '<p>Este é um exemplo de template Jinja2.</p>'
}

try:
    loader = DictLoader(templates)
    environment = Environment(loader=loader)
    template = environment.get_template('random.html')
except TemplateNotFound:
    print('Erro: Template não encontrado')
except Exception as e:
    print("Erro: ", str(e))
else:
    print(template.render())
finally:
    print("Fim do programa.")


# nós utilizamos a classe DictLoader que criamos anteriormente para criar um loader do templates que criamos neste arquivo e após criarmos um ambiente com esse loader, tentamos acessar um template “random.html” inexistente no nosso ambiente.