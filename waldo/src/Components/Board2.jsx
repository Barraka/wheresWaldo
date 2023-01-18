import React, { useState } from 'react'
import board1 from '../assets/Board1.jpg';
import cat from '../assets/cat.png';
import pirate from '../assets/pirate.png';
import wizard from '../assets/wizard.png';

function Board2(props) {
    const [menu2, setMenu2] = useState('');
    const [intro, setIntro] = useState('');
    const [game, setGame] = useState('');

    function toggleMenu2() {
        if(menu2==='')setMenu2('Something there');
        else setMenu2('');
        console.log('menu, ', menu2);
    }

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

    const gameTemplate = (
        <div className="gameWrapper">
            <div className="gameHeader">
                {/* <Link to='/' >Home</Link> */}
                <div className="charWrapper">
                    
                    <div className="char">
                        <img src={cat} alt="cat" />
                    </div>
                    <div className="charName">Cat</div>
                </div>

                <div className="charWrapper">
                    <div className="char">
                        <img src={pirate} alt="pirate" />
                    </div>
                    <div className="charName">Pirate</div>
                </div>

                <div className="charWrapper">
                    <div className="char">
                        <img src={wizard} alt="wizard" />
                    </div>
                    <div className="charName">Wizard</div>
                </div>

            </div>
            <div onClick={toggleMenu} className="boardWrapper">
                <img src={board1} alt='game image' />
            </div>
        </div>
    );

    function ready() {
        setIntro('');
        setGame(gameTemplate);
    }

    function toggleMenu() {
        console.log('in togglemenu function');
        if(menu2==='') {
            setMenu2(<div>This is some text</div>);
            console.log('menu created: ', menu2);  
        }
        else {
            // setMenu(<ContextualMenu img1={cat} name1='Cat' img2={pirate} name2='Pirate' img3={wizard} name3='Wizard' setChoice={setChoice} />); 
            setMenu2('');
            console.log('something there', menu2);
        }
    }

    return (
        <div className='board1 board'>
            <button onClick={toggleMenu2}>Toggle menu</button>
            <button onClick={toggleMenu2}>Get menu state</button>
            {menu2}
            {intro}
            {game}            
        </div>
    )
}

export default Board2