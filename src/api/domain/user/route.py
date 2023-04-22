from flask import Flask, request, jsonify, url_for, Blueprint
from api.models.index import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager, get_jwt
import api.domain.user.controller as Controller

api = Blueprint('api/user', __name__)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/register', methods=['POST'])
def create_user():
        body = request.get_json()
        new_user = Controller.create_user(body)    
        if isinstance(new_user, User):   # si el nuevo usuario es una instancia del model USER (pertenece?) responde un serializado si no ,responde el mensaje de error
            return jsonify(new_user.serialize()), 200
        return jsonify(new_user)
      
   


@api.route('/login', methods=['POST'])
def login_user():
    body = request.get_json()
    token = Controller.login(body)
    if token.get('token'):
        return jsonify(token), 200
    return jsonify(token), token['status']


@api.route('/private', methods =['GET'])
@jwt_required()
def get_user_private():
    info_token = get_jwt()
    user = info_token['sub']
    user_response = Controller.get_user_private(user)
    if isinstance(user_response, User):   # si el nuevo usuario es una instancia del model USER (pertenece?) responde un serializado si no ,responde el mensaje de error
        return jsonify(user_response.serialize()), 200
    return jsonify(user_response), user_response['status']