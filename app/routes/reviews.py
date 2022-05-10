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

@review_routes.route('/<int:id>')
def single_review(id):
    review = Review.query.get(id)
    return review.to_dict()

@review_routes.route('/<int:id>/add_review',methods=["POST"])
def add_review(item_id):
    form = NewReview()
    form['csrf_token'].data = request.cookies['csrf_token']
    user_id = current_user.id
    item_id = item_id
    if form.validate_on_submit():
        review = Review(content=form["content"].data,user_id=user_id,
        item_id = item_id,
        created_at=datetime.datetime.now())
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)},401
