from email.mime import image
from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired, ValidationError
from app.models import Item

class NewItem(FlaskForm):
    name = StringField('name',validators=[DataRequired()])
    image_url = StringField('image_url',validators=[DataRequired()])
    description = StringField('description')
    price = IntegerField('price',validators=[DataRequired()])
    quantity = IntegerField('quantity',validators=[DataRequired()])
