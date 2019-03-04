import React, { Fragment } from 'react';

import { PeopleContext } from './PeopleContext';
import Heading from './components/Heading';
import UnorderedList from './components/UnorderedList';

class People extends React.Component {
    render() {
        const people = this.context;
        return (
            <Fragment>
                <Heading
                    headingText="People"
                    headingSubText={`Data about all ${people.count} star wars people`}
                />
                {
                    people.results &&
                    <UnorderedList items={people.results.map((item) => {
                        return {
                            key: item.url,
                            listItem: item.name,
                        }
                    })} />
                }
            </Fragment>
        )
    }
}

People.contextType = PeopleContext;
export default People;