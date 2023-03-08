# criando a imagem própria  - precisa se basear numa imagem base.
# sua finalidade é criar imagens que geram containers

#  1- Deve-se usar o comando FROM para definir a imagem base
#  usando imagem nginx

FROM nginx


# 2 - criar um arquivo html na raiz da pasta

# 3 - copiar os arquivos da máquina para o container
# arquivo inicial do nginx, para saber para onde copiar, fica na documentação 
COPY index.html /usr/share/nginx/html

# rodar o comando 'docker run -it nginx bash' no terminal
# ver a configuração: 'cat /etc/nginx/conf.d/default.conf'
# o que tem dentro do diretóio: 'ls -a /usr/share/nginx'
# vai mostrar o arquivo html. Para acessar esse arquivo: 'cd usr/share/nginx/html' e apos entrar, ls para listar
# vai aparecer 50x.html index.html

COPY welcome.html /usr/share/nginx/html

# 4 criando uma imagem: fazer um build (construir). Para dar um nome à image, passar a flag '-t': docker build -t dono-da-imagem/nome-que-vc-qr caminho (laura/hello-nginx . ) (pode dar um push nessa imagem para que outras pessoas possam utilizá-la)
# 5 criando container a partir da imagem da imagem acima
# 'docker run -d -p 3000:80 laura/hello-nginx' -p para definir a porta que vai ser usada. à direita, a porta que rodará no navegador; à esquerda, a porta do container(80-nginx. 3000-react)
# para entrar no container, usar o comando: 'docker exec -it id bash'
# 'curl localhost' para ver o conteudo do index.html (pq index é padrão) que vc criou. 'curl localhost/nome-do-arquivo.html 'para ver conteudo do outro arquivo que não seja index
# obs.: alpine é uma versão mais compacta, leve.


