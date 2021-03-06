from .db import db
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import UserMixin


class User(db.Model, UserMixin):
    __tablename__ = 'users'

    id = db.Column(db.Integer(), primary_key=True)
    username = db.Column(db.String(25), nullable=False, unique=True)
    email = db.Column(db.String(255), nullable=False, unique=True)
    bio = db.Column(db.String(255))
    hashed_password = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime(timezone=True),nullable=False)

    items = db.relationship('Item', back_populates='user', cascade="all, delete",primaryjoin="User.id==Item.user_id")
    reviews = db.relationship('Review', back_populates='user', cascade="all, delete",primaryjoin="User.id==Review.user_id")

    @property
    def password(self):
        return self.hashed_password

    @password.setter
    def password(self, password):
        self.hashed_password = generate_password_hash(password)

    def check_password(self, password):
        return check_password_hash(self.password, password)

    def to_dict(self):
        return {
            'id': self.id,
            'username': self.username,
            'email': self.email,
            'bio': self.bio,
            'created_at':self.created_at
        }
