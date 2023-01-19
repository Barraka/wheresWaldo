import React from 'react'

function DisplayWin(props) {
    function submit() {
        console.log('submitting win');
        props.reset();
    }
    function cancel() {

    }

    return (
        <div className='displayWin'>
            <div className="winText">
                Well done, you have found them all!<br/>
                You have completed this board in x seconds.<br/>
                
            </div>
            <div className="inputWrapper">
                <div className="winInputText">
                    Enter place in the leaderboard:
                </div>
                <input className='winInput' placeholder='Your Name'></input>
            </div>
            
            <div className="winButtonWrapper">
                <button className='winButton' onClick={submit}>Submit</button>
                <button className='winButton winCancel' onClick={cancel}>Continue<br/> without submitting</button>
            </div>

        </div>
    )
}

export default DisplayWin