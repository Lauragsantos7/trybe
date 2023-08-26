# Doctest e Pytest

**Doctest**

python3 -m doctest main.py

Doctestes - testes na documentação

Se baseiam na capacidade de criar exemplos em docstrings. O módulo já vem dentro do Python, roda todos os exemplos encontrados em docstrings como se fossem testesm garantindo que funcionem

Vantagens:\
Fornecer uma forma fácil e rápida de, ao mesmo tempo, criar testes e documentar como uma função deve ser usada, já que a documentação e os testes estão no mesmo lugar.\
Facilitar o desenvolvimento orientado a testes (TDD), visto que os exemplos ficam logo na função, dispensando a necessidade de outro arquivo ou a criação de uma suíte de testes complexa.

são mais adequados para testar funções simples que tenham uma entrada e uma saída bem definidas, e não são tão bons para testes mais complexos ou para testar funções que dependem de dados externos ou aleatórios.

**Pytest**

Configurar: 
- criar ambiente virtual: python3 -m venv .venv
- ativá-lo: source .venv/bin/activate
- instalar o pip: pip install pytest==7.3.1
 
Os arquivos de testes devem se iniciar ou terminar com test_ ou _test.py\
Os testes em si devem ser funções que comecem com test_ \
Rodar o teste de forma mais verbosa: pytest -vv

**pytest rodando dosctring**:
pytest --doctest-modules -vv

Configurando VS code:


abrir seu arquivo de configurações por meio do atalho F1 e digitar no campo que aparece: “Preferences: Open User Settings (JSON)

{ // Chave de abertura das configurações. Apague caso vá copiar para um arquivo existente
    "python.testing.pytestEnabled": true, // Habilita o pytest
    "python.testing.pytestArgs": [ // Argumentos do pytest
        "--doctest-modules", // Procura por doctests em arquivos .py
        "-vv", // Aumenta o nível de verbosidade
    ],
} // Chave de fechamento das configurações.

Você pode abrir a janela de testes por meio do menu View -> Testing

Configurar putest em projetos complexos: \
https://www.youtube.com/watch?v=v6tALyc4C10

# Fixtures

São funções que rodam antes e ou depoiis dos testes, gerlaemnte criando um recurso que o teste precisa para rodar ou fazendo uma limpeza após a execução do teste.

Existem 5 escopos das fixtures:

- function (função): é inicializada a cada função de teste que a utiliza;
- module (módulo): é inicializada uma vez para cada módulo de teste que a utiliza;
- class (classe): é inicializada uma vez para cada classe de teste que a utiliza;
- package (pacote): é inicializada apenas uma vez para cada diretório que contém arquivos de teste;
- session (sessão): é inicializada apenas uma vez, no início da execução da suíte de testes.

O escopo padrão é o de função. Par mudar o escopo, basta passar o escopo desejado como argumento para o parâmetro scope do decorador pytest.fixture, por exemplo @pytest.fixture(scope="module")

**Fixtures builtin**
fixtures úteis prontas para uso:

*Para os exemplos em código, considere que eles devem ser colocados em um arquivo fixtures_test.py.*

**Capsys** captura as saídas padrão e de erro em um teste
 
**Monkeypatch**    é usada para alterar o comportamento de funções ou métodos, permitindo a simulação de condições específicas para testes. Ela permite o acesso ao objeto “patch” que pode ser utilizado para modificar objetos ou módulos importados, bem como variáveis de ambiente, argumentos de linha de comando e outros

pode usar a monkeypatch para simular a entrada da pessoa usuária sem precisar realmente digitar.  Para fazer isso, você pode usar o método setattr da fixture monkeypatch para substituir o objeto input da biblioteca padrão por uma função que retorna uma string de entrada simulada. Em seguida, quando a função testada chamar a função input(), ela obterá a entrada simulada em vez de esperar que quem a utiliza digite algo.


**tmp_path** Diretṕrio temporário em que o teste pode criar e manipular arquivos.  O pytest se encarrega de criar e limpar o diretório temporário automaticamente antes e depois dos testes que utilizam a fixture.
tmp_path retorna um objeto pathlib.Path, que pode ser utilizado como uma string de caminho para um diretório, bem como pode fazer mais coisas.

# Makers

Os markers (marcadores) no Pytest são uma forma de marcar testes com atributos específicos que podem ser usados para executar, filtrar ou pular testes. Os marcadores podem ser definidos usando a sintaxe @pytest.mark.nome_do_marker no código de teste.

**Markers built-in**

Marcadores embutidos

**Skip**
O marcador skip serve para pular um teste específico

**skipif**, que pula um teste a depender de uma condição. Por exemplo, se um teste deve rodar somente em Windows e outro somente em Linux, você pode usar o skipif para rodar somente o teste apropriado para determinada plataforma.

**Xfail**  para o teste marcado com Xfail passar, na verdade o teste tem que falhar. Por isso o nome do marcador é expect fail 


# Parametrização
Permite executar o mesmo teste múltiplas vezes com diferentes parâmetros de entrada. 

basta adicionar o marker @pytest.mark.parametrize acima da definição da função. Esse marcador recebe dois argumentos:

Uma string ou uma sequência (lista, tupla, etc) de strings, representando o nome dos parâmetros.
Um iterável (geralmente uma lista) com os valores para o parâmetro.
Se for mais de um parâmetro, um iterável de um iterável (geralmente uma lista de tuplas).


Se você precisar marcar um teste parametrizado, será necessário passar um pytest.param(valor, marks=pytest.mark.marcador) ao invés de simplesmente valor para o parametrize.  **https://docs.pytest.org/en/7.1.x/example/parametrize.html#set-marks-or-test-id-for-individual-parametrized-test**