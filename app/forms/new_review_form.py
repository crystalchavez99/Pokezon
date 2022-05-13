from flask_wtf import FlaskForm
from wtforms import StringField,SubmitField
from wtforms.validators import DataRequired,Length
from app.models import Review

# Form to create a new instance of review
class NewReview(FlaskForm):
    content = StringField('content',validators=[DataRequired(),Length(max=500)])
    submit = SubmitField('submit')
