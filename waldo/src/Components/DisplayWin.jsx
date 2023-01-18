import React from 'react'

function DisplayWin(props) {
    function submit() {
        console.log('submitting win');
        props.reset();
    }

    return (
        <div className='displayWin'>
            <div className="winText">
                Well done, you have found them all!
                You have completed this board in x seconds.
                enter place in the leaderboard:
            </div>
            <input ></input>
            <button onClick={submit}>Submit</button>

        </div>
    )
}

export default DisplayWin