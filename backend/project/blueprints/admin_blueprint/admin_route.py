from flask import request, make_response, current_app
from project.models import Member, db
from werkzeug.security import generate_password_hash, check_password_hash
from datetime import datetime, timedelta
from . import admin_bp


@admin_bp.route("/signup", methods=["POST"])
def signup():
    data = request.json
    first_name = data.get("first_name")
    last_name = data.get("last_name")
    password = data.get("password")
    email = data.get("email")
    age = data.get("age")

    if first_name and last_name and password and email and age:
        if Member.query.filter_by(email = email).first() :
            return make_response(
                {
                    "message": "Member already exist."
                },400
            )
        
        member = Member(
            first_name = first_name,
            last_name = last_name,
            password = generate_password_hash(password),
            email = email,
            age = age,
        )

        db.session.add(member)
        db.session.commit()

        return make_response(
            {
                "message": "Success! Member was created.",
                "member_id": member.id,
            },200
        )
    return make_response(
        {
            "message": "Sorry unable to create member."
        },500
    )


@admin_bp.route("/login", methods=["POST"])
def login():
    data = request.json
    email = data.get("email")
    password = data.get("password")

    if not data or not email or not password :
        return make_response(
            {
                "message": "Please provide credentials."
            },400
        )
    
    member = Member.query.filter_by(email = email).first()

    if not member:
        return make_response(
            {
                "message": "Member does not exist."
            },400
        )
    
    if check_password_hash(member.password, password):
        import jwt

        token = jwt.encode({
            "id": member.id,
            "exp": datetime.now().astimezone() + timedelta(hours=24)
        },
        current_app.config["SECRET_KEY"], "HS256"
        )

        return make_response(
            {
                "message": "Success! You are logged in.",
                "member_id": member.id,
                "token": token
            },200
        )
    
    return make_response(
        {
            "message": "Login Failed. Please check credentials."
        },400
    )
