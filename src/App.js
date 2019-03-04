import React, {
    Component
} from 'react';

import People from './People';
import Films from './Films';
import { PeopleContext } from './PeopleContext';
import { FilmsContext } from './FilmsContext';
import { PlanetsContext } from './PlanetsContext';
import { StarshipsContext } from './StarshipsContext';
import { SpeciesContext } from './SpeciesContext';
import { VehiclesContext } from './VehiclesContext';
import './App.css';
import {
    getPeople,
    getPlanets,
    getStarships,
    getVehicles,
    getFilms,
    getSpecies,
} from './api/starWars';
import Section from './components/Section';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            people: {
                next: null
            },
            films: {
                next: null
            }
        };
    }

    componentDidMount() {
        getPeople().then(data => this.setState({ people: data }));
        getPlanets().then(data => this.setState({ planets: data }));
        getStarships().then(data => this.setState({ planets: data }));
        getVehicles().then(data => this.setState({ vehicles: data }));
        getFilms().then(data => this.setState({ films: data }));
        getSpecies().then(data => this.setState({ species: data }));
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.state.people && prevState.people && (this.state.people.next !== prevState.people.next) && this.state.people.next !== null) {
            getPeople(this.state.people.next).then(data => this.setState({
                people: {
                    count: data.count,
                    next: data.next,
                    results: data.results.concat(this.state.people.results)
                }
            }));
        }
        if (this.state.films && prevState.films && (this.state.films.next !== prevState.films.next) && this.state.films.next !== null) {
            getPeople(this.state.films.next).then(data => this.setState({
                films: {
                    count: data.count,
                    next: data.next,
                    results: data.results.concat(this.state.films.results)
                }
            }));
        }
    }

    render() {
        const {
            people,
            planets,
            starships,
            vehicles,
            films,
            species,
        } = this.state;

        return (
            <div className="App">
                <FilmsContext.Provider value={films}>
                    <Section
                        section={{
                            name: "Films",
                            count: films.count,
                            items: films.results && films.results.map((item) => {
                                return {
                                    key: item.url,
                                    listItem: item.title,
                                }
                            })
                        }} />
                </FilmsContext.Provider>
                <PeopleContext.Provider value={people}>
                    <Section
                        section={{
                            name: "Peope",
                            count: people.count,
                            items: people.results && people.results.map((item) => {
                                return {
                                    key: item.url,
                                    listItem: item.name,
                                }
                            })
                        }} />
                </PeopleContext.Provider>
                {/* <PlanetsContext.Provider value={planets}>
                        {planets &&
                            <p>Data about all {planets.count} star wars planets</p>
                        }
                    </PlanetsContext.Provider>
                    <StarshipsContext.Provider value={starships}>
                        {starships &&
                            <p>Data about all {starships.count} star wars starships</p>
                        }
                    </StarshipsContext.Provider>
                    <VehiclesContext.Provider value={vehicles}>
                        {vehicles &&
                            <p>Data about all {vehicles.count} star wars vehicles</p>
                        }
                    </VehiclesContext.Provider>
                    <SpeciesContext.Provider value={species}>
                        {species &&
                            <p>Data about all {species.count} star wars species</p>
                        }
                    </SpeciesContext.Provider> */}
            </div>
        );
    }
}

export default App;
