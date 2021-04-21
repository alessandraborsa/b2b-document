import React from 'react';
import './PageButton.css';

const pageButton = (props) => (
    <button onClick={props.click}>{props.numPage}</button>
);

export default pageButton;