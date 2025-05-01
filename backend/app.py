from flask_cors import CORS
from project import create_app


app = create_app()

CORS(app)