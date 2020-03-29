from loguru import logger

import neoask.bps.auth.view as auth
import neoask.bps.neovis.view as neovis
from neoask.db import sqlite


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
