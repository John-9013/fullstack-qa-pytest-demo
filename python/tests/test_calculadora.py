import pytest

from calculadora import dividir, sumar


def test_sumar():
    assert sumar(2, 3) == 5


def test_dividir():
    assert dividir(6, 3) == 2


def test_dividir_entre_cero():
    with pytest.raises(ZeroDivisionError):
        dividir(1, 0)
