import pytest
from app import app


@pytest.fixture
def client():
    return app.test_client()


@pytest.fixture
def response(client):
    return client.get("/")

# definimos 2 fixtures (funções que rodam antes e/ou depois dos testes) para o nosso teste client que nos permite simular requisições à aplicação e response que faz a requisição para a aplicação e nos fornece o retorno dessa requisição.