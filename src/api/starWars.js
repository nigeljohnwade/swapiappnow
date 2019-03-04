const routes = {
    "people": "https://swapi.co/api/people/",
    "planets": "https://swapi.co/api/planets/",
    "species": "https://swapi.co/api/species/",
    "starships": "https://swapi.co/api/starships/",
    "vehicles": "https://swapi.co/api/vehicles/",
    "films": "https://swapi.co/api/films/",
};

const getData = (url) => {
    return fetch(url, { method: 'GET' })
        .then(response => response.json())
        .then(data => data);
}

export const getPeople = (url = routes.people) => {
    return getData(url)
}

export const getPlanets = () => {
    return getData(routes.planets);
}

export const getSpecies = () => {
    return getData(routes.species);
}

export const getStarships = () => {
    return getData(routes.starships);
}

export const getVehicles = () => {
    return getData(routes.vehicles);
}

export const getFilms = () => {
    return getData(routes.films);
}