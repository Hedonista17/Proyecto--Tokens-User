import api.domain.user.repository as Repository
import bcrypt
from flask_jwt_extended import create_access_token # PARA PODER CREAR EL TOKEN


def verificar_usuario(new_user):  # funcion de verificaciones para poder usarla en repetidas ocasiones

   if new_user['username'] is  None or new_user['username'] == "":
       return{ "msg" : "El campo usuario debe estar completo", "error": True,"status": 400}
   if new_user['email'] is  None or new_user['email'] == "":
      return{ "msg" : "El campo email debe estar completo", "error": True,"status": 400}
   if new_user['password'] is  None or new_user['password'] == "":
      return{ "msg" : "El campo contraseña no puede estar vacío", "error": True,"status": 400}
   return new_user


def create_user(new_user):
   correct_user = verificar_usuario(new_user)
   if correct_user.get("error") is not None:
      return correct_user
   hashed = bcrypt.hashpw(new_user['password'].encode(), bcrypt.gensalt(14))      # primero enconde a  la contraseña /bytes ya indicamos que este hash ocupa la posicion password
   return Repository.create_user(new_user['username'], new_user['email'], hashed.decode()) # la contraseña se añade despues con decode



def login(body):
   correct_user = verificar_usuario(body)
   if correct_user.get("error") is not None:
      return correct_user
   user = Repository.get_user_by_email(body['email'])
   if user is None :
      return {"msg":"El email no existe", "error":True,"status":404}
   if bcrypt.checkpw(body['password'].encode(), user.password.encode()):    # si la contraseña coincide con lo que le pasamos devuelve el token 
      access_token = create_access_token(identity = user.serialize())
      return {"token": access_token}
   return {"msg":"La contraseña es inválida", "error":True,"status":404} # si la contraseña no es correcta devuelve este mensaje


def get_user_private(user):
    user = Repository.get_user_by_email(user['email'])
    if user is None :
      return {"msg":"El usuario no existe", "error":True,"status":404}
    return user


