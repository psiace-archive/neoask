import py2neo
from py2neo import Graph
from fastapi import FastAPI
from loguru import logger

from gInfer.core.config import DATABASE_URL, DATABASE_USERNAME, DATABASE_PASSWORD

neo_db = py2neo.Graph(
        str(DATABASE_URL),
        auth=(str(DATABASE_USERNAME),str(DATABASE_PASSWORD)))

async def connect_to_db(app: FastAPI) -> None:
    logger.info("Connecting to {0}", repr(DATABASE_URL))

    app.state.pool = neo_db

    logger.info("Connection established")


async def close_db_connection(app: FastAPI) -> None:
    logger.info("Closing connection to database")
    # You know, py2neo don't have close function.
    # Or `Database.forget_all()`
    app.state.pool.database.connector.close()
    logger.info("Connection closed")
