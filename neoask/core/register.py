from loguru import logger

import neoask.bps.auth.view as auth
from neoask.db import sqlite
import neoask.bps.neovis.view as neovis


def register_extensions(app):
    """Register Flask extensions."""
    logger.info("Register Flask extensions.")
    sqlite.init_app(app)
    logger.info("Registration completed")


def register_blueprints(app):
    """Register Flask blueprints."""
    logger.info("Register Flask blueprints.")
    app.register_blueprint(auth.bp)
    app.register_blueprint(neovis.bp)
    logger.info("Registration completed")
