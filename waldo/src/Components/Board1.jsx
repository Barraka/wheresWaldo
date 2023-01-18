import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import board1 from '../assets/Board1.jpg';
import cat from '../assets/cat.png';
import pirate from '../assets/pirate.png';
import wizard from '../assets/wizard.png';
import catBig from '../assets/catBig.jpg';
import pirateBig from '../assets/pirateBig.jpg';
import wizardBig from '../assets/wizardBig.jpg';
import Backdrop from './Backdrop';
import Closeup from './Closeup';
import ContextualMenu from './ContextualMenu';
import DisplayWin from './DisplayWin';

function Board1(props) {
    const [intro, setIntro] = useState('');
    const [menu, setMenu] = useState('');
    const [response, setResponse] = useState(false);
    const [backdrop, setBackdrop] = useState(false);
    const [charStyle1, setCharStyle1] = useState('charWrapper');
    const [charStyle2, setCharStyle2] = useState('charWrapper');
    const [charStyle3, setCharStyle3] = useState('charWrapper');
    const [zoom, setZoom]=  useState(false);
    const [count, setCount] = useState(0);
    const [win, setWin] = useState('');

    const introTemplate = (
        <div className='intro'>
            <div className="introTitle">
                Find these 3 characters as quickly as you can. Click on the screen when you find one, and select the appropriate name in the selection box.
            </div>
            <div className="characterSelection">
                <div className="characterWrapper">
                    <img src={cat} alt="cat" />
                </div>
                <div className="characterWrapper">
                    <img src={pirate} alt="pirate" />
                </div>
                <div className="characterWrapper">
                    <img src={wizard} alt="wizard" />
                </div>
            </div>
            <div onClick={ready} className="ready">
                <button>Start</button>
            </div>
        </div>
    );

    useEffect(()=>{
        setIntro(introTemplate);
    },[]);

    useEffect(()=>{

    },[menu]);


    function handleSetChoice(o) {
        let flag=false;
        setResponse(true);

        console.log('calculatedX: ', o.calculatedX);       
        console.log('calculatedY: ', o.calculatedY);
        
        if(o.img===cat) {
            if(o.calculatedX< 0.045) {
                if(o.calculatedY >= 0.22 && o.calculatedY <=0.28) {
                    flag=true;
                    setCharStyle1('charWrapper valid');
                }
            }            
        }
        if(o.img===pirate) {
            if(o.calculatedX > 0.54 && o.calculatedX < 0.585) {
                if(o.calculatedY >= 0.32 && o.calculatedY <=0.41) {
                    flag=true;
                    setCharStyle2('charWrapper valid');
                }
            }
        }
        if(o.img===wizard) {            
            if(o.calculatedX > 0.21 && o.calculatedX < 0.255) {
                if(o.calculatedY >= 0.22 && o.calculatedY <=0.32) {
                    flag=true;
                    setCharStyle3('charWrapper valid');
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

    function toggleWin()  {
        setWin(<DisplayWin reset={props.reset}/>)
        setBackdrop(true);
    }

    function ready() {
        setIntro('');
    }
    function toggleMenu(e) {
       
        if(zoom) {
            setZoom(false);
            setBackdrop(false);
        }
        else if(menu==='') {
            let offsetX=e.target.parentElement.scrollLeft;
            let offsetY=window.scrollY;
            const calculatedX=(e.clientX+offsetX)/e.target.getBoundingClientRect().width;
            const calculatedY=(e.clientY-100+offsetY)/e.target.getBoundingClientRect().height;     

            setMenu(<ContextualMenu calculatedX={calculatedX} calculatedY={calculatedY} response={response} event={e} img1={cat} name1='Cat' img2={pirate} name2='Pirate' img3={wizard} name3='Wizard' handleSetChoice={handleSetChoice} />); 
            setBackdrop(true);
        }
        else if(e==='remove') {
            setMenu('');
            setBackdrop(false);
        }
        
    }

    function toggleZoom(o) {
        setZoom(<Closeup img={o} />);
        setBackdrop(true);
    }
    

    if(intro!='') return (
        <div className='board1 board'>
            <button onClick={toggleMenu}>Get menu state</button>
            {menu}
            {intro}     
        </div>
    ); else {
        return(
            <div className="gameWrapper">
                {backdrop ? <Backdrop toggleMenu={toggleMenu}/> : null}
                {zoom ? zoom : null}
                {win ? win : null}

                <div className="gameHeader">
                    {/* <Link to='/' >Home</Link> */}
                    <div onClick={e=>toggleZoom(catBig)} className={charStyle1}>                        
                        <div className="char">
                            <img src={cat} alt="cat" />
                        </div>
                        <div className="charName">Cat</div>
                    </div>

                    <div onClick={e=>toggleZoom(pirateBig)} className={charStyle2}>
                        <div className="char">
                            <img src={pirate} alt="pirate" />
                        </div>
                        <div className="charName">Pirate</div>
                    </div>

                    <div onClick={e=>toggleZoom(wizardBig)} className={charStyle3}>
                        <div className="char">
                            <img src={wizard} alt="wizard" />
                        </div>
                        <div className="charName">Wizard</div>
                    </div>

                </div>
                <div onClick={toggleMenu} className="boardWrapper">
                    {menu}
                    <img src={board1} alt='game image' draggable='false'/>
                </div>
            </div>
        )
    }
}

export default Board1