import os

from flask import Flask
from loguru import logger

from neoask.core.register import register_blueprints, register_extensions
from neoask.core.settings import SECRET_KEY


def create_app(test_config=None):
    # create and configure the app
    logger.info("Create and configure the app.")
    app = Flask(__name__, instance_relative_config=True)
    app.config.from_mapping(
        SECRET_KEY=SECRET_KEY, DATABASE=os.path.join(app.instance_path, "neoask.db"),
    )

    if test_config is None:
        # load the instance config, if it exists, when not testing
        app.config.from_pyfile("config.py", silent=True)
    else:
        # load the test config if passed in
        app.config.from_mapping(test_config)

    # ensure the instance folder exists
    try:
        os.makedirs(app.instance_path)
    except OSError:
        pass

    register_extensions(app)
    register_blueprints(app)

    app.add_url_rule("/", endpoint="index")
    logger.info("Created app.")
    return app
