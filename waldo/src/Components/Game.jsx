import React, { useEffect, useRef, useState } from 'react'
import Backdrop from './Backdrop';
import Closeup from './Closeup';
import ContextualMenu from './ContextualMenu';
import DisplayWin from './DisplayWin';

function Game(props) {
    const [menu, setMenu] = useState('');
    const [response, setResponse] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    const [charStyle1, setCharStyle1] = useState('charWrapper');
    const [charStyle2, setCharStyle2] = useState('charWrapper');
    const [charStyle3, setCharStyle3] = useState('charWrapper');
    const [count, setCount] = useState(0);
    const [win, setWin] = useState('');
    const [toFind, setToFind] = useState([]);
    const reach=props.boardProps;

    const big1=useRef(null);
    const big2=useRef(null);
    const big3=useRef(null);
    const bigLink=[big1, big2, big3];
    
    useEffect(()=>{
        if(reach)setToFind([{img:reach.assets[0].img, name:reach.assets[0].name}, {img:reach.assets[1].img, name:reach.assets[1].name}, {img:reach.assets[2].img, name:reach.assets[2].name}]);
    },[]);

    function toggleMenu(e) {
        if(menu==='') {
            // let offsetX=window.scrollX;
            // let offsetY=window.scrollY;
            // const calculatedX=(e.clientX+offsetX)/e.target.getBoundingClientRect().width;
            // const calculatedY=(e.clientY-100+offsetY)/e.target.getBoundingClientRect().height;    
            console.log('boundingX: ', e.target.getBoundingClientRect().width);
            console.log('boundingy: ', e.target.getBoundingClientRect().height);
            console.log('e.clientX: ', e.clientX);
            console.log('e.clientY: ', e.clientY);
            console.log('x: ', e.clientX-e.target.getBoundingClientRect().left);
            console.log('y: ', e.clientY-e.target.getBoundingClientRect().top);
            const calculatedX=(e.clientX-e.target.getBoundingClientRect().left)/e.target.getBoundingClientRect().width;
            const calculatedY=(e.clientY-e.target.getBoundingClientRect().top)/e.target.getBoundingClientRect().height; 
            
            setMenu(<ContextualMenu calculatedX={calculatedX} calculatedY={calculatedY} response={response} event={e} toFind={toFind} handleSetChoice={handleSetChoice} />); 

            setBackdrop(true);
        }
        else if(e==='remove') {
            setMenu('');
            setBackdrop(false);
        }        
    }
    function toggleWin()  {
        setWin(<DisplayWin reset={reach.reset}/>)
        setBackdrop(true);
    }
    function handleSetChoice(o) {
        let flag=false;
        setResponse(true);        
        
        if(o.img===reach.assets[0].img) {
            
            if(o.calculatedX > reach.assets[0].xmin && o.calculatedX< reach.assets[0].xmax) {
                if(o.calculatedY >= reach.assets[0].ymin && o.calculatedY <= reach.assets[0].ymax) {
                    flag=true;
                    setCharStyle1('charWrapper valid');
                    let temp=[...toFind];
                    temp=temp.filter(x=>x.img!=o.img);
                    setToFind(temp);
                }
            }            
        }
        if(o.img===reach.assets[1].img) {
            console.log('xmin: ', reach.assets[1].xmin);
            console.log('xmax: ', reach.assets[1].xmax);
            console.log('x: ', o.calculatedX );
            console.log('y: ', o.calculatedY );
            if(o.calculatedX > reach.assets[1].xmin && o.calculatedX < reach.assets[1].xmax) {
                if(o.calculatedY >= reach.assets[1].ymin && o.calculatedY <= reach.assets[1].ymax) {
                    flag=true;
                    setCharStyle2('charWrapper valid');
                    let temp=[...toFind];
                    temp=temp.filter(x=>x.img!=o.img);
                    setToFind(temp);
                }
            }
        }
        if(o.img===reach.assets[2].img) {       
            if(o.calculatedX > reach.assets[2].xmin && o.calculatedX < reach.assets[2].xmax) {
                if(o.calculatedY >= reach.assets[2].ymin && o.calculatedY <= reach.assets[2].ymax) {
                    flag=true;
                    setCharStyle3('charWrapper valid');
                    let temp=[...toFind];
                    temp=temp.filter(x=>x.img!=o.img);
                    setToFind(temp);
                }
            }
        }
        setTimeout(()=> {
            setBackdrop(false);
            setMenu('');
        },350);
        if(flag) {
            setCount(prev=>prev+1);
            if(count>=2)setTimeout(()=>toggleWin(), 500);
        }        
        return(flag);
    }
    function zoomIn(e) {
        const elem=e.currentTarget.getAttribute('data-big');
        bigLink.forEach(x=> {
            if(x.current.getAttribute('data-big')===elem)x.current.classList.add('zoomShow');
        });
    }
    function zoomOut(e) {
        const elem=e.currentTarget.getAttribute('data-big');
        bigLink.forEach(x=> {
            if(x.current.getAttribute('data-big')===elem)x.current.classList.remove('zoomShow');
        });
    }

    return (
        <div className="gameWrapper">
                {backdrop ? <Backdrop toggleMenu={toggleMenu}/> : null}
                {win ? win : null}

                <div className="headerWrapper">
                    <div className="zoomedWrapper">
                        <img className='zoomHidden' ref={big1} data-big={reach.assets[0].imgBig} src={reach.assets[0].imgBig} alt="big" />
                        <img className='zoomHidden' ref={big2} data-big={reach.assets[1].imgBig} src={reach.assets[1].imgBig} alt="big" />
                        <img className='zoomHidden' ref={big3} data-big={reach.assets[2].imgBig} src={reach.assets[2].imgBig} alt="big" />
                    </div>
                    <div className="gameHeader">
                        
                        {/* <Link to='/' >Home</Link> */}
                        <div onMouseOver={zoomIn} onMouseOut={zoomOut} data-big={reach.assets[0].imgBig} className={charStyle1}>
                            <div className="char">
                                <img src={reach.assets[0].img} alt={reach.assets[0].name}  draggable='false'/>
                            </div>
                            <div className="charName">{reach.assets[0].name}</div>
                        </div>

                        <div onMouseOver={zoomIn} onMouseOut={zoomOut} data-big={reach.assets[1].imgBig} className={charStyle2}>
                            <div className="char">
                                <img src={reach.assets[1].img} alt={reach.assets[1].name}  draggable='false'/>
                            </div>
                            <div className="charName">{reach.assets[1].name}</div>
                        </div>

                        <div onMouseOver={zoomIn} onMouseOut={zoomOut} data-big={reach.assets[2].imgBig} className={charStyle3}>
                            <div className="char">
                                <img src={reach.assets[2].img} alt={reach.assets[2].name}  draggable='false'/>
                            </div>
                            <div className="charName">{reach.assets[2].name}</div>
                        </div>
                    </div>
                </div>
                <div onClick={toggleMenu} className="boardWrapper">
                    {menu}
                    <img className='boardImg' src={reach.art} alt='game image' draggable='false'/>
                </div>
            </div>
    )
}

export default Game