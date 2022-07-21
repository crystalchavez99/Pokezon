import datetime
from flask import Blueprint, request
from flask_login import current_user
from app.forms.new_item_form import NewItem
from app.models.db import db
from app.models import Item,Review
from app.api.auth_routes import validation_errors_to_error_messages
from app.forms.new_review_form import NewReview

from app.aws3 import (
    upload_file_to_s3, allowed_file, get_unique_filename)

item_routes = Blueprint('items', __name__)

# get all items
@item_routes.route('/')
def items():
    items = Item.query.all()
    return {'items': [item.to_dict() for item in items]}

# get one item
@item_routes.route('/<int:id>',methods=["GET"])
def single_item(id):
    item = Item.query.get(id)
    return item.to_dict()

# post an item
@item_routes.route('/add_item', methods=["POST"])
def add_item():
    user_id = current_user.id
    form = NewItem()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        if "image" not in request.files:
            return {"errors": "image required"}, 400

        image = request.files["image"]
        if not allowed_file(image.filename):
            return {"errors": ['File type not permitted! Only "png", "jpg", "jpeg","webp"']}, 400

        image.filename = get_unique_filename(image.filename)

        upload = upload_file_to_s3(image)
        if "url" not in upload:
            # if the dictionary doesn't have a url key
            # it means that there was an error when we tried to upload
            # so we send back that error message
            return upload, 400

        url = upload["url"]

        item = Item(name=form.data["name"],
            image_url=url,
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
        created_at=datetime.datetime.now().strftime("%x"))
        db.session.add(review)
        db.session.commit()
        print(review.to_dict(), 'REVIEW')
        return review.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)},401
