import React, { useEffect } from 'react'

function GameIntro(props) {
    const reach=props.boardProps;
    useEffect(()=>{
        console.log('props:', props);
        console.log('props.props: ', props.props);
    },[]);
    
    return (
        <div className='intro'>
            <div className="introTitle">
                Find these 3 characters as quickly as you can.<br/> Click on the screen when you find one, and select the appropriate name in the selection box.
            </div>

            <div className="characterSelection">

                <div className="characterWrapper">
                    <div className="characterImgWrapper">
                        <img src={reach.assets[0].img} alt={reach.assets[0].name}/>
                    </div>
                    <div className='characterSelectionName'>
                    {reach.assets[0].name}
                    </div>
                </div>

                <div className="characterWrapper">
                    <div className="characterImgWrapper">
                        <img src={reach.assets[1].img} alt={reach.assets[1].name}/>
                    </div>
                    <div className='characterSelectionName'>
                    {reach.assets[1].name}
                    </div>
                </div>

                <div className="characterWrapper">
                    <div className="characterImgWrapper">
                    <img src={reach.assets[2].img} alt={reach.assets[2].name}/>
                    </div>
                    <div className='characterSelectionName'>
                    {reach.assets[2].name}
                    </div>
                </div>

            </div>
            <div onClick={props.ready} className="ready">
                <button className='startButton'>Start</button>
            </div>
        </div>
    )
}

export default GameIntro