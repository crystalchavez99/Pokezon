from app.models import db, Review


# Adds a demo review, you can add other reviews here if you want
def seed_reviews():
    demo = Review(
        content='recommended for new trainers', user_id=1,item_id=1,created_at='2022-05-09 17:33:33')

    db.session.add(demo)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the reviews table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_reviews():
    db.session.execute('TRUNCATE reviews RESTART IDENTITY CASCADE;')
    db.session.commit()
