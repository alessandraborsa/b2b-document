import React, { useEffect, useState } from 'react';
import PageJumper from './PageJumper/PageJumper';
import PageButton from './PageButton/PageButton';
import './ButtonsPages.css';

const ButtonsPages = (props) => {
    const [arrPages, setArrPages] = useState([1,2,3,4,5,6,7,8,9,10]); 
    
    const jumper = (param) => {
        setArrPages(arrPages.map(num => {
                num = num + param
                return num;
        }));
    }

    useEffect(() => {
        props.findPageByNum(arrPages[0] * 20 - 20)
    }, [arrPages[0]]);

    useEffect(() => {
            if (props.currentPage > arrPages[arrPages.length -1]) {
                    jumper(10);
            } else if (props.currentPage < arrPages[0]) {
                    jumper(-10);  
            } 
            return arrPages;
    }, [props.currentPage]);
    
    return (
        <div className="buttons-pages">
            <div className="button-jumper">
                {(arrPages[0] - 1000 > 0) ? <PageJumper click={() => jumper(-1000)} btn={"-1000"}/> : null  }
                {(arrPages[0] - 200 > 0) ? <PageJumper click={() => jumper(-200)} btn={"-200"}/> : null  }
                {(arrPages[0] - 50 > 0) ? <PageJumper click={() => jumper(-50)} btn={"-50"}/> : null  }
                {(arrPages[0] - 10 > 0) ? <PageJumper click={() => jumper(-10)} btn={"-10"}/> : null  }
            </div>
            <div className="button-page">
                {arrPages.map(ele => {
                    if (ele <= props.numPages && ele > 0) {
                        return (
                            <PageButton key={ele} click={() => props.findPageByNum(ele * 20 - 20)} numPage={ele}/>  
                        ) 
                    } else if (ele < 0) {
                        return setArrPages([1,2,3,4,5,6,7,8,9,10])
                    }
                })}
            </div>
            
            <div className="button-jumper">
                { (arrPages[arrPages.length - 1] + 9 <= props.numPages) ? <PageJumper click={() => jumper(10)} btn={"+10"}/> : null }
                { (arrPages[arrPages.length - 1] + 50 < props.numPages) ? <PageJumper click={() => jumper(50)} btn={"+50"}/> : null  }
                { (arrPages[arrPages.length - 1] + 200 < props.numPages) ? <PageJumper click={() => jumper(200)} btn={"+200"}/> : null  }
                { (arrPages[arrPages.length - 1] + 1000 < props.numPages) ? <PageJumper click={() => jumper(1000)} btn={"+1000"}/> : null  }
            </div>
        </div>
    )
}

export default ButtonsPages;