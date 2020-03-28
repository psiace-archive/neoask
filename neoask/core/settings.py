import logging
import os
import sys

from dotenv import find_dotenv, load_dotenv
from loguru import logger

from neoask.core.logging import InterceptHandler

logger.info("Loading the settings from environ.")

load_dotenv(find_dotenv())

DEBUG = os.environ.get("DEBUG")

SECRET_KEY = os.environ.get("SECRET_KEY")

NEO_HOST = os.environ.get("NEO_HOST")
NEO_USERNAME = os.environ.get("NEO_USERNAME")
NEO_PASSWORD = os.environ.get("NEO_PASSWORD")

logger.info(NEO_HOST)
logger.info(NEO_USERNAME)
logger.info(NEO_PASSWORD)

logger.info("Loaded the settings.")

# logging configuration

LOGGING_LEVEL = logging.DEBUG if DEBUG else logging.INFO
logging.basicConfig(
    handlers=[InterceptHandler(level=LOGGING_LEVEL)], level=LOGGING_LEVEL
)
logger.configure(handlers=[{"sink": sys.stderr, "level": LOGGING_LEVEL}])
