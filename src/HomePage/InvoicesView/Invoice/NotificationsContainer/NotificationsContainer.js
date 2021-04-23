import React from 'react';
import Notification from './Notification/Notification';

const notificationsContainer = (props) => {
    return (
        <>
        <tr className="notification">
            <td><b>id</b></td>
            <td><b>fileName</b></td>
            <td><b>notificationDate</b></td>
            <td><b>refIdDoc</b></td>
        </tr>
        {props.notifications.map(not => (<Notification notification={not}/>))}
    </>
    )
}
   
export default notificationsContainer;

