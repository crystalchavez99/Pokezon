from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField,SubmitField,TextAreaField
from wtforms.validators import DataRequired,Length,NumberRange



# Form to create a new instance of item
class NewItem(FlaskForm):
    name = StringField('name',validators=[DataRequired(),Length(min=4,max=40), ])
    image = StringField('image',validators=[DataRequired()])
    description = TextAreaField('description',validators=[DataRequired(),Length(min=10,max=500)])
    price = IntegerField('price',validators=[DataRequired(),NumberRange(min=1)])
    quantity = IntegerField('quantity',validators=[DataRequired(),NumberRange(min=1)])
    submit = SubmitField('submit')
