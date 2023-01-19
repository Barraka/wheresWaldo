 
import React, { useEffect } from 'react'

function ContextualMenu(props) {
    let posX, posY;

    useEffect(()=>{

    },[props.response]);

    if(props.event.clientX > window.innerWidth - 150)posX = window.innerWidth-150;
    else posX=props.event.clientX;
    if(props.event.clientY > window.innerHeight - 400)posY = window.innerHeight-400;
    else posY=props.event.clientY;

    function attempt(e, o) {
        const answer=props.handleSetChoice(o);
        if(answer)e.currentTarget.classList.add('valid');
        else e.currentTarget.classList.add('invalid');
    }
    const output=[...props.toFind].map(x=>
        <div key={x.img} onClick={e=>attempt(e, {img:x.img, calculatedX: props.calculatedX, calculatedY: props.calculatedY})} className="contextWrapper">
            <div className="contextImageWrapper">
                <img src={x.img} alt="pic1" />
            </div>
            <div className="contextName">{x.name}</div>
        </div>
);
    return (
        <div className='contextualMenu' style={{top:posY, left: posX}}>
            {output}
        </div>
    )
}

export default ContextualMenu