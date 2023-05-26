Para criar a imagem: no terminal:
docker pull python(para baixar a ultima versão disponível ou pode escolher a versão acrescentando dois pontos e o número da versão )

docker run -it --rm python:3.8 para não precisar criar dockerfile

criar dockerfile
FROM python

WORKDIR /usr/src/app

COPY requirements.txt ./

RUN pip install --no-cache-dir -r requirements.txt

COPY . .

CMD ["python", "./seuarquivo.py"]

rodar docker build -t my-python-app .

3 opção: executar um script Python usando a imagem de Python do Docker diretamente:

docker run -it --rm --name nome-do-seu-script -v "$PWD":/usr/src/myapp -w /usr/src/myapp python:3 python seu-arquivo.py
# -v "$PWD":/usr/src/myapp - monta o diretório atual para dentro do contêiner
# -w /usr/src/myapp - muda o WORKDIR para executar o comando no diretório recém montado.



# Confugrando ambiente de trabalho:

sudo apt install python3-pip

pip install flake

pip install wheel

pip install black

# criando ambiente virtual: (pra fazer sem docker)
sudo apt install python3.8-venv

comando python3 -m venv .venv

para entrar no ambiente: 
source .venv/bin/activate

# ativando linter: 
