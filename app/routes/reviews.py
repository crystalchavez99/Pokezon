import datetime
from flask import Blueprint, request
from flask_login import current_user
from app.models import Review,db
from app.api.auth_routes import validation_errors_to_error_messages

review_routes = Blueprint('reviews',__name__,url_prefix="/reviews")

@review_routes.route('/')
def reviews():
    reviews = Review.query.all()
    return {'reviews' : [review.to_dict() for review in reviews]}
