from bson import ObjectId
from flask import Blueprint, jsonify, request
from models.music_model import MusicModel
from http import HTTPStatus


musics_controller = Blueprint("musics", __name__)



def _get_all_musics():
    musics = MusicModel.find()
    return [music.to_dict() for music in musics]


def _get_music(id: str):
    # ObjectId transforma uma string em ID do MongoDb
    return MusicModel.find_one({"_id": ObjectId(id)})

@musics_controller.route("/", methods=["POST"])
def music_post():
    new_music = MusicModel(request.json)
    new_music.save()
    return jsonify(new_music.to_dict()), HTTPStatus.CREATED

# musica aleatoria
@musics_controller.route("/random", methods=["GET"])
def music_random():
    music = MusicModel.get_random()
    # Exemplo de Validação
    if music is None:
        # O Flask entende que o número após o jsonify, representa o Status HTTP
        return jsonify({"error": "No musics available"}), HTTPStatus.NOT_FOUND

    return jsonify(music.to_dict()), HTTPStatus.OK