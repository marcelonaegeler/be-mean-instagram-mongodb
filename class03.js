1.
db.pokemons.find({ height: { $lt: 50 } })

2.
db.pokemons.find({ height: { $gte: 50 } })

3.
db.pokemons.find({ height: { $and: [ { $lte: 60 }, { type: 'grass' } ] } })

4.
db.pokemons.find({ $or: [ { name: 'Pikachu' }, { attack: { $lte: 15 } } ] })

5.
db.pokemons.find({ $and: [ { attack: { $gte: 20 } }, { height: { $lte: 50 } } ] })
