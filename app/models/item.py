from .db import db


# Create model of Item
class Item(db.Model):
    __tablename__ = 'items'

    id = db.Column(db.Integer(), primary_key=True)
    name = db.Column(db.String(40), nullable=False)
    image_url = db.Column(db.String(255), nullable=False)
    description = db.Column(db.String())
    user_id = db.Column(db.Integer(), db.ForeignKey('users.id'),nullable=False, )
    price = db.Column(db.Integer(), nullable=False)
    quantity = db.Column(db.Integer(), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),nullable=False)

    user = db.relationship('User',back_populates='items',foreign_keys=[user_id])
    reviews = db.relationship('Review',back_populates='item',cascade="all,delete",primaryjoin="Item.id==Review.item_id")



    def to_dict(self):
        return {
            'id': self.id,
            'name': self.name,
            'image_url': self.image_url,
            'description': self.description,
            'user_id': self.user_id,
            'price': self.price,
            'quantity': self.quantity,
            'created_at':self.created_at
        }
