# Templates

Config 

python3 -m venv .venv && source .venv/bin/activate
pip install django
pip install Pillow # biblioteca para trabalhar com imagens
pip install mysqlclient # biblioteca para se comunicar com o MySQL

trabalhando com imagens:
pip install whitenoise # Serve os arquivos estáticos a partir de um diretório
pip install django-static-autocollect # Coleta os arquivos estáticos e os coloca em um diretório

Em seguida, crie o projeto Django e a aplicação:

Copiar
django-admin startproject nome_do_projeto .
django-admin startapp nome_do_diretorio

Faça a instalação da aplicação dentro do projeto no arquivo settings.py:
INSTALLED_APPS = [ ..., nome_do_diretorio,
'static_autocollect'] *Se for usar imagens

Altere tbm a variavel midleware?
MIDDLEWARE = [
    ...
    'whitenoise.middleware.WhiteNoiseMiddleware',
]
Acresecente ao final do módulo:\
MEDIA_URL = ''
MEDIA_ROOT = BASE_DIR / 'media'

STATIC_URL = 'static/'
STATIC_ROOT = BASE_DIR / 'staticfiles'

STATICFILES_DIRS = [
  str(BASE_DIR / 'media/'),
]

STORAGE = {
   "default": {
       "BACKEND": "django.core.files.storage.FileSystemStorage",
   },
   "staticfiles": {
       "BACKEND": "whitenoise.storage.CompressedStaticFilesStorage",
   }
}

WHITE_NOISE_AUTOREFRESH = True 

Faça também a mudança para usar o MySQL como banco de dados: vent_manager/settings.py

DATABASES = {
    'ENGINE': 'django.db.backends.mysql',
+    'NAME': 'event_manager_database',
+    'USER': 'root',
+    'PASSWORD': 'password',
+     HOST': '127.0.0.1',
+    'PORT': '3306',
    }

    depois de definir o modelo que será usado, crie as migrations e logo depois migre-as para o banco. Para isso, execute python3 manage.py makemigrations e python3 manage.py migrate no terminal.

Para editar o DB: python3 manage.py shell
**pagina Trab com elementos do banco usando python** tem as queries


É possivel configurar para que o Django procure os templaes em repos específicos
Por exe.,, no arquivo evento_manager/settings, o o django procurará por templates dentro do direttório _templates_ que está na raiz do projeto

import os
TEMPLATES = [...
'DIRS': [os.path.join(BASE_DIR,'templates')],]

o Django permite que não se crie estruturas html para cada um dos templates. A DTL(Django Template Languange) permite que se crie um template base que contém a estrutura essencial do HTML e lacunas intencionais - com cada template filho preenchendo as lacunas com o próprio conteúdo. Esse mecanismo é chamado de Herança de templates. Como exemplo, relembre o template home.html que criamos:

No arquivo base.html:

<!-- A sintaxe {% %} indica que está sendo usada uma Tag de template do DTL. Ela é a lacuna que mencionamos mais cedo - um template filho irá preenchê-la. Nesse caso, usamos a tag block. Existem muitas Tags de template já implementadas no DTL.  https://docs.djangoproject.com/pt-br/4.2/ref/templates/builtins/ -->



<!-- foram criados blocos vazios que poderão ser preenchidos por aqueles templates que herdarem o arquivo base.html. Acima, criamos dois blocos - um chamado title e outro chamado content - para escrever o título da página que será exibida e para colocar todo o conteúdo HTML que se quer exibir, respectivamente.

Para usar a herança de template, faça o seguinte:

Vá no template filho e inclua no seu cabeçalho a seguinte sintaxe: {% extends 'base.html' %}, onde se usa a palavra reservada extends seguida de qual template se quer herdar.
Modifique o template filho, por exemplo o home.html, criando os blocos com os mesmos nomes daqueles criados no template herdado de acordo com a sintaxe abaixo.
Anota aí 📝: para que a herança aconteça é obrigatório que o {% extends 'nome-do-template.html' %} seja a primeira tag de template que aparece no arquivo. -->

**Filtros nos arquvos html**
https://docs.djangoproject.com/en/4.2/ref/templates/builtins/#built-in-filter-reference
