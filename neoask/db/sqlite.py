import sqlite3

import click
from flask import current_app, g
from flask.cli import with_appcontext
from loguru import logger


# connect to database
def connect_sqlite():
    """Connects to the database."""
    logger.info("Connecting to {0}", repr(current_app.config["DATABASE"]))
    rv = sqlite3.connect(current_app.config["DATABASE"])
    rv.row_factory = sqlite3.Row
    logger.info("Connection established")
    return rv


# create the database
def init_sqlite():
    logger.info("Initializing the database")
    with current_app.app_context():
        sqlite = get_sqlite()
        with current_app.open_resource("db/schema/neoask.sql", mode="r") as f:
            sqlite.cursor().executescript(f.read())
        sqlite.commit()
        logger.info("Initialized the database.")


# open database connection
def get_sqlite():
    if not hasattr(g, "sqlite_db"):
        g.sqlite_db = connect_sqlite()
    return g.sqlite_db


# close database connection
def close_sqlite(error):
    logger.info("Closing connection to database")
    if hasattr(g, "sqlite_db"):
        g.sqlite_db.close()
        logger.info("Connection closed")


@click.command("init-sqlite")
@with_appcontext
def init_sqlite_command():
    """Clear the existing data and create new tables."""
    init_sqlite()
    click.echo("Initialized the database.")


def init_app(app):
    app.teardown_appcontext(close_sqlite)
    app.cli.add_command(init_sqlite_command)
