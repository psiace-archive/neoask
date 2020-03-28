from neoask.app import create_app
import socket


def test_config():
    assert not create_app().testing
    assert create_app({"TESTING": True}).testing


def test_index(client):
    response = client.get("/")
    index_str = "Neovis + Flask"
    assert bytes(index_str, encoding="utf8") in response.data
