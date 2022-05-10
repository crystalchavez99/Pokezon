from app.models import db, Item


# Adds demo items, you can add other items here if you want
def seed_items():
    pokeball = Item(
        name='Poké Ball', image_url='https://static.wikia.nocookie.net/pokemon-fano/images/6/6f/Poke_Ball.png/revision/latest?cb=20140520015336', description='Most basic form of Poké Ball, an item used to catch a wild Pokémon.',user_id=2,price=200,quantity=10,created_at='1996-02-27 00:00:00')

    db.session.add(pokeball)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the items table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
