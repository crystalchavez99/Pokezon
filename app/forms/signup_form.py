from flask_wtf import FlaskForm
from wtforms import StringField,TextAreaField
from wtforms.validators import DataRequired,Length, Email, ValidationError
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')
def username_exists_update(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    print('user========================',user.to_dict())
    print('username========================',username)
    print('form========================',form)
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists])
    bio = TextAreaField(
        'bio', validators=[Length(max=255)])
    email = StringField('email', validators=[DataRequired(), user_exists,Email("This field requires a valid email address")],)
    password = StringField('password', validators=[DataRequired()])
class EditSignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists_update])
    bio = TextAreaField(
        'bio', validators=[Length(max=255)])
