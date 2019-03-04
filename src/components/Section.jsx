import React, { Fragment } from 'react';

import Heading from './Heading';
import UnorderedList from './UnorderedList';

const Section = (props) => {
    const { section } = props;

    return (
        <Fragment>
            <Heading
                headingText={section.name}
                headingSubText={section.count ? `Data about all ${section.count} star wars films` : null}
            />
            {
                section.items &&
                <UnorderedList items={section.items} />
            }
        </Fragment>
    )

}

export default Section;