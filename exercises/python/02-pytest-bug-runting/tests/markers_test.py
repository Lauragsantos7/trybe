# Para criar seu próprio marcador, basta criar uma função que tenha como argumento um objeto de tipo pytest.mark. Por exemplo, para criar um marcador chamado “slow”

import time

import pytest


@pytest.mark.slow
def test_slow_marker():
    time.sleep(4)


# é preciso informar ao Pytest que foi criado um marcador, alterando o arquivo confteste.py