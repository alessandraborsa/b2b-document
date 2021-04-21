import React, { useState } from 'react';
import PageJumper from './PageJumper/PageJumper';
import PageButton from './PageButton/PageButton';

const ButtonsPages = (props) => {

    const [arrPages, setArrPages] = useState([1,2,3,4,5,6,7,8,9,10]); 

    const jumper = (param) => {

        setArrPages(arrPages.map(num => {
            
                num = num + param
                // props.findPageByNum(arrPages[0] * 20 - 20);
                return num;
                
        }));

        
        console.log(props.numPages);
    }
    return (
        <div>
            <PageJumper click={() => jumper(-1000)} btn={"-1000"}/>
            <PageJumper click={() => jumper(-200)} btn={"-200"}/>
            <PageJumper click={() => jumper(-50)} btn={"-50"}/>
            <PageJumper click={() => jumper(-10)} btn={"-10"}/>
            {arrPages.map(ele => {
                if (ele <= props.numPages && ele > 0) {
                    return (
                        <PageButton key={ele} click={() => props.findPageByNum(ele * 20 - 20)} numPage={ele}/>  
                    ) 
                } else if (ele < 0) {
                    return setArrPages([1,2,3,4,5,6,7,8,9,10])
                }
            })}
            {(arrPages[arrPages.length - 1] + 9 <= props.numPages) ? <PageJumper click={() => jumper(10)} btn={"+10"}/> : <PageJumper btn={"+10"}/>  }
           
            {(arrPages[arrPages.length - 1] + 50 < props.numPages) ? <PageJumper click={() => jumper(50)} btn={"+50"}/> : <PageJumper btn={"+50"}/>  }
           
            {(arrPages[arrPages.length - 1] + 200 < props.numPages) ? <PageJumper click={() => jumper(200)} btn={"+200"}/> : <PageJumper btn={"+200"}/>  }
            
            {(arrPages[arrPages.length - 1] + 1000 < props.numPages) ? <PageJumper click={() => jumper(1000)} btn={"+1000"}/> : <PageJumper btn={"+1000"}/>  }
              
        </div>
            
    )
}

export default ButtonsPages;