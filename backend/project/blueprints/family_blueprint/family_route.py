from flask import make_response, request
from project.models import Family, Member, db
from project.auth import token_check
from . import family_bp


@family_bp.route("/", methods=["GET"])
@token_check
def get_family(current_member):
    try:
        family = Family.query.filter_by(id=current_member.family_id).first()

        return make_response(
            {
                "family": {
                    "id": family.id,
                    "family_name": family.family_name,
                    "members": [
                        family.member.serialize for family.member in family.members
                    ],
                }
            },
            200,
        )
    except Exception as e:
        return make_response({"message": "family doesn't exist"}, 400)


@family_bp.route("/create", methods=["POST"])
@token_check
def create_family(current_member):
    data = request.json
    name = data.get("family_name")

    if not name:
        return make_response({"message": "Opps! Please provide family name"})
    try:
        if current_member.family_id != None:
            return make_response({"message": "You already part of a family."}, 400)

        family = Family(
         family_name = name,
        )
            
        db.session.add(family)
        db.session.commit()

        current_member.family_id = family.id

        db.session.commit()

        return make_response({"family": "Success family was created"}, 200)
    except Exception as e:
        print(e)
        return make_response({"message": "Opps! Family wasn't created."}, 400)


@family_bp.route("/update", methods=["PUT"])
@token_check
def update_family(current_member):
    data = request.json
    name = data.get("family_name")
    
    if not name:
        return make_response({"message": "Opps! Please enter valid name "}, 400)
    try:
        
        Family.query.filter_by(id=current_member.family_id).update({Family.family_name: name})
        db.session.commit()
        return make_response({"message": "Success family has been updated."}, 200)
    except Exception as e:
        print(e)
        return make_response(
            {"message": "Opps! Family didn't update. Try again."}, 500
        )


@family_bp.route("/delete", methods=["DELETE"])
@token_check
def delete_family(current_member):
    try:
        family_bp = Family.query.filter_by(id=current_member.family_id).first()

        db.session.delete(family_bp)
        db.session.commit()

        return make_response({"message": "Family has been deleted."}, 200)
    except Exception as e:
        return make_response({"message": "Opps! Family didn't delete try again."}), 500


@family_bp.route("/member/add", methods=["PUT"])
@token_check
def add_family_member(current_member):
    data = request.json
    email = data

    member = Member.query.filter_by(email=email).first()
    if not member:
        return make_response({"message": "Please select member to add."}, 400)

    try:
        family = Family.query.filter_by(id=current_member.family_id).first()
        member.family_id = family.id
        db.session.commit()
        return make_response({"member": "Success! member added to family."}, 200)
    except Exception as e:
        return make_response(
            {"message": "Unable to add member to family. please try again"}, 500
        )


@family_bp.route("/member/delete/<id>", methods=["DELETE"])
@token_check
def delete_family_member(current_member, id):
    try:

        member = Member.query.filter_by(id=id).first()
        member.family_id = None
        db.session.commit()

        return make_response({"message": "Member has been deleted from family."}, 200)
    except Exception as e:
        return (
            make_response(
                {"message": "Opps! Member didn't delete from family. try again."}
            ),
            500,
        )
