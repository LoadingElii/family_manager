from flask import Blueprint

todo_bp = Blueprint("todos", __name__, url_prefix="/todos")

from . import todo_route