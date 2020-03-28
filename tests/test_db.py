import sqlite3

import pytest
from neoask.db.sqlite import get_sqlite


def test_get_close_sqlite(app):
    with app.app_context():
        db = get_sqlite()
        assert db is get_sqlite()

    with pytest.raises(sqlite3.ProgrammingError) as e:
        db.execute("SELECT 1")

    assert "closed" in str(e.value)


def test_init_sqlite_command(runner, monkeypatch):
    class Recorder(object):
        called = False

    def fake_init_sqlite():
        Recorder.called = True

    monkeypatch.setattr("neoask.db.sqlite.init_sqlite", fake_init_sqlite)
    result = runner.invoke(args=["init-sqlite"])
    assert "Initialized" in result.output
    assert Recorder.called
