import random
from .db import db
from .abstract_model import AbstractModel
class MusicModel(AbstractModel):
    _collection = db["musics"]

    def __init__(self, json_data):
        super().__init__(json_data)

    
    @classmethod
    # musica aleatória
    def get_random(cls):
        data = cls.find()
        if not data: return
        return random.choice(data)

    # Define as regras de como o objeto musicModel pode virar um Dict
    def to_dict(self):
        return {
            '_id': str(self.data['_id']),
            'music': self.data['music'],
        }