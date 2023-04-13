"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

api = Blueprint('api', __name__)


@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200


@api.route('/user/register',methods=['POST'])
def register_user():
    try:
        body = request.get_json()
        hashed = bcrypt.hashpw(body['password'].encode(), bcrypt.gensalt(14))
    # print("CONSTRASEÑA HASHEADA",hashed)
        new_user= User(email = body['email'], password = hashed.decode())
    # print("EN EL USUARIO", new_user.password)
        db.session.add(new_user)
        db.session.commit()
        return jsonify(new_user.serialize())
    except Exception as error:
        print("EN EL ERROR",error)
        return jsonify("El email ya existe weon!") , 400


@api.route('/user/login', methods=['POST'])
def login_user():
    body = request.get_json()
    user = db.session.query(User).filter(User.email == body['email']).one()
    if bcrypt.checkpw(body['password'].encode(), user.password.encode()):
        create_token = create_access_token(identity = user.serialize())
        return jsonify(create_token),200
    else:
        return jsonify(("Acceso denegado, al token my rey!"))



@api.route('/user/private/<int:id>', methods =['GET'])
@jwt_required()
def get_user_private(id):
    user = User.query.get(id)
    return jsonify(user.serialize()),200