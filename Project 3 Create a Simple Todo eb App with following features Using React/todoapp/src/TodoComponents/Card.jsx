import './card.css'
import { useState } from 'react';
function Card({index,workTitle,deleteCard}){
    let [pending,setPending] =useState(true)

    function changeStatus(){
setPending(!pending)
    }

    return(
        <>
        <div className="card">
        <h2 className="workTitle">{index}.{workTitle}</h2>
        <p className="status">Status: {pending ? 'Pending':'Completed'}</p>
        <div className='buttons'>
        <button className="update" onClick={changeStatus}>Update Status</button>
        <button className="delete" onClick={()=>deleteCard(index)}>Delete</button>
        </div>
        </div>
        </>
    )
}

export default Card;