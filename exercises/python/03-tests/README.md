# Unittest e faker

Unittest - para criar mocks de artefatos externos e examinar seu comportamento de forma mais poderosa e organizada

É lib nativa do Pỳthon

Criar amb: python -m venv .venv
ativar: source .venv/bin/activate

**Criando mock com unittest** explicado no arquivo de testes

**Cobertura de testes**
Pytest-cov: pip install pytest-cov==4.0.0

Plugins para o pytest: https://docs.pytest.org/en/7.3.x/reference/plugin_list.html

Conferir a cobertura: pytest --cov ou python3 -m pytest --cov

Para detalhar a cobertura de teste, user --cov nome_do_modulo

Para saber qual lnha não foi executada: pytest --cov analyzer --cov-report=term-missing


**Criando dados falsos**
Pode usar a lib FAKER: https://faker.readthedocs.io/en/master/

pip install faker==18.9.0
importar no código: from faker import Faker

*Garantindo previsibilidde com Seed*

A seed (semente) é um valor que serve como base para a geração de números aleatórios. Se a mesma seed for usada, teremos sempre a mesma sequência de resultados. Por padrão, o Faker usa o timestamp atual do sistema e por isso cada execução resulta em valores diferentes.


Exemplo: Faker.seed(0)\
o valor 0 é arbitrário, ou seja, você pode usar qualquer valor que quiser! A biblioteca Faker aceita valores dos tipos int, float, str, bytes e bytearray

Cada gerador de informações é chamado de provider. 

faker.email(): cria um e-mail falso;\
faker.password(): cria uma senha falsa;\
faker.address(): cria um endereço falso;\
faker.credit_card_number(): cria um número de cartão de crédito falso;\
faker.phone_number(): cria um número de telefone falso;\
faker.company(): cria um nome de empresa falso;
faker.date(): cria uma data falsa;\
faker.cpf(): cria um CPF falso.\


**https://faker.readthedocs.io/en/master/providers.html**


Se, em seu cenário de testes, for importante usar uma seed diferente, será necessário criar uma outra fixture especial chamada faker_seed que retorna o valor desejado. Como se deseja que os todos os testes aproveitem a mesma fixture faker_seed, é possível configurá-la no arquivo conftest.py

# Arquivo: tests/conftest.py\
import pytest\


@pytest.fixture(scope="session", autouse=True)\
def faker_seed():\
    return "Trybe"\

Obs.: Passar para uma fixture autouse=True faz com que ela seja utilizada pelas funções de teste mesmo que elas não recebam a fixture explicitamente como parâmetro.

Assim como foi feita a configuração da seed, também é possível configurar o locale criando uma fixture especial chamada faker_locale:
# Arquivo: tests/conftest.py

@pytest.fixture(scope="session", autouse=True)
def faker_locale():
    return "pt_BR"



**Configurando o debugger**

Abrir o menu de debug do VS Code (atalho Ctrl+Shift+D ou Cmd+Shift+D no Mac).
Clicar em “create a launch.json file” (ou “crie um arquivo launch.json”, no VS Code em português).
Escolher a opção “Python”.
Escolher uma das opções de configuração disponíveis.

REcomendado no course: Python file 
add configuration
Python -> Module -> pytest
