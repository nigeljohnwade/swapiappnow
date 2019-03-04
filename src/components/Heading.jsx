import React, { Fragment } from 'react';

const Heading = (props) => {
    return (
        <Fragment>
            {
                props.src &&
                <img src={props.src} alt="*" />
            }
            <h1>{props.headingText}</h1>
            {
                props.headingSubText &&
                <p className="sub-heading">{props.headingSubText}</p>
            }
        </Fragment>
    )
}

const areEqual = (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export default React.memo(Heading, areEqual);