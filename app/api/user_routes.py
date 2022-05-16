from flask import Blueprint,request
from app.models import User
from app.models.db import db
from app.forms.signup_form import EditBio, EditUsername, SignUpForm
from app.api.auth_routes import validation_errors_to_error_messages

user_routes = Blueprint('users', __name__)


@user_routes.route('/')
def users():
    users = User.query.all()
    return {'users': [user.to_dict() for user in users]}


@user_routes.route('/<int:id>')
def user(id):
    user = User.query.get(id)
    return user.to_dict()

@user_routes.route('/<int:id>',methods=["PUT"])
def update_user(id):
    user = User.query.get(id)
    usernameform = EditUsername()
    bioform = EditBio()
    usernameform['csrf_token'].data = request.cookies['csrf_token']
    bioform['csrf_token'].data = request.cookies['csrf_token']
    if(user.username == usernameform["username"].data):
        if(bioform.validate_on_submit()):
            user.bio=bioform["bio"].data
            db.session.commit()
            return user.to_dict()
        user.username=usernameform["username"].data
        db.session.commit()
        return user.to_dict()
    elif (usernameform.validate_on_submit()):
        user.username=usernameform["username"].data
        db.session.commit()
        return user.to_dict()
    elif usernameform.errors:
        return {"errors": validation_errors_to_error_messages(usernameform.errors)},401
    elif bioform.errors:
        return {"errors": validation_errors_to_error_messages(bioform.errors)},401
