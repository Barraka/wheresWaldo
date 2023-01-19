import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
// import board1 from '../assets/Board1.jpg';
// import cat from '../assets/cat.png';
// import pirate from '../assets/pirate.png';
// import wizard from '../assets/wizard.png';
// import catBig from '../assets/catBig.jpg';
// import pirateBig from '../assets/pirateBig.jpg';
// import wizardBig from '../assets/wizardBig.jpg';


import GameIntro from './GameIntro';
import Game from './Game';

function Board1(props) {
    const [output, setOutput] = useState('');

    useEffect(()=>{
        setOutput(<GameIntro ready={ready} boardProps={{...props}}/>);
    },[]);

    useEffect(()=>{

    },[output]);    

    function ready() {
        setOutput(<Game reset={props.reset} boardProps={{...props}} />);
    }
    
    return (
        <div className='boardOuter'>
            {output}     
        </div>
    )
}

export default Board1