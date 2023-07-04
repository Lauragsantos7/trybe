import pytest

from main import mean

# video da aula 1.2 Debug com Pytest e VS Code explica sobre parametrize
@pytest.mark.parametrize(
    "input_numbers, expected_result",  # 1 - string com todos os nomes de entradas e saídas
    [  # 2 - lista de tuplas, em que cada tupla é um novo caso de teste
        ([1, 2, 3, 4, 5], 3.0),  # 3
        ([2.5, 3.75, 1.25, 4], 2.875)
        # (["9", 3, 5], TypeError)exemplo de erro se um número for string
    ],
)
def test_mean(input_numbers, expected_result):  # 4
    assert mean(input_numbers) == expected_result


def test_mean_fail():  # 5
    with pytest.raises(ZeroDivisionError):
        mean([])
