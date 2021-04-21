import React, { useState, useEffect } from 'react';
import classes from './HomePage.module.css';
import InvoicesView from './InvoicesView/InvoicesView';
import Button from './Button/Button';
import Title from './Title/Title';
import axios from 'axios';
import ButtonsPages from './ButtonsPages/ButtonsPages';

const HomePage = () => {

    const [documents, setDocuments] = useState([]);
    const [pageDx, setPageDx] = useState(0);
    const [pageSx, setPageSx] = useState(0);
    const [countPages, setCountPages] = useState(0);
    
    const fetchAxios = (pageFetch, pageDx, pageSx) => {axios.get('http://localhost:8080/api/document/all?first_doc=' + pageFetch)
        .then(response => {
            setDocuments(response.data);
            setPageDx(pageDx)
            setPageSx(pageSx);
        });
    };

    useEffect(() => {
        fetchAxios(0, 20, 0);
        axios.get('http://localhost:8080/api/document/count')
            .then(response => {
                setCountPages(response.data);
            })
    }, []);

    const switchHandler = (param) => {

        if (param == '>') {
            fetchAxios(pageDx, pageDx + 20, pageDx - 20);
        } 

        if (param == '<') {
            fetchAxios(pageSx, pageSx + 20, pageSx - 20);
        }
    }

    const findPageByNum = (numPage) => {
        fetchAxios(numPage, numPage + 20, numPage - 20);
    }

    return (
        <div className={classes.homePage}>
            <Title />
            <div className={classes.bodyHome}>
                <Button btn={"<"} click={() => switchHandler('<')}/>
                <InvoicesView documents={documents} />
                <Button btn={">"} click={() => switchHandler('>')}/>
            </div>
            <ButtonsPages findPageByNum={findPageByNum} numPages={countPages > 0 ? countPages : null} />   

        </div>
    )
};

export default HomePage;

// numPage={(documents.length > 0 ? ((documents[0].idDocument-1)/20 + 1) : ' ')}