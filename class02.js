1.
use be-mean-pokemons

2.
show dbs

3.
show collections

4.
var pokemons = [
	{
		name: 'Pikachu'
		, description: 'Electric pokémon'
		, attack: 20
		, defense: 5
		, height: 45
		, type: 'electric'
	}
	, {
		name: 'Bulbasaur'
		, description: 'Grass pokémon'
		, attack: 18
		, defense: 15
		, height: 60
		, type: 'grass'
	}
	, {
		name: 'Charizard'
		, description: 'Fire pokémon'
		, attack: 25
		, defense: 10
		, height: 100
		, type: 'fire'
	}
	, {
		name: 'Squirtle'
		, description: 'Water pokémon'
		, attack: 15
		, defense: 8
		, height: 45
		, type: 'water'
	}
	, {
		name: 'Caterpie'
		, description: 'Bug pokémon'
		, attack: 0
		, defense: 20
		, height: 20
		, type: 'bug'
	}
];

db.pokemons.insert(pokemons);

5.
db.pokemons.find({})

6.
var poke = db.pokemons.findOne({ name: 'Pikachu' })

7.
poke.description = 'Awesome eletric pokémon';
db.pokemons.save(poke);


