from base64 import b64decode
from functools import wraps
from config import Config as c
from flask import make_response, request
import jwt
from project.models import Member


def token_check(f):

    @wraps(f)
    def decorated_func(*args, **kwargs):
        token = None

        if request.headers["Authorization"] :
            token = request.headers["Authorization"]
        if not token :
            return make_response(
                {
                    "message": "Opps! Token is missing."
                },400
            )

        try:
            data = jwt.decode(token, c.SECRET_KEY, algorithms=["HS256"])
            current_member = Member.query.filter_by(id = data["id"]).first()
            print(current_member.serialize)
        except Exception as e :
            return make_response(
                {
                    "message": "Token is invalid " + "error " + str(e) 

                },400
            )
        return f(current_member, *args, **kwargs)
    
    return decorated_func