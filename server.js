const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());

let poketypes = {
    'normal': {
        'effective': 'none',
        'ineffective': 'rock, steel',
        'no effect': 'ghost',
    },
    'fire': {
        'effective': 'grass, ice, bug, steel',
        'ineffective': 'fire, water, rock, dragon',
        'no effect': 'none',
    },
    'water': {
        'effective': 'fire, ground, rock',
        'ineffective': 'water, grass, dragon',
        'no effect': 'none',
    },
    'electric': {
        'effective': 'water, flying',
        'ineffective': 'electric, grass, dragon',
        'no effect': 'ground',
    },
    'grass': {
        'effective': 'water, ground, rock',
        'ineffective': 'fire, grass, poison, flying, bug, dragon, steel',
        'no effect': 'none',
    },
    'ice': {
        'effective': 'grass, ground, flying, dragon',
        'ineffective': 'fire, water, ice, steel',
        'no effect': 'none',
    },
    'fighting': {
        'effective': 'normal, ice, rock, dark, steel',
        'ineffective': 'poinson, flying, psychic, bug, fairy',
        'no effect': 'ghost',
    },
    'poison': {
        'effective': 'grass, fairy',
        'ineffective': 'poison, ground, rock, ghost',
        'no effect': 'steel',
    },
    'ground': {
        'effective': 'fire, electric, poison, rock, steel',
        'ineffective': 'grass, bug',
        'no effect': 'flying',
    },
    'flying': {
        'effective': 'grass, fighting, bug',
        'ineffective': 'electric, rock, steel',
        'no effect': 'none',
    },
    'psychic': {
        'effective': 'fighting, poison',
        'ineffective' : 'psychic, steel',
        'no effect': 'dark',
    },
    'bug': {
        'effective': 'grass, psychic, dark',
        'ineffective': 'fire, fighting, poison, flying, ghost, steel, fairy',
        'no effect': 'none',
    },
    'rock': {
        'effective': 'fire, ice, flying, bug',
        'ineffective': 'fighting, ground, steel',
        'no effect': 'none',
    },
    'ghost': {
        'effective': 'psychic, ghost',
        'ineffective': 'dark',
        'no effect': 'normal',
    },
    'dragon': {
        'effective': 'dragon',
        'ineffective': 'steel',
        'no effect': 'fairy',
    },
    'dark': {
        'effective': 'psychic, ghost',
        'ineffective': 'fighting, dark, fairy',
        'no effect': 'none',
    },
    'steel': {
        'effective': 'ice, rock, fairy',
        'ineffective': 'fire, water, electric, steel',
        'no effect': 'none',
    },
    'fairy': {
        'effective': 'fighting, dragon, dark',
        'ineffective': 'fire, poison, steel',
        'no effect': 'none',
    },
    'no input': {
        'effective': 'none',
        'ineffective': 'none',
        'no effect': 'none',
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