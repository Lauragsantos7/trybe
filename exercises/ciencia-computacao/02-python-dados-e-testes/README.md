# Aula do dia: entrada e saída de dados, manipular arquivos como CSV e JSON e teste automatizado

Para executar os arquivos no terminal: pyhton3 nomeDoArquivo

# Ambiente virtual:
instalando o venv: sudo apt install python3-venv
É um módulo já embutido na linguagem e serve para isolar ambientes de projetos. 
comando de criação:
python3 -m venv .venv
Esse ambiente será visto como um diretório na raiz do projeto. O ponto na frente do nome faz com que o dir fique oculto.
# ativando o ambiente:
  source .venv/bin/activate
# conferir se deu certo:
  which python3


  # testes:
instalação da biblioteca pytest:
  python3 -m pip install pytest
Verificar:  python3 -m pytest --version

O nome do arquivo deve ter o prefixo test_ assim como a definição das sua funções. A palavra assert é utilizada para verificar se o rtorno está como o esperado. 
O comando assert funciona da seguinte maneira: caso a expressão recebida seja verdadeira (avaliada como True), nada acontece. Porém, caso seja falsa (avaliada como False), uma exceção do tipo AssertionError é lançada. A pytest captura este erro e tenta apresentar uma comparação entre o esperado e o recebido da melhor maneira possível.
