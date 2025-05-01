from flask import Blueprint

family_bp = Blueprint("family", __name__, url_prefix= "/family")

from . import family_route