import React from 'react';
import classes from './Button.module.css';

const button = (props) => (
    <button onClick={props.click}className={classes.button}>{props.btn}</button>
);

export default button;