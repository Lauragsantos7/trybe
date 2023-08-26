import json
from typing import Any

# ativar ambiente virtual: source .venv/bin/activate
# terminal iterativo:  python3 -i live_lecture-t25/src/games_report.py
# python3 -m pip install -r dev-requirements.txt
# python3 -m pip install flake8 black pytest

class Importer:
  @staticmethod # classe precisa do self, e como não é usado nessa classe, deve colcoar essa fixture (igual o static do back S2)
  def from_json(file_path: str) -> list[dict[str, Any]]:
      try:
          with open(file_path, "r") as file:
            
              games = json.load(file)
            
      except FileNotFoundError:
          raise FileNotFoundError("Arquivo não encontrado")  
      else:
          return games  # só executa se não houver erro
      finally:
          print("oi")  # sempre executa, com erro ou não

class Consoles:
  @staticmethod
  def get_all_consoles(
      games: list[dict[str, Any]],
  ) -> set[str]:  # set para não pegar valores repetidos
      all_consoles: Any = set()
      for game in games:
          console = game["title"]
          all_consoles.add(console)
      return all_consoles

class Sales:
  def __init__(self, games_data: list[dict[str, Any]]):
      self.games_data = games_data

  def get_sales_by_console(self) -> dict[str, float]:
      result: dict[str, float] = dict()
      # ou result = {} para criar dicionário
      for game in self.games_data:
          console = game["title"]
          sales = game["metrics"]["sales"]
          if console in result: # se ja tiver aparecido a chave na variável console, acrescente um em sales, se não tiver aparecido ainda, crie e retorne ela em sales
              result[console] += sales
          else:
              result[console] = sales
      return result


# esse comando só roda qdo chama esse arquivo especificamente. Se for importado em outra page e rodar a page, esse arquivo não será rodado.
if __name__ == "__main__":
    video_games: list[dict[str, Any]] = Importer.from_json("live_lecturet25/src/video_games.json")
    # não precisa intanciar a classe '()' pq é ela é estática. Basta chamar o método 'from_json'
    console = Consoles.get_all_consoles(video_games)
    print(f"Consoles: \n{console}")
    sales = Sales(video_games).get_sales_by_console()
    print("Vendas")
    for game in sales:
        print(f"{game}: {round(sales[game], 2)}")
