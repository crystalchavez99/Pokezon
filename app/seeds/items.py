from app.models import db, Item


# Adds demo items, you can add other items here if you want
def seed_items():
    pokeball = Item(
        name='Poké Ball', image_url='https://res.cloudinary.com/dreambssd/image/upload/v1652381669/i_old_poke-ball_1_oorczr.png', description='Most basic form of Poké Ball, an item used to catch a wild Pokémon.',user_id=2,price=200,quantity=10,created_at='1996-02-27 00:00:00')
    potion = Item(
        name='Potion', image_url='https://res.cloudinary.com/dreambssd/image/upload/v1652381780/potion_1_ol5gp7.png', description="It can be used to restore a Pokémon's HP",user_id=2,price=300,quantity=10,created_at='1996-02-27 00:00:00')
    antidote = Item(
        name='Antidote', image_url='https://res.cloudinary.com/dreambssd/image/upload/v1652381834/antidote_1_a0rrgv.png', description="It cures a Pokémon of poison.",user_id=2,price=100,quantity=10,created_at='1996-02-27 00:00:00')
    paralyzeheal = Item(
        name='Paralyze Heal', image_url='https://res.cloudinary.com/dreambssd/image/upload/v1652383291/paralyze-heal_1_hd5sp0.png', description="It can be used to cure a Pokémon from paralysis.",user_id=2,price=200,quantity=10,created_at='1996-02-27 00:00:00')
    burnheal = Item(
        name='Burn Heal', image_url='https://res.cloudinary.com/dreambssd/image/upload/v1652383874/burn-heal_1_q72izd.png', description="It cures a Pokémon from a burn.",user_id=2,price=250,quantity=10,created_at='1996-02-27 00:00:00')

    db.session.add(pokeball)
    db.session.add(potion)
    db.session.add(antidote)
    db.session.add(paralyzeheal)
    db.session.add(burnheal)


    db.session.commit()


# Uses a raw SQL query to TRUNCATE the items table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_items():
    db.session.execute('TRUNCATE items RESTART IDENTITY CASCADE;')
    db.session.commit()
