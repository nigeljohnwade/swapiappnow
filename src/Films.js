import React, { Fragment } from 'react';

import { withFilms } from './FilmsContext';
import Heading from './components/Heading';
import UnorderedList from './components/UnorderedList';

const Films = (props) => {
    return (
        <Fragment>
            <Heading
                headingText="Films"
                headingSubText={props.films.count ? `Data about all ${props.films.count} star wars films` : null}
            />
            {
                props.films.results &&
                <UnorderedList items={props.films.results.map((item) => {
                    return {
                        key: item.url,
                        listItem: item.title,
                    }
                })} />
            }
        </Fragment>
    )

}

export default withFilms(Films);