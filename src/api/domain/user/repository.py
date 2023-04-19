from api.models.index import db, User

def create_user(username,email,password):
    new_user = User(email,password,username)
    db.session.add(new_user)
    db.session.commit()
    return new_user

def get_user_by_email(email):
   return User.query.filter_by(email = email).one()  # solo trae uno no trae la lista entera de correos