import classes from './Invoice.module.css';
import React, { useState } from 'react';
import NotificationsContainer from './NotificationsContainer/NotificationsContainer';
import axios from 'axios';

const Invoice = (props) => {
    const [notifications, setNotifications] = useState([]);
    const [show, setShow] = useState(false);
    
    const showNotifications = () => {
        setShow(!show);
        axios.get('http://localhost:8080/api/notification/find?document_id=' + props.id)
            .then(response => {
                setNotifications(response.data);
            })
        console.log(notifications);
    }
  
    return (
        <>
            <tr className={classes.invoice}>
                <td>{props.id}</td>
                <td>{props.delDate}</td>
                <td>{props.docDate}</td>
                <td>{props.docNum}</td>
                <td>{props.type}</td>
                <td className={classes.arrow} onClick={() => showNotifications()}>↓</td>
            </tr>
            {(show==true && notifications.length > 0) ? <NotificationsContainer notifications={notifications}/> : null}
        </>
    )
};

export default Invoice;