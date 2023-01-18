import React, { useEffect } from 'react'

function ContextualMenu(props) {
    console.log('in menu');
    let posX, posY;

    useEffect(()=>{
        console.log('response: ', props.response);
    },[props.response]);

    if(props.event.clientX > window.innerWidth - 150)posX = window.innerWidth-150;
    else posX=props.event.clientX;
    if(props.event.clientY > window.innerHeight - 400)posY = window.innerHeight-400;
    else posY=props.event.clientY;

    //Include scrolling if on mobile
    if(props.event) {
        // console.log('props.event: ', props.event);
        // window.thisevent=props.event
        if(props.event.target.scrollLeft)posX+=props.event.target.scrollLeft;
        if(props.event.target.scrollTop)posY+=props.event.target.scrollTop;
        console.log('scroll left: ', props.sLeft);
        console.log('scroll down: ', props.sDown);
    }
    

    function attempt(e, o) {
        const answer=props.handleSetChoice(o);
        console.log('answer: ', answer);
        if(answer)e.currentTarget.classList.add('valid');
        else e.currentTarget.classList.add('invalid');
    }

    return (
        <div className='contextualMenu' style={{top:posY, left: posX}}>

            <div onClick={e=>attempt(e, {img:props.img1, xpos: props.event.pageX, ypos: props.event.pageY})} className="contextWrapper">
                <div className="contextImageWrapper">
                    <img src={props.img1} alt="pic1" />
                </div>
                <div className="contextName">{props.name1}</div>
            </div>

            <div onClick={e=>attempt(e, {img:props.img2, xpos: props.event.pageX, ypos: props.event.pageY})} className="contextWrapper">
                <div className="contextImageWrapper">
                    <img src={props.img2} alt="pic2" />
                </div>
                <div className="contextName">{props.name2}</div>
            </div>

            <div onClick={e=>attempt(e, {img:props.img3, xpos: props.event.pageX, ypos: props.event.pageY})} className="contextWrapper">
                <div className="contextImageWrapper">
                    <img src={props.img3} alt="pic3" />
                </div>
                <div className="contextName">{props.name3}</div>
            </div>

        </div>
    )
}

export default ContextualMenu