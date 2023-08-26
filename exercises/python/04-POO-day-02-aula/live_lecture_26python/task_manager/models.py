DictTask = dict[str, int | str | bool]
class Task:
  def __init__(self, _id: int, name:str, completed: bool=False):
    self.name = name
    self.completed = completed
    self.id = _id


# para fazer a classe ser transformada em dicionário ao criar uma task
  def to_dict(self) -> DictTask:
    return {
      "id": self.id,
      "name": self.name,
      "completed": self.completed
    }
  

