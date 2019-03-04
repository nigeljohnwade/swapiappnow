import React from 'react';

export const FilmsContext = React.createContext({});

export function withFilms(Component) {
    return function connectedComponent(props) {
        return (
            <FilmsContext.Consumer>
                {(films) => <Component {...props} films={films} />}
            </FilmsContext.Consumer>
        )
    }
}