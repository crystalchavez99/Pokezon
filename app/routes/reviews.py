import datetime
from flask import Blueprint, request
from flask_login import current_user
from app.models import Review,db
from app.api.auth_routes import validation_errors_to_error_messages
from app.forms.new_review_form import NewReview

review_routes = Blueprint('reviews',__name__,url_prefix="/reviews")

@review_routes.route('/')
def reviews():
    reviews = Review.query.all()
    return {'reviews' : [review.to_dict() for review in reviews]}

@review_routes.route('/<int:id>',methods=["GET","POST"])
def single_review(id):
    review = Review.query.get(id)
    return review.to_dict()


@review_routes.route('/<int:id>',methods=["DELETE"])
def remove_review(id):
    review = Review.query.get(id)
    db.session.delete(review)
    db.session.commit()
    return review.to_dict()
