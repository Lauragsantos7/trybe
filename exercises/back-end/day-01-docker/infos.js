// Docker
// O que é? Ferramenta para resolver problemas de compatibilidade
// entre máquinas e versões de framewares usados numa app.

// Isola a app para que ela rode em SO distintos.

// Conteinirização: empacotamento das configurações necessárias, inclusive SO.

// Imagem: é a app empacotada com todas as dependências necessárias já instaladas
// dentro dela. Dockerfile ajuda a criar imagens.

// Container: processo que representa a execução da imagem já construída. É
// possível entrar no terminal dentro do container, assim como parar e continuar
// sua execução sem precisar recriá-lo.

// registry:
// local remoto onde podemos enviar e baixar imagens docker. É possível criar novas
// imagens usando oitras imagens do catalógo como base. 

// https://hub.docker.com/

// Principais comandos: 

// docker images: lista as imagens salvas na máquina;
// docer container ls ou docker ps: lista os containers em execução na máquina;
// docker container ls -a: mostra todos os containers da máquina, ainda que
// paraddos ou que já terminaram sua execução
// criar container: docher container run --name meu-container alpine:3.14 echo"Hello World"
// criou container baseado na imagem alpine, com o nome de "meu-container",usando a tag 3.14
// e passando os argumentos echo e Hello World.
// docker rm <nome-do-container> para remover o container se ele estiver parado ou sua execução
// tiver terminado.
// auto-remover: docker container run --rm alpine..... 
// o container vai ser removido ao final de sua execução.
// segundo plano: -d ou –detach : faz com a execução do container aconteça em segundo plano.  
// ...alpine:3.14 sleep 300 o container continuará em execução por 300 segundos.
// docker stop -t 0 <nome-do-container> força (-t 0) a parada de execução do container que tá 
// rodando em segudo plano      
// docker exec -it meu-container sh : entendendo o comando: flag t: solicita criação de uma sessão
// de terminal; flag i : necessária para que a sessão seja iterativa; sh: comando a ser executado,
// que é um programa de terminal linux.
// 	ps aux : lsita todos os processos em execução no momento


