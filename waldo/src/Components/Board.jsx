import React, { useEffect, useState } from 'react'
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