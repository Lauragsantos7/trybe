https://www.django-rest-framework.org/
Configuração projeto:
criar amb virtual
instalar apps necessários:

ip install django djangorestframework
pip install markdown django-filter mysqlclient

* iniciar projeto:
django-admin startproject marryme .

* Criar um app no projeto chamado budget
django-admin startapp budget

laura
513416003Ls


# Restringindo acesso a parte das operações C.R.U.D. para admins

# BasicAuthentication
ir no arquivo marryme/settings.py e acrescentar a seguinte configuração:

 REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.BasicAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
}

Essa configuração define quais serão, respectivamente, a autenticação e permissão padrão usada pela aplicação. Feito isso, nossa API está fechada e todas as rotas exigem autenticação básica! É o primeiro passo para satisfazer a ambas as nossas demandas. 

Agora vamos acrescentar à lógica para somente uma parte administradora lidar com os dados de Fornecedores. Primeiro, vamos aos serializers. Não remova os serializers que já existem, só acrescente esse:

class AdminVendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = '__all__'

    def create(self, validated_data):
        request = self.context.get('request')
        if request and request.user.is_superuser:
            return super().create(validated_data)
        raise serializers.ValidationError("Você não tem permissão para criar fornecedores.")


alterar o Viewset de fornecedores:

# Token Authentication

A autenticação por token requer um pouco mais de gerenciamento por parte do servidor - o gerenciamento das tokens - mas é mais segura - as credenciais só são enviadas para se obter uma token, e esta pode ser revogada com facilidade. 

**Segurança**	
Autenticação por Token	- Oferece melhor segurança, pois os tokens podem ter prazos curtos e ser revogados facilmente. Os tokens também podem ser emitidos com permissões específicas.

Autenticação Básica - 	Menos seguro, pois as credenciais (nome de usuário/senha) são enviadas com cada requisição e podem ser interceptadas. As credenciais também são armazenadas no servidor, representando um risco potencial caso o servidor seja comprometido.
SimpleJWT - Oferece segurança avançada, geração automática de tokens JWT e suporte a tokens de atualização. Os tokens podem ter tempo de vida configurável e podem ser revogados. Possui integração simples com o Django REST Framework.

**Ausência de Estado**
Ambos -	Stateless, não requer armazenamento de sessão no servidor, o que reduz a carga no servidor.	servidor, o que reduz a carga no servidor.


**Complexidade de Implementação**
Autenticação por Token- Mais complexo de implementar em comparação com a Autenticação Básica, pois requer a geração e manipulação de tokens no lado do servidor, além de lidar com a expiração e revogação de tokens.\
Autenticação Básica - Mais fácil de implementar, pois envolve apenas a verificação das credenciais em cada requisição. Nenhuma geração ou manipulação de token é necessária.\
SimpleJWT - Mais complexo que a Autenticação Básica, mas oferece biblioteca completa para lidar com a geração, manipulação e renovação de tokens JWT. Requer configurações adicionais, mas proporciona mais recursos e flexibilidade.

Primeiro, você precisará acrescentar um app novo à suas configurações e alterar a configuração padrão de autenticação:
Altera arquivo marryme/settings.py:
INSTALLED_APPS = ['rest_framework.authtoken',
]

alterar REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
        ...
    ]}

    Agora, vamos primeiro criar uma rota para que uma pessoa possa enviar, via requisição, suas credenciais para obter uma token no arquivo marryme/urls

# SimpleJWT

instalar módulo:
pip install djangorestframework-simplejwt

substituir as config. já feitas por JWT atutentication em marryme/settings

Como definimos a autenticação JWT como padrão no arquivo settings.py podemos remover a variável authentication_classes nas views. Isso fará com que o simple JWT seja o padrão para toda aplicação. Caso você não defina uma configuração padrão de autenticação e permissão, você precisará indicar com authentication_classes e permission_classes quais serão essas configurações, caso contrário, não haverá autenticação e todas as pessoas terão as permissões.