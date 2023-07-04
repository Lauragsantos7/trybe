# conftest.py
import pytest


@pytest.fixture
# o escopo padrão é o de função. Para alterá-lo, usar a sintaxe: @pytest.fixture(scope="module")
def my_list():
    return [1, 2, 3]


def pytest_configure(config):
    config.addinivalue_line(
        "markers", "slow: marks tests as slow"
    )