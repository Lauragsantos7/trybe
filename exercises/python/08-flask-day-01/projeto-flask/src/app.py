# rodar o container: docker compose up flask-api
from flask import Flask
from controllers.jokes_controller import jokes_controller
from controllers.music_controller import musics_controller
from os import environ
from waitress import serve

app = Flask(__name__)
app.register_blueprint(jokes_controller, url_prefix="/jokes")
app.register_blueprint(musics_controller, url_prefix="/musics")




def start_server(host: str = "0.0.0.0", port: int = 8000):
    if environ.get("FLASK_ENV") == "dev":
        # Servidor de desenvolvimento do Kit Werkzeug
        return app.run(debug=True, host=host, port=port)
    else:
        # Este é o waitress, otimizado para produção
        serve(app, host=host, port=port)

if __name__ == "__main__":
    start_server()

# Quando usamos o servidor de desenvolvimento do Flask, o servidor é reiniciado a cada alteração no código. No entanto, quando usamos o Waitress, isso não acontece. Portanto, se você fizer alterações no código, precisará reiniciar o servidor manualmente.
# Como não configuramos nenhum tipo de log para o Waitress, não veremos nenhuma mensagem de log no terminal. Mas pode ter tranquilidade: o servidor está funcionando perfeitamente.