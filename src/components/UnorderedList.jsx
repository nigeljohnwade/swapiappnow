import React from 'react';

const UnorderedList = (props) => {
    return (
        <ul>
            {
                props.items && props.items.map((item) => {
                    return (
                        <li key={item.key}>{item.listItem}</li>
                    )
                })
            }
        </ul>
    )
}

const areEqual = (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
}

export default React.memo(UnorderedList, areEqual);