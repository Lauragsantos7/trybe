import unittest
from app import app
from tests.mocks.home import project_cards
from tests.mocks.home import project_cards, project_titles
from tests.mocks.home import project_cards, project_titles, unknown_page


class TestHome(unittest.TestCase):
    def setUp(self):
        test_app = app.test_client()
        self.response = test_app.get('/')

# Dentro da classe TestHome, há um método chamado setUp(). Esse método é executado antes de cada caso de teste e é usado para configurar o ambiente de teste. Dentro do método setUp(), criamos uma instância de app.test_client(), essa instância nos permite simular requisições à aplicação. Em seguida, fazemos uma solicitação GET à rota principal (/) da aplicação através da instância de app.test_client(), armazenando a resposta retornada em self.response. Essa linha simula o acesso à página inicial da aplicação e captura a resposta retornada pelo servidor.


def test_status_response(self):
        self.assertEqual(self.response.status_code, 200)

# verificar se foram criados containers para cada um dos nossos 3 projetos
def test_quantity_of_projects(self):
        self.assertEqual(self.response.text.count(project_cards), 3)


# testar se os títulos dos 3 projetos estão sendo renderizados
def test_projects_titles(self):
        self.assertTrue(project_titles[1] in self.response.text)
        self.assertTrue(project_titles[2] in self.response.text)
        self.assertTrue(project_titles[3] in self.response.text)

def test_unknown_route(self):
        response = app.test_client().get("/unknown")
        self.assertEqual(response.status_code, 404)
        self.assertTrue(unknown_page['title'] in response.text)
        self.assertTrue(unknown_page['text'] in response.text)