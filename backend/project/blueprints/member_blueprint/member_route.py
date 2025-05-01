from flask import request, make_response
from project.models import Member, db
from werkzeug.security import generate_password_hash
from project.auth import token_check
from . import member_bp



@member_bp.route("/", methods=["GET"])
@token_check
def get_member(current_member):
    try:
        return make_response(
            {
                "message": current_member.serialize
            },200
        )
    except Exception as e:
        return make_response(
            {
                "message":"Opps! Member details not found."
            },400
        )
    

@member_bp.route("/<id>", methods=["GET"])
@token_check
def get_member_by_id(current_member, id):
    try:
        member = Member.query.filter_by(id = id).first()
        if not member:
            return make_response(
                {
                    "message":"Member does not exist."
                },400
            )
        return make_response(
            {
                "message": member.serialize
            },200
        )
    except Exception as e:
        return make_response(
            {
                "message":"Opps! Member details not found."
            },400
        )
    

@member_bp.route("/update", methods=["PUT"])
@token_check
def update_member(current_member):
    data = request.json
    data["password"] = generate_password_hash(data.get("password"))
    try:
        Member.query.filter_by(id = current_member.id).update(data)
        db.session.commit()
        return make_response(
            {
                "message": "member has been updated."
            },200
        )
    except Exception as e:
        return make_response(
            {
                "message":"Opps! Member details can't be updated. try again."
            },400
        )
    

@member_bp.route("delete/<id>", methods=["DELETE"])
@token_check
def delete_member(current_member, id):
    try:
        member = Member.query.filter_by(id = id).first()
        if not member:
            return make_response(
                {
                    "message": "member does not exist can't delete."
                },400
            )
        db.session.delete(member)
        db.session.commit()
        return make_response(
            {
                "message": "member has successfully been deleted"
            },200
        )
    except Exception as e:
        return make_response(
            {
                "message":"Opps! Member details not found."
            },400
        )
    
