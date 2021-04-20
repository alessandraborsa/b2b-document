import React, { useState, useEffect } from 'react';
import classes from './HomePage.module.css';
import InvoicesView from './InvoicesView/InvoicesView';
import Button from './Button/Button';
import Title from './Title/Title';
import axios from 'axios';
import PageButton from './PageButton/PageButton';

const HomePage = () => {

    const [documents, setDocuments] = useState([]);
    const [pageDx, setPageDx] = useState(0);
    const [pageSx, setPageSx] = useState(0);
    // const [notifications, setNotifications] = useState([]);
    
    let numPage = 0;

    // const showNotifications = (id) => {
    //     setNotifications(documents[id - 1].listNotifications);
        
    // }

    useEffect(() => {
        axios.get('http://localhost:8080/api/document/all?first_doc=' + 0 + '&last_doc=20')
                .then(response => {
                    console.log(response)
                    
                    setDocuments(response.data);
                    setPageDx(pageDx + 20);
                    numPage = 1;

                });
    }, []);

    const switchHandler = (param) => {
        
        if (param == '>') {
            
            axios.get('http://localhost:8080/api/document/all?first_doc=' + pageDx + '&last_doc=20')
                .then(response => {
                    
                    console.log(response)
                    
                    setDocuments(response.data);
                    setPageDx(pageDx + 20)
                    setPageSx(pageDx - 20);
                    numPage = (pageDx/20 + 1);
                    console.log('pagedx' + pageDx);
                    console.log('pagesx' + pageSx);
                    console.log('numpage ' + numPage);

                });
        } 
        if (param == '<') {
            
            axios.get('http://localhost:8080/api/document/all?first_doc=' + pageSx + '&last_doc=20')
                .then(response => {
                    console.log(response)
                    
                    setDocuments(response.data);
                    setPageDx(pageSx +20);
                    setPageSx(pageSx - 20);
                    numPage = (pageSx/20 + 1);
                    console.log('pagedx' + pageDx);
                    console.log('pagesx' + pageSx);
                    console.log('numpage ' + numPage);

                });
        }

    }

    return (
        <div className={classes.homePage}>
            <Title />
            <div className={classes.bodyHome}>
                <Button btn={"<"} click={() => switchHandler('<')}/>
                <InvoicesView documents={documents} />
                <Button btn={">"} click={() => switchHandler('>')}/>
            </div>
            <PageButton />
            
        </div>
    )
};

export default HomePage;