from jinja2 import BaseLoader, Environment, TemplateNotFound

class DictLoader(BaseLoader):
    def __init__(self, templates):
        # recece um dicionário de templates que mapia os  nomes dos templates para seus conteúdos
        self.templates = templates

# implemeta-se o método concreto get_source para carregar o template a partir do dicionário
    def get_source(self, environment, template):
        if template in self.templates:
            source = self.templates[template]
            # se o template solicitado estiver presente no dicionário devemos retornamos uma tupla contendo:
            return source, None, lambda: False
        raise TemplateNotFound(template)
    # a expressão raise utilizada para lançar uma exceção intencionalmente



# o conteúdo do template;
# nenhuma informação (None) de código-fonte adicional;
# e uma função lambda para indicar que o template não é um recurso atualizável.
        return

# Uma função lambda em Python é uma função anônima que pode ser definida de forma concisa e em uma única linha. Ela é útil quando você precisa de uma função simples que não será reutilizada em outros lugares do seu código.


# Configurando o loader personalizado
templates = {
    'index.html': '<h1>Um template usando {{ nome }}!</h1>',
    'about.html': '<p>Este é um exemplo de template Jinja2.</p>'
}
loader = DictLoader(templates)

# Criando um ambiente Jinja2
environment = Environment(loader=loader)

# Carregando um template e renderizando com um contexto
template = environment.get_template('index.html')
output = template.render(nome='BaseLoader')
print(output)
