import React, { useEffect, useState } from 'react'


import Board from './Board';
import title from '../assets/title.png';
//Board 1 assets
import board1 from '../assets/Board1.jpg';
import thumb1 from '../assets/board1Thumb.jpg';
import cat from '../assets/cat.png';
import pirate from '../assets/pirate.png';
import wizard from '../assets/wizard.png';
import catBig from '../assets/catBig.jpg';
import pirateBig from '../assets/pirateBig.jpg';
import wizardBig from '../assets/wizardBig.jpg';
//Board 2 assets
import board2 from '../assets/MithralHall.jpg';
import thumb2 from '../assets/MithralHallSmall.jpg';
import dwarf from '../assets/dwarf.png';
import oldLady from '../assets/oldLady.png';
import zombie from '../assets/zombie.png';
import dwarfBig from '../assets/dwarfBig.jpg';
import oldLadyBig from '../assets/oldLadyBig.jpg';
import zombieBig from '../assets/zombieBig.jpg';
//Board 3 assets
import board3 from '../assets/Mari1.jpg';
import thumb3 from '../assets/Mari1Thumb.jpg';
import phoneGuy from '../assets/PhoneGuy.png';
import clown from '../assets/Clown.png';
import puss from '../assets/Puss.png';
import phoneGuyBig from '../assets/PhoneGuyBig.jpg';
import clownBig from '../assets/ClownBig.jpg';
import pussBig from '../assets/PussBig.jpg';
//Board 4 assets
import board4 from '../assets/Mari2.jpg';
import thumb4 from '../assets/Mari2Thumb.jpg';
import girl from '../assets/Girl.png';
import dog from '../assets/Dog.png';
import spy from '../assets/Spy.png';
import girlBig from '../assets/GirlBig.jpg';
import dogBig from '../assets/DogBig.jpg';
import spyBig  from '../assets/SpyBig.jpg';
//

function SelectBoard(props) {
    const [board, setBoard] = useState('');
    const boardComponent1 = <Board reset={boardReset} title="Wrym's Crossing" art={board1} assets={[{img:cat,imgBig:catBig, name:'Cat', xmin:0, xmax:0.045, ymin: 0.22, ymax: 0.28},{img:pirate,imgBig:pirateBig, name:'Pirate', xmin:0.54, xmax:0.585, ymin:0.32, ymax:0.41},{img:wizard,imgBig:wizardBig, name:'Wizard', xmin:0.21, xmax:0.255, ymin: 0.22, ymax:0.32}]}/>;

    const boardComponent2 = <Board reset={boardReset} title="Mithral Hall" art={board2} assets={[{img:dwarf,imgBig:dwarfBig, name:'Dwarf', xmin:0.835, xmax:0.88, ymin: 0.645, ymax: 0.75},{img:oldLady,imgBig:oldLadyBig, name:'Old Lady', xmin:0.43, xmax:0.47, ymin:0.50, ymax:0.595},{img:zombie,imgBig:zombieBig, name:'Zombie', xmin:0.015, xmax:0.055, ymin: 0.115, ymax:0.195}]}/>;

    const boardComponent3 = <Board reset={boardReset} title="Exuberant Circus" art={board3} assets={[{img:phoneGuy,imgBig:phoneGuyBig, name:'Phone Guy', xmin:0.515, xmax:0.545, ymin: 0.87, ymax: 0.96},{img:clown,imgBig:clownBig, name:'Clown', xmin:0.315, xmax:0.34, ymin:0.40, ymax:0.45},{img:puss,imgBig:pussBig, name:'Puss', xmin:0.55, xmax:0.575, ymin: 0.19, ymax:0.26}]}/>;

    const boardComponent4 = <Board reset={boardReset} title="Future Mall" art={board4} assets={[{img:girl,imgBig:girlBig, name:'Girl', xmin:0.84, xmax:0.875, ymin: 0.79, ymax: 0.86},{img:dog,imgBig:dogBig, name:'Dog', xmin:0.468, xmax:0.49, ymin:0.713, ymax:0.755},{img:spy,imgBig:spyBig, name:'Spy', xmin:0.335, xmax:0.36, ymin: 0.005, ymax:0.045}]}/>;

    const output=<div className='selectBoard'>
            <div className='title'>
                <img src={title} alt="SearchNFind" />
            </div>
            <div className='selectBoardTxt'>Choose one of the boards to start playing, and find the 3 characters in the least amount of time. <br/>
            Good luck!</div>
            <div className='boardChoice'>
                {/* board 1 */}
                <div className="gameLink" data-before={"Wrym's Crossing"} onClick={e=>setBoard(boardComponent1)}>
                    <img src={thumb1} alt="image link" />
                </div>
                {/* board 2 */}
                <div className="gameLink" data-before={"Mithral Hall"} onClick={e=>setBoard(boardComponent2)}>
                    <img src={thumb2} alt="image link" />
                </div>
                {/* board 3 */}
                <div className="gameLink" data-before={"Exuberant Circus"} onClick={e=>setBoard(boardComponent3)}>
                    <img src={thumb3} alt="image link" />
                </div>
                {/* board 4 */}
                <div className="gameLink" data-before={"Future Mall"} onClick={e=>setBoard(boardComponent4)}>
                    <img src={thumb4} alt="image link" />
                </div>
            </div>
        </div>

    function boardReset() {
        setBoard(output);
    }

    useEffect(()=>{
        setBoard(output);
    },[]);

    return (
        <>
            {board}
        </>
    )
}

export default SelectBoard