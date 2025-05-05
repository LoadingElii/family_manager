import os
from flask import Flask
from project.models import db

def create_app():
    app = Flask(__name__)

    config_type = os.environ.get("CONFIG_TYPE", default="config.DevelopmentConfig")
    app.config.from_object(config_type)

    initialize_extensions(app)
    register_blueprints(app)

    return app

def initialize_extensions(app):
    db.init_app(app)

def register_blueprints(app):
    from project.blueprints.admin_blueprint import admin_bp
    from project.blueprints.member_blueprint import member_bp
    from project.blueprints.family_blueprint import family_bp
    from project.blueprints.todo_blueprint import todo_bp

    app.register_blueprint(admin_bp)
    app.register_blueprint(member_bp)
    app.register_blueprint(family_bp)
    app.register_blueprint(todo_bp)