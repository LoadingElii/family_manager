from flask import make_response, request
from project.models import TodoItem, db
from project.auth import token_check
from . import todo_bp


@todo_bp.route("/all", methods=["GET"])
@token_check
def get_all_member_todos(current_member):
    try:
        Todos = TodoItem.query.filter_by(member_id=current_member.id).all()
        return make_response({"Todos": [todo.serialize for todo in Todos]}, 200)
    except Exception as e:
        return make_response({"message": "Sorry no todo found."}, 400)


@todo_bp.route("/<id>", methods=["GET"])
@token_check
def get_todo_by_id(current_member, id):
    try:
        Todo = TodoItem.query.filter_by(id=id).first()
        return make_response({"Todo": Todo.serialize}, 200)
    except Exception as e:
        return make_response({"message": "Sorry no todo found."}, 400)


@todo_bp.route("/create", methods=["POST"])
@token_check
def create_member_todo(current_member):
    data = request.json
    description = data.get("description")
    urgency = data.get("urgency")
    completed = bool(data.get("completed") == 1)

    if not description and urgency:
        return make_response(
            {"message": "Invalid todo. Please complete all fields."}, 400
        )

    try:
        Todo = TodoItem(
            description = description,
            urgency = urgency,
            completed = completed,
            member_id = current_member.id,
        )

        db.session.add(Todo)
        db.session.commit()

        return make_response({"message": "Success! Todo has been created"}, 200)
    except Exception as e:
        print(e)
        return make_response({"message": "Opps! Todo can't be created."}, 400)


@todo_bp.route("/family/all", methods=["GET"])
@token_check
def get_all_family_todos(current_member):
    if current_member.family_id == None:
        return make_response({"message": "Not part of a family."}, 400)

    try:
        Todos = TodoItem.query.filter_by(family_id=current_member.family_id).all()
        return make_response({"Family Todos": [todo.serialize for todo in Todos]}, 200)
    except Exception as e:
        return make_response({"message": "Sorry no todo found."}, 400)


@todo_bp.route("/family/create", methods=["POST"])
@token_check
def create_family_todo(current_member):
    data = request.json
    description = data.get("description")
    urgency = data.get("urgency")
    completed = bool(data.get("completed") == 1)

    if not description and urgency:
        return make_response({"message": "Invalid todo. Please complete all fields."})

    try:
        Todo = TodoItem(
            description = description,
            urgency = urgency,
            completed = completed,
            family_id = current_member.family_id,
        )
        db.session.add(Todo)
        db.session.commit()

        return make_response({"message": "Success! Todo has been created"}, 200)
    except Exception as e:
        return make_response({"message": "Opps! Todo can't be created."}, 400)


@todo_bp.route("/update/<id>", methods=["PUT"])
@token_check
def update_todo_by_id(current_member, id):
    data = request.json
    description = data.get("description")
    urgency = data.get("urgency")
    completed = bool(data.get("completed") == 1)
  

    try:

        updateTodo = {
            "description" : description,
            "urgency" : urgency,
            "completed" : completed,
        }
        print(updateTodo)

        TodoItem.query.filter_by(id=id).update(updateTodo)
        db.session.commit()

        return make_response({"message": "Success! Todo has been updated."}, 200)
    except Exception as e:
        print(e)
        return make_response({"message": "Opps! Todo can't be updated."}, 400)


@todo_bp.route("/delete/<id>", methods=["DELETE"])
@token_check
def delete_todo_by_id(current_member, id):
    try:
        todo = TodoItem.query.filter_by(id=id).first()

        db.session.delete(todo)
        db.session.commit()
        return make_response({"message": "Success! Todo was deleted"}, 200)
    except Exception as e:
        return make_response({"message": "todo does not exist."}, 400)
