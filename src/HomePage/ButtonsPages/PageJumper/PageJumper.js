import React from 'react';

const pageJumper = (props) => {
    return (
        <button onClick={props.click}>{props.btn}</button>
    )
}

export default pageJumper;