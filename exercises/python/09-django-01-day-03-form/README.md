# Formulários 

Um formulário é considerado como não vinculado caso seja instanciado sem nenhum dado, caso contrário, ele é vinculado.

Formulários vinculados podem validar os dados passados por parâmetro. Já formulários não vinculados não podem fazer isso.

Criando validações personalizadas

https://docs.djangoproject.com/en/4.2/ref/validators/#built-in-validators


É possível criar suas próprias funções de validação para os campos de um formulário, isso permite que você aplique a regra de negócio que quiser para validar um campo.


Novo registro a partir de um formulário

Uma vez que você já possui um formulário que tem dados válidos, é preciso repassar esses dados para o modelo e, assim, criar o novo registro no banco. Para isso, depois de usar o método is_valid() para checar a integridade dos dados passados, você pode usar o atributo cleaned_data para que um dicionário com todos os dados sejam retornados para você. Esses dados, agora já validados, podem ser usados para criar um novo registro no banco.

Um widget nada mais é do que uma representação HTML mais elaborada de um campo input. Felizmente, o Django tem diversos widgets já implementados e prontos para serem usados. Além disso, ele também permite que você crie seus próprios widgets! 🤯

https://docs.djangoproject.com/en/4.2/ref/forms/widgets/#built-in-widgets

No módulo forms.py:
o parâmetro attrs passado para o widget é usado para atribuir um conjunto chave: valor à tag que está sendo inserida no template. Nesse caso, definimos o tipo do input como data type: date, mas poderíamos, adicionalmente, definir uma classe: class: inputDate.

    # também é possível usar o parâmetro help_text para indicar uma frase de auxílio no preenchimento do campo. Experimente!
    strip retira os espaços
    initial = valor padrão inicial
