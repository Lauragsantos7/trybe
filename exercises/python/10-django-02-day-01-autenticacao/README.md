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

