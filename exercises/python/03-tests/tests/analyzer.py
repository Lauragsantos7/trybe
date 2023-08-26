# arquivo: analyzer.py
import json


def read_json_file(file_path):
    with open(file_path, "r") as file:
        return json.load(file)


def analyze_json_file(file_path) -> str:
    # se o file_path não terminar com .json, disparará ValueError
    if not file_path.endswith(".json"):
        raise ValueError("O arquivo precisa ser um arquivo JSON.")

    data = read_json_file(file_path)
    return (
        f"A pessoa de nome {data['nome']} "
        f"tem {data['idade']} anos de idade."
    )

print(analyze_json_file('src/person_data.json'))