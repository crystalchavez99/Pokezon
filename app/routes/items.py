import datetime
from flask import Blueprint, request
from flask_login import current_user
from app.forms.new_item_form import NewItem
from app.models.db import db
from app.models import Item,Review
from app.api.auth_routes import validation_errors_to_error_messages
from app.forms.new_review_form import NewReview

item_routes = Blueprint('items', __name__)

# get all items
@item_routes.route('/')
def items():
    items = Item.query.all()
    return {'items': [item.to_dict() for item in items]}

# get one item
@item_routes.route('/<int:id>')
def single_item(id):
    item = Item.query.get(id)
    return item.to_dict()

# post an item
@item_routes.route('/add_item', methods=["GET","POST"])
def add_item():
    user_id = current_user.id
    form = NewItem()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        item = Item(name=form.data["name"],
            image_url=form.data["image"],
            description=form.data["description"],
            price=form.data["price"],
            quantity=form.data["quantity"],
            user_id=user_id,
            created_at=datetime.datetime.now()
        )
        db.session.add(item)
        db.session.commit()
        return item.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)},401

@item_routes.route('/<int:id>',methods=["PUT"])
def update_item(id):
    item = Item.query.get(id)
    form = NewItem()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        item.name=form["name"].data
        item.image_url=form["image"].data
        item.description=form["description"].data
        item.price=form["price"].data
        item.quantity=form["quantity"].data
        db.session.commit()
        return item.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)},401


@item_routes.route('/<int:id>',methods=["DELETE"])
def remove_item(id):
    item = Item.query.get(id)
    db.session.delete(item)
    db.session.commit()
    return item.to_dict()


@item_routes.route('/<int:id>/add_review',methods=["POST"])
def add_review(id):
    form = NewReview()
    form['csrf_token'].data = request.cookies['csrf_token']
    user_id = current_user.id
    item_id = id
    if form.validate_on_submit():
        review = Review(content=form["content"].data,user_id=user_id,
        item_id = item_id,
        created_at=datetime.datetime.now())
        db.session.add(review)
        db.session.commit()
        return review.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)},401
