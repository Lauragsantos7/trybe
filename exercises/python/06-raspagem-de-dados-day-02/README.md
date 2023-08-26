# Selenium
è um conjunto de ferramentas para automatização de navegadores da web, que permite controlar remotamente instâncias de navegadores e emular a interação de um usuário como navegador.\
No núcleo do Selenium estpa o WebDriver, uma API e protocolo que define uma interface para controlar o comportamento dos navegadores web. É através do WebDriver que o Selenium suporta a automaçãod dos principais navegadores do mercado.

Instalando via Docker: S2

A imagem que utilizaremos do Selenium é a selenium/standalone-firefox:

docker pull selenium/standalone-firefox:106.0

iniciando a imagem:
docker run -d -p 4444:4444 -p 7900:7900 --shm-size 2g --name firefox selenium/standalone-firefox:106.0

Se o container cair:
docker restart firefox

Instalação Selenium :
pip3 install selenium==4.6.0

baixar o geckodriver do firefox:
https://github.com/mozilla/geckodriver/releases

extrair e mover para a pasta venv/bin do amb virtual

options documentação: https://www.selenium.dev/selenium/docs/api/rb/Selenium/WebDriver/Firefox/Options.html


# Beautiful Soap
lib Python para extrair dados de arquivos HTML e XML. 

pip3 install beautifulsoup4==4.11.1 requests==2.27.1


O Beautiful Soup transforma um documento HTML complexo em uma árvore de objetos Python. Os quatro tipos de objetos que podemos lidar são Tag, NavigableString, BeautifulSoup e Comment. Na documentação, que está disponível inclusive em português, existe uma seção inteira dedicada aos tipos de objetos, mas destacaremos aqui apenas os dois primeiros.

https://www.crummy.com/software/BeautifulSoup/bs4/doc.ptbr/#tipos-de-objetos

possui dois métodos principais para encontrar elementos. Eles são o find() e find_all() e a essa altura você já deve ter presumido que a diferença básica entre eles é que o primeiro retorna apenas o primeiro elemento que corresponder ao filtro, enquanto o segundo retorna a lista de todos os elementos que baterem com o filtro.

https://www.crummy.com/software/BeautifulSoup/bs4/doc.ptbr/#buscando-na-arvore