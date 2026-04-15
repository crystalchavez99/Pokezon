from app.models import db, User
import datetime


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='Demo User', email='demo@aa.io', password='password',bio='Demo User for Pokezon!',created_at=datetime.datetime(2022, 5, 9, 17, 33, 33))
    viridian = User(
        username='Viridian', email='Viridian@aa.io', password='password',bio='Poké Mart in Viridian City',created_at=datetime.datetime(1996, 2, 27))
    pewter = User(
        username='Pewter', email='Pewter@aa.io', password='password',bio='Poké Mart in Pewter City',created_at=datetime.datetime(1996, 2, 27))
    cerulean = User(
        username='Cerulean', email='Cerulean@aa.io', password='password',bio='Poké Mart in Cerulean City',created_at=datetime.datetime(1996, 2, 27))
    vermilion = User(
        username='Vermilion', email='Vermilion@aa.io', password='password',bio='Poké Mart in Pewter City',created_at=datetime.datetime(1996, 2, 27))
    lavender = User(
        username='Lavender', email='Lavender@aa.io', password='password',bio='Poké Mart in Lavender Town',created_at=datetime.datetime(1996, 2, 27))
    saffron = User(
        username='Saffron', email='Saffron@aa.io', password='password',bio='Poké Mart in Saffron City',created_at=datetime.datetime(1996, 2, 27))
    fuchsia = User(
        username='Fuchsia', email='Fuchsia@aa.io', password='password',bio='Poké Mart in Fuchsia City',created_at=datetime.datetime(1996, 2, 27))
    cinnabar = User(
        username='Cinnabar', email='Cinnabar@aa.io', password='password',bio='Poké Mart in Cinnabar Island',created_at=datetime.datetime(1996, 2, 27))

    db.session.add(demo)
    db.session.add(viridian)
    db.session.add(pewter)
    db.session.add(cerulean)
    db.session.add(vermilion)
    db.session.add(lavender)
    db.session.add(saffron)
    db.session.add(fuchsia)
    db.session.add(cinnabar)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
