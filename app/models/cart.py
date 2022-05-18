from .db import db

class Cart(db.Model):
    __tablename__ = 'carts'

    id = db.Column(db.Integer(), primary_key=True)
    content = db.Column(db.String(500), nullable=False)
    user_id = db.Column(db.Integer(), db.ForeignKey('users.id'),nullable=False)
    item_id = db.Column(db.Integer(), db.ForeignKey('items.id'),nullable=False)
    quantity = db.Column(db.Integer(), nullable=False)

    user = db.relationship('User',back_populates='carts',foreign_keys=[user_id])
    items = db.relationship('Item',back_populates='carts',foreign_keys=[item_id])

    def to_dict(self):
        return {
            'id': self.id,
            'user_id': self.user_id,
            'item_id': self.item_id,
            'quantity': self.quantity,
            'items': [item.to_dict() for item in self.items]
        }
