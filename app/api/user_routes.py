from flask import Blueprint,request
from app.models import User
from app.models.db import db
from app.forms.signup_form import EditSignUpForm, SignUpForm
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
    form = EditSignUpForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        user.username=form["username"].data
        user.bio=form["bio"].data
        db.session.commit()
        return user.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)},401
