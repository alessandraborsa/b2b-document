import React from 'react';
import './Notification.css'

const notification = (props) => (
    <>
    <tr className="notification">
        <td><b>id</b></td>
        <td><b>fileName</b></td>
        <td><b>notificationDate</b></td>
        <td><b>refIdDoc</b></td>
    </tr>
        <tr className="notification">
        <td>{props.notification.idNotification}</td>
        <td>{props.notification.fileName}</td>
        <td>{props.notification.notificationDate}</td>
        <td>{props.notification.refIdDocument}</td>
    </tr>
    </>
)

export default notification;