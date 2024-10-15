/* pokeapi */
/* maak variabele dat verbinding maakt met api daarbij met een random nummer dat genereert dus een random pokedex nummer
daarbij maak ik het zo dat java script het kan lezen daarna doe ik een response waarbij ik de echte data krijg */

const pokemonImg = document.getElementById("js--pokemon-img");

let randomNumber = Math.floor(Math.random() * 1010 + 1); //1 - 1015



let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + randomNumber)

    .then(function (response) {
        return response.json();
    })
    .then(function (realData) {
        pokemonImg.src = realData.sprites.front_default;
    });

const pokemonTekst = document.getElementById("js--pokemon-tekst");
const catchButton = document.getElementById("js--catch-button");

let pokemonGamePlayed = false;

catchButton.onclick = function () {
    if (pokemonGamePlayed === false) {
        let catchNumber = Math.floor(Math.random() * 2); // 1 - 0 dus 50%
        if (catchNumber === 0) {
            pokemonTekst.innerText = "The Wild Pokemon Fled!"
        }
        else {
            pokemonTekst.innerText = "You Caught The Wild Pokemon!"
        }
        pokemonGamePlayed = true;
    }
}

//important ^^^
//lees goed want belangrijk ^

//movie api
const movieImg = document.getElementById("js--movie-img");
const desc = document.getElementById("js--desc");

fetch("https://api.tvmaze.com/search/shows?q=breaking")
    .then(function (response) {
        return response.json();
    })
    .then(function (realData) {
        const show = realData[0].show;
        desc.innerHTML = show.summary;
        movieImg.src = show.image.medium;
        movieImg.alt = show.name;
    });


//API Age Predictor
// inputField.value update dus wat er allemaal in de input is geschreven
const names = document.getElementById("js--name");
const inputField = document.getElementById("js--input");

inputField.onkeyup = function (event) {
    if (event.keyCode === 13) {
        let name = inputField.value;

        let age = fetch("https://api.agify.io/?name=" + name)
            .then(function (response) {
                return response.json();
            })
            .then(function (realData) {
                inputField.style.display = "none";
                names.innerText = realData.age;
            });
    }
}


/* Graph 1 */

const labels = [
    "maandag",
    "dinsdag",
    "woensdag",
    "donderdag",
    "vrijdag",
    "zaterdag",
    "zondag"
];

const data = {
    labels: labels,
    datasets: [
        {
            label: "uren geslapen afgelopen week",
            data: [5, 6, 6, 8, 4, 5, 8],
            backgroundColor: ['#ee1515', '#eee', '#ee1515', '#eee', '#ee1515', '#eee', '#ee1515']
        }
    ]
}


const config = {
    type: 'line',
    data: data,
}
new Chart(document.getElementById("js--chart--1"), config);


/* Pokemon */

function getPokemon() {

    let normal = 0, fighting = 0, flying = 0, poison = 0, ground = 0, rock = 0, bug = 0,
        ghost = 0, steel = 0, fire = 0, water = 0, grass = 0, electric = 0, psychic = 0,
        ice = 0, dragon = 0, dark = 0, fairy = 0, unknown = 0, shadow = 0;

    const labels = ['normal', 'fighting', 'flying', 'poison', 'ground', 'rock', 'bug',
        'ghost', 'steel', 'fire', 'water', 'grass', 'electric', 'psychic',
        'ice', 'dragon', 'dark', 'fairy', 'unknown', 'shadow'];

    for (i = 0; i < 100; i++) {
        let random = Math.floor(Math.random() * 500 + 1);
        let pokemon = fetch("https://pokeapi.co/api/v2/pokemon/" + random)
            .then(function (response) {
                return response.json();
            })
            .then(function (pokemon) {
                switch (pokemon.types[0].type.name) {
                    case 'normal;':
                        normal = normal + 1;
                        break;
                    case 'fighting':
                        fighting = fighting + 1;
                        break;
                    case 'flying':
                        flying = flying + 1;
                        break;
                    case 'poison':
                        poison = poison + 1;
                        break;
                    case 'ground':
                        ground = ground + 1;
                        break;
                    case 'rock':
                        rock = rock + 1;
                        break;
                    case 'bug':
                        bug = bug + 1;
                        break;
                    case 'ghost':
                        ghost = ghost + 1;
                        break;
                    case 'steel':
                        steel = steel + 1;
                        break;
                    case 'fire':
                        fire = fire + 1;
                        break;
                    case 'water':
                        water = water + 1;
                        break;
                    case 'grass':
                        grass = grass + 1;
                        break;
                    case 'electric':
                        electric = electric + 1;
                        break;
                    case 'psychic':
                        psychic = psychic + 1;
                        break;
                    case 'ice':
                        ice = ice + 1;
                        break;
                    case 'dragon':
                        dragon = dragon + 1;
                        break;
                    case 'dark':
                        dark = dark + 1;
                        break;
                    case 'fairy':
                        fairy = fairy + 1;
                        break;
                    case 'unknown':
                        unknown = unknown + 1;
                        break;
                    case 'shadow':
                        shadow = shadow + 1;
                        break;
                }
            }).then(function () {
                dataPokemon.datasets[0].data = [normal, fighting, flying, poison, ground, rock, bug,
                    ghost, steel, fire, water, grass, electric, psychic,
                    ice, dragon, dark, fairy, unknown, shadow];
                graph.update();
            });
    }

    const dataPokemon = {
        labels: labels,
        datasets: [
            {
                label: "Pokemon Types",
                data: [],
                backgroundColor: ['#FF1818', '#FFC300', '#ddd', '#5463FF', '2E3840']
            }
        ]
    }

    const configPokemon = {
        type: 'bar',
        data: dataPokemon,
    }



    const graph = new Chart(document.getElementById("js--chart--2"), configPokemon);

}

getPokemon();

const config2 = {
    type: 'bar',
    data2: data,
}

/* Data naar mijn keuze */


let moves = fetch('https://pokeapi.co/api/v2/move/?limit=1000')
    .then(function (response) {
        return response.json();
    })
    .then(function (movesData) {
        const moves = movesData.results;
        const randomIndex = Math.floor(Math.random() * moves.length);
        const moveName = moves[randomIndex].name;

        return fetch('https://pokeapi.co/api/v2/move/' + moveName);
    })
    .then(function (response) {
        return response.json();
    })
    .then(function (moveData) {
        const moveName = moveData.power;
        const movePower = moveData.power;

        const movePowerchart = new Chart(document.getElementById("js--chart--3"), {
            type: 'bar',
            data: {
                labels: [moveName],
                datasets: [{
                    label: "Pokemon Move Power",
                    data: [movePower],
                    backgroundColor: ['#FF1818', '#FFC300', '#ddd', '#5463FF', '2E3840'],
                    borderColor: ['#4D4D4D']
                }]
            },
            options: {
                scale: {
                    y: {
                        beginAtZero: true,
                        max: 200
                    }
                }
            }
        });
    });

   



