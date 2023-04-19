from api.models.db import db

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(200), unique=False, nullable=False)
    is_active = db.Column(db.Boolean(), unique=False, nullable=False)


    def __init__(self,email,password,username):
        self.email = email
        self.password = password
        self.username = username
        self.is_active = True  


    def serialize(self):
        return {
            "id": self.id,
            "username":self.username,
            "email": self.email,
           
            # do not serialize the password, its a security breach
        }

 
        