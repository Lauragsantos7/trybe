#criando uma app react 
# rodar o 'create react app e configurar...'

FROM node:16-alpine

# pode-se criar um diretório dentro do container que será o ambiente de trabalho. Normalmente chama /app, mas pode ser '/qqr-coisa'
WORKDIR /app

COPY package.json .

RUN npm install --silent
# --silent para não ficar aparecendo os logs do npm install 

# copiar tudo dentro desta pasta para a pasta raiz do diretório de trabalho
COPY . . 

# em vex do RUN, pode-se usar o CMD:
CMD ["npm", "start"]

# no terminal: criar imagem: docker build -t laura/welcome-react .
# docker run -it -d -p 80:3000 laura/welcome-react

# para acessar o container:
# No terminal: docker container exec -it nome-do-container sh (ou bash)
# ls para listar as pastas e arquivos. cd arquivo 
