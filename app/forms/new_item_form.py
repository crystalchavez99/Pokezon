from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField,SubmitField
from wtforms.validators import DataRequired,Length,NumberRange
from app.models import Item

# Form to create a new instance of item
class NewItem(FlaskForm):
    name = StringField('name',validators=[DataRequired(),Length(max=40)])
    image_url = StringField('image_url',validators=[DataRequired(),Length(max=255)])
    description = StringField('description',validators=[DataRequired(),Length(max=500)])
    price = IntegerField('price',validators=[DataRequired(),NumberRange(min=1)])
    quantity = IntegerField('quantity',validators=[DataRequired(),NumberRange(min=1)])
    submit = SubmitField('submit')
