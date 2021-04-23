import React from 'react';
import classes from './InvoicesView.module.css';
import Invoice from './Invoice/Invoice';

const InvoicesView = (props) =>  {

    const elements = () => {
        return (
            props.documents.map(doc => (
                <Invoice 
                    key={doc.idDocument}
                    id={doc.idDocument} 
                    delDate={doc.deliveryDate}
                    docDate={doc.documentDate}
                    docNum={doc.documentNumber}
                    type={doc.flowType}
                    />
            ))
        )
    };
        
    return (
        <table className={classes.invoicesView}>
            <tr>
                <th>id</th>
                <th>deliveryDate</th>
                <th>documentDate</th>
                <th>documentNumber</th>
                <th>flowType</th>
            </tr>
                {(props.documents.length > 0 && elements())}
            <p>pag. {props.currentPage}</p>
        </table>
    )
};

export default InvoicesView;