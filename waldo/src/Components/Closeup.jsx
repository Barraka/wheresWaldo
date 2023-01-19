import React from 'react'

function Closeup(props) {


    return (
        <div className='closeup'>
            <img src={props.img} alt="Zoom in"  draggable='false'/>
        </div>
    )
}

export default Closeup