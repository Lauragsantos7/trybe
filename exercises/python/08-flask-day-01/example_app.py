# app.py
from flask import Flask, jsonify
app = Flask(__name__) # Cria a instância da aplicação (dunder name é uma convenção)

# Retorna o arquivo de texto: 
@app.route("/") # Cria uma rota, para a raiz do projeto. (GET por padrão)
def hello_world(): # Método a ser executado ao navegar
   return 'Hello World!'

# if __name__ == '__main__':
#  debug = True, reinicia automaticamente a cada mudança de arquivo
#   # mude a porta, caso ela estiver em uso
#   app.run(debug = True, host='0.0.0.0', port=8000)

  # Com esses passos concluídos, seu servidor estará em execução e você poderá acessá-lo diretamente do navegador digitando a seguinte URL: http://localhost:8000. Agora, está tudo preparado para você interagir com sua aplicação Flask e explorar suas funcionalidades.



  # Retorna o objeto json:

@app.route("/api/")
def api_hello_world():
    return jsonify({'mensagem': 'Hello World!'})

if __name__ == '__main__':
# debug = True, reinicia automaticamente a cada mudança de arquivo
# mude a porta, caso ela estiver em uso
  app.run(debug = True, host='0.0.0.0', port=8000)