from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Family(db.Model):
    __tablename__ = "Family"
    id = db.Column(db.Integer, primary_key=True)
    family_name = db.Column(db.String(150), nullable=False)   
    members = db.relationship("Member", backref="Family", lazy=True)
    todos = db.relationship("TodoItem", backref="Family", lazy=True)

    @property
    def serialize(self):
        return {
            "id": self.id,
            "family_name": self.family_name,
            "members": self.members,
            "todos": self.todos
        }

class Member(db.Model):
    __tablename__ = "Member"
    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(150), nullable=False) 
    last_name = db.Column(db.String(150), nullable=False)   
    password = db.Column(db.String(250), nullable=False)   
    email = db.Column(db.String(250), unique=True, nullable=False)   
    age = db.Column(db.Integer, nullable=False)   
    todos = db.relationship("TodoItem", backref="Member", lazy=True)
    family_id = db.Column(db.Integer, db.ForeignKey("Family.id"), nullable=True)

    @property
    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "family_id" : self.family_id,       
        }
    

class TodoItem(db.Model):
    __tablename__ = "TodoItem"
    id = db.Column(db.Integer, primary_key=True)
    description = db.Column(db.Text, nullable=False) 
    urgency = db.Column(db.String(150), nullable=False)   
    completed = db.Column(db.Boolean, nullable=False)   
    member_id = db.Column(db.Integer, db.ForeignKey("Member.id"), nullable=True)   
    family_id = db.Column(db.Integer, db.ForeignKey("Family.id"), nullable=True)   
    
    @property
    def serialize(self):
        return {
            "id": self.id,
            "description": self.description,
            "urgency": self.urgency,
            "completed": self.completed,
            "family_id": self.family_id,
            "member_id": self.member_id            
        }