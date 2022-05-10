import datetime
from flask import Blueprint, request
from flask_login import current_user
from app.forms.new_item_form import NewItem
from app.models import Item,db
from app.api.auth_routes import validation_errors_to_error_messages

item_routes = Blueprint('items', __name__, url_prefix="/items")


@item_routes.route('/')
def items():
    items = Item.query.all()
    return {'items': [item.to_dict() for item in items]}


@item_routes.route('/<int:id>')
def single_item(id):
    item = Item.query.get(id)
    return item.to_dict()


@item_routes.route('/add_item', methods=["POST"])
def add_item():
    form = NewItem()
    form['csrf_token'].data = request.cookies['csrf_token']
    user_id = current_user.id
    if form.validate_on_submit():
        item = Item(name=form["name"].data,
            image_url=form["image_url"].data,
            description=form["description"].data,
            price=form["price"].data,
            quantity=form["quantity"].data,
            user_id=user_id,
            created_at=datetime.datetime.now())
        print('NEW ITEM FOR SALE',item)
        db.session.add(item)
        db.session.commit()
        return item.to_dict()
    return {"errors": validation_errors_to_error_messages(form.errors)},401
