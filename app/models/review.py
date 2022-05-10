from venv import create
from .db import db

class Review(db.Model):
    __tablename__ = 'reviews'

    id = db.Column(db.Integer(), primary_key=True)
    content = db.Column(db.String(), nullable=False)
    user_id = db.Column(db.Integer(), nullable=False)
    item_id = db.Column(db.Integer(), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),nullable=False)
    updated_at = db.Column(db.DateTime(timezone=True))


    def to_dict(self):
        return {
            'id': self.id,
            'content': self.content,
            'user_id': self.user_id,
            'item_id': self.item_id,
            'created_at':self.created_at,
            'updated_at':self.updated_at,
        }
