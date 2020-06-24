import React, { useState } from 'react';
import classes from './Paginator.module.css';
import cn from "classnames"


const Paginator = ({currentPage, onPageChanged, totalItemsCount, pageSize, portionSize = 10}) => {

    let pagesCount = Math.ceil(totalItemsCount /pageSize);
    let pages = [];

    for(let i=1; i<=pagesCount; i++){
        pages.push(i);
    }

    let portionCount = Math.ceil(pagesCount/portionSize);
    let [portionNumber, setPortionNumber] = useState(1);
    let leftPortionPageNumber = (portionNumber-1)*portionSize+1;
    let rightPortionPageNumber = portionNumber*portionSize;

    return( 
        <div className={classes.page}> 
        {portionNumber > 1 && <button  onClick={()=>{setPortionNumber(1)}}>&lt;&lt;</button>}
        {portionNumber > 1 && <button  onClick={()=>{setPortionNumber(portionNumber-1)}}>&lt;</button>}
        
        {pages
        .filter(p =>
            p >= leftPortionPageNumber && p <= rightPortionPageNumber
        )
        .map(p =>{  
            return <span key={p}  className={cn({[classes.selectedPage] : currentPage === p})} 
            onClick={(e)=>{onPageChanged(p)}}>{p}</span> 
                }) 
            }

            {portionCount > portionNumber && <button onClick={()=>{setPortionNumber(portionNumber+1)}}>&gt;</button>}
            {portionCount > portionNumber && <button onClick={()=>{setPortionNumber(portionCount)}}>&gt;&gt;</button>}
        </div>
    )
}
export default Paginator;