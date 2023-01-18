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
    const [game, setGame] = useState('');
    const [menu, setMenu] = useState('');
    const [choice, setChoice] = useState({});
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
    },[game]);

    useEffect(()=>{

    },[menu]);

    //When the user clicks on an image location
    useEffect(()=>{
        console.log('in useeffect choice: ,', choice);
        // let flag=false;
        // if(choice.img===cat) {
        //     if(choice.xpos/1920 < 0.04) {
        //         if(choice.ypos/(1080+100) >= 0.28 && choice.ypos/(1080+100) <=0.34) {
        //             console.log('found the cat');
        //             flag=true;
        //         }
        //     }            
        // }
        // if(choice.img===pirate) {
        //     if(choice.xpos/1920 > 0.54 && choice.xpos/1920 < 0.585) {
        //         if(choice.ypos/(1080+100) >= 0.378 && choice.ypos/(1080+100) <=0.463) {
        //             console.log('found the Pirate');
        //             flag=true;
        //         }
        //     }
        // }
        // if(choice.img===wizard) {            
        //     if(choice.xpos/1920 > 0.21 && choice.xpos/1920 < 0.26) {
        //         if(choice.ypos/(1080+100) >= 0.295 && choice.ypos/(1080+100) <=0.385) {
        //             console.log('found the Wizard');
        //             flag=true;
        //         }
        //     }
        // }
        // if(!flag)console.log('Wrong guess');
        // setResponse(flag);
        // setMenu('');
    },[choice]);

    function handleSetChoice(o) {
        let flag=false;
        setResponse(true);
        console.log('o: ', o);
        if(o.img===cat) {
            if(o.xpos/1920 < 0.04) {
                if(o.ypos/(1080+100) >= 0.28 && o.ypos/(1080+100) <=0.34) {
                    console.log('found the cat');
                    flag=true;
                    setCharStyle1('charWrapper valid');
                }
            }            
        }
        if(o.img===pirate) {
            if(o.xpos/1920 > 0.54 && o.xpos/1920 < 0.585) {
                if(o.ypos/(1080+100) >= 0.378 && o.ypos/(1080+100) <=0.463) {
                    console.log('found the Pirate');
                    flag=true;
                    setCharStyle2('charWrapper valid');
                }
            }
        }
        if(o.img===wizard) {            
            if(o.xpos/1920 > 0.21 && o.xpos/1920 < 0.26) {
                if(o.ypos/(1080+100) >= 0.295 && o.ypos/(1080+100) <=0.385) {
                    console.log('found the Wizard');
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
        // console.log('rect: ', e.target.getBoundingClientRect());
        if(e!=='remove') {
            console.log('scroll left: ', e.currentTarget.scrollLeft);
        }
        
        // console.log('in toggle menu. response: ', menu);
        if(zoom) {
            setZoom(false);
            setBackdrop(false);
        }
        else if(menu==='') {
            const sLeft=e.currentTarget.scrollLeft;
            const sDown=e.currentTarget.scrollTop;
            setMenu(<ContextualMenu sLeft={sLeft} sDown={sDown} response={response} event={e} img1={cat} name1='Cat' img2={pirate} name2='Pirate' img3={wizard} name3='Wizard' handleSetChoice={handleSetChoice} />); 
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
            {game}            
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
                    <img src={board1} alt='game image' />
                </div>
            </div>
        )
    }
}

export default Board1