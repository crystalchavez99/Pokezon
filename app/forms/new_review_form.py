from flask_wtf import FlaskForm
from wtforms import StringField,SubmitField
from wtforms.validators import DataRequired
from app.models import Review

class NewReview(FlaskForm):
    content = StringField('content',validators=[DataRequired()])
    submit = SubmitField('submit')
