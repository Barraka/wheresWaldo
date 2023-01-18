import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import thumb from '../assets/board1Thumb.jpg';
import Board1 from './Board1';

function SelectBoard(props) {
    const [board, setBoard] = useState('');
    const board1 = <Board1 reset={reset}/>;

    function reset() {
        setBoard(
            <div className='selectBoard'>
                <div className='selectBoardTxt'>Choose one of the boards to start playing, and find the 3 characters in the least amount of time. <br/>
                Good luck!</div>
                <div className='boardChoice'>
                    {/* <Link to='/board1' className='link' > */}
                        <div className="gameLink" onClick={e=>setBoard(board1)}>
                            <img src={thumb} alt="image link" />
                        </div>
                    {/* </Link> */}
                </div>
            </div>
            );
    }

    useEffect(()=>{
        setBoard(
        <div className='selectBoard'>
            <div className='selectBoardTxt'>Choose one of the boards to start playing, and find the 3 characters in the least amount of time. <br/>
            Good luck!</div>
            <div className='boardChoice'>
                {/* <Link to='/board1' className='link' > */}
                    <div className="gameLink" onClick={e=>setBoard(board1)}>
                        <img src={thumb} alt="image link" />
                    </div>
                {/* </Link> */}
            </div>
        </div>
        );
    },[]);

    // useEffect(()=>{
    //     console.log('in useeffect selectboard');
    //     if(board!='') {
    //         if(board==='board1')return(<Board1 />);
    //     }
    // },[board]);

    return (
        <>
            {board}
        </>
    )
}

export default SelectBoard