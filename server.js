const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

let poketypes = {
    'normal': {
        'effective': 'none',
        'ineffective': 'rock, steel',
        'noEffect': 'ghost',
    },
    'fire': {
        'effective': 'grass, ice, bug, steel',
        'ineffective': 'fire, water, rock, dragon',
        'noEffect': 'none',
    },
    'water': {
        'effective': 'fire, ground, rock',
        'ineffective': 'water, grass, dragon',
        'noEffect': 'none',
    },
    'electric': {
        'effective': 'water, flying',
        'ineffective': 'electric, grass, dragon',
        'noEffect': 'ground',
    },
    'grass': {
        'effective': 'water, ground, rock',
        'ineffective': 'fire, grass, poison, flying, bug, dragon, steel',
        'noEffect': 'none',
    },
    'ice': {
        'effective': 'grass, ground, flying, dragon',
        'ineffective': 'fire, water, ice, steel',
        'noEffect': 'none',
    },
    'fighting': {
        'effective': 'normal, ice, rock, dark, steel',
        'ineffective': 'poinson, flying, psychic, bug, fairy',
        'noEffect': 'ghost',
    },
    'poison': {
        'effective': 'grass, fairy',
        'ineffective': 'poison, ground, rock, ghost',
        'noEffect': 'steel',
    },
    'ground': {
        'effective': 'fire, electric, poison, rock, steel',
        'ineffective': 'grass, bug',
        'noEffect': 'flying',
    },
    'flying': {
        'effective': 'grass, fighting, bug',
        'ineffective': 'electric, rock, steel',
        'noEffect': 'none',
    },
    'psychic': {
        'effective': 'fighting, poison',
        'ineffective' : 'psychic, steel',
        'noEffect': 'dark',
    },
    'bug': {
        'effective': 'grass, psychic, dark',
        'ineffective': 'fire, fighting, poison, flying, ghost, steel, fairy',
        'noEffect': 'none',
    },
    'rock': {
        'effective': 'fire, ice, flying, bug',
        'ineffective': 'fighting, ground, steel',
        'noEffect': 'none',
    },
    'ghost': {
        'effective': 'psychic, ghost',
        'ineffective': 'dark',
        'noEffect': 'normal',
    },
    'dragon': {
        'effective': 'dragon',
        'ineffective': 'steel',
        'noEffect': 'fairy',
    },
    'dark': {
        'effective': 'psychic, ghost',
        'ineffective': 'fighting, dark, fairy',
        'noEffect': 'none',
    },
    'steel': {
        'effective': 'ice, rock, fairy',
        'ineffective': 'fire, water, electric, steel',
        'noEffect': 'none',
    },
    'fairy': {
        'effective': 'fighting, dragon, dark',
        'ineffective': 'fire, poison, steel',
        'noEffect': 'none',
    },
    'no input': {
        'effective': 'none',
        'ineffective': 'none',
        'noEffect': 'none',
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
})

app.get('/api/:type', (request, response) => {
    const pokemonType = request.params.type.toLowerCase();
    if(poketypes[pokemonType]) {
        response.json(poketypes[pokemonType])
    } else {
        response.json(poketypes['no input'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Listening on port ${PORT}.`)
})