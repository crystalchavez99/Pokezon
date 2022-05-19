from flask_wtf import FlaskForm
from wtforms import StringField,TextAreaField,PasswordField
from wtforms.validators import DataRequired,Length, Email, ValidationError,EqualTo
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



class SignUpForm(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists,Length(min=8,max=25)])
    bio = TextAreaField(
        'bio', validators=[Length(max=255)])
    email = StringField('email', validators=[DataRequired(), user_exists,Email("This field requires a valid email address")],)
    password = PasswordField('password', validators=[DataRequired(),EqualTo('repeatPassword', message='Passwords must match'),Length(min=8,max=25)])
    repeatPassword  = PasswordField('repeatPassword')

class EditUsername(FlaskForm):
    username = StringField(
        'username', validators=[DataRequired(), username_exists,Length(min=8,max=25)])

class EditBio(FlaskForm):
    bio = TextAreaField(
        'bio', validators=[Length(max=255)])
