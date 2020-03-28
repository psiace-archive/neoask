import base64
import functools
import socket

from flask import (
    Blueprint,
    flash,
    g,
    redirect,
    render_template,
    request,
    session,
    url_for,
)
from werkzeug.security import check_password_hash, generate_password_hash

from neoask.bps.auth.view import login_required
from neoask.core.settings import NEO_HOST, NEO_PASSWORD, NEO_USERNAME
from neoask.db.sqlite import get_sqlite

bp = Blueprint("neovis", __name__)


@bp.route("/")
def index():
    try:
        return render_template("neovis/index.html")
    except:
        return render_template("error.html")


@bp.route("/query")
@login_required
def form():
    try:
        return render_template(
            "neovis/query.html", host=NEO_HOST, user=NEO_USERNAME, password=NEO_PASSWORD
        )
    except:
        return render_template("error.html")
