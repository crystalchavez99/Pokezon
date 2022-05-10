from app.models import db, User


# Adds a demo user, you can add other users here if you want
def seed_users():
    Demo = User(
        username='Demo', email='demo@aa.io', password='password',bio='Demo User for Pokezon!',created_at='2022-05-09 17:33:33')
    Viridian = User(
        username='Viridian', email='Viridian@aa.io', password='password',bio='Poké Mart in Viridian City',created_at='1996-02-27 00:00:00')
    Pewter = User(
        username='Pewter', email='Pewter@aa.io', password='password',bio='Poké Mart in Pewter City',created_at='1996-02-27 00:00:00')

    db.session.add(Demo)
    db.session.add(Viridian)
    db.session.add(Pewter)

    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_users():
    db.session.execute('TRUNCATE users RESTART IDENTITY CASCADE;')
    db.session.commit()
