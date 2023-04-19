import api.domain.user.repository as Repository
import bcrypt

def create_user(new_user):
   if new_user['username'] is  None or new_user['username'] == "":
       return{ "msg" : "El campo usuario debe estar completo", "error": True,"status": 400}
   if new_user['email'] is  None or new_user['email'] == "":
      return{ "msg" : "El campo email debe estar completo", "error": True,"status": 400}
   if new_user['password'] is  None or new_user['password'] == "":
      return{ "msg" : "El campo contraseña no puede estar vacío", "error": True,"status": 400}
   hashed = bcrypt.hashpw(new_user['password'].encode(), bcrypt.gensalt(14))      # primero enconde a  la contraseña /bytes ya indicamos que este hash ocupa la posicion password
   return Repository.create_user(new_user['username'], new_user['email'], hashed.decode()) # la contraseña se añade despues con decode

def login(body):
   user = Repository.get_user_by_email(body['email'])
   if user is None :
      return {"msg":"El email no existe", "error":True,"status":400}