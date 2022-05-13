from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField,SubmitField
from wtforms.validators import DataRequired,Length
from app.models import Item

# Form to create a new instance of item
class NewItem(FlaskForm):
    name = StringField('name',validators=[DataRequired(),Length(max=40)])
    image_url = StringField('image_url',validators=[DataRequired(),Length(max=255)])
    description = StringField('description')
    price = IntegerField('price',validators=[DataRequired()])
    quantity = IntegerField('quantity',validators=[DataRequired()])
    submit = SubmitField('submit')
