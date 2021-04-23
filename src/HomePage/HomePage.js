import React, { useState, useEffect } from 'react';
import classes from './HomePage.module.css';
import InvoicesView from './InvoicesView/InvoicesView';
import Button from './Button/Button';
import Title from './Title/Title';
import axios from 'axios';
import ButtonsPages from './ButtonsPages/ButtonsPages';

const HomePage = () => {

    const [documents, setDocuments] = useState([]);
    const [pageDx, setPageDx] = useState([0,0]);
    const [pageSx, setPageSx] = useState([0,0]);
    const [countPages, setCountPages] = useState(0);
    
    const fetchAxios = (pageFetch) => {axios.get('http://localhost:8080/api/document/all?first_doc=' + pageFetch)
        .then(response => {
            setDocuments(response.data);
            setPageDx([pageFetch + 20, pageFetch/20 + 1])
            setPageSx([pageFetch - 20, pageFetch/20 + 1]);
        });
    };

    useEffect(() => {
        fetchAxios(0);
        axios.get('http://localhost:8080/api/document/count')
            .then(response => {
                setCountPages(response.data);
            })
    }, []);

    const switchHandler = (param) => {
        if (param == '>') {
            fetchAxios(pageDx[0]);
        } 
        if (param == '<') {
            fetchAxios(pageSx[0]);
        }
    }

    const findPageByNum = (numPage) => {
        fetchAxios(numPage);
    }

    return (
        <div className={classes.homePage}>
            <Title />
            <div className={classes.bodyHome}>
                <Button btn={"<"} click={() => switchHandler('<')}/>
                <InvoicesView documents={documents} currentPage={pageDx[1]}/>
                <Button btn={">"} click={() => switchHandler('>')}/>
            </div>
            <ButtonsPages currentPage={pageDx[1]} findPageByNum={findPageByNum} numPages={countPages > 0 ? countPages : null} />   
        </div>
    )
};

export default HomePage;
