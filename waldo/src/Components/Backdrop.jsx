import React from 'react'

function Backdrop(props) {


    return (
        <div onClick={e=>props.toggleMenu('remove')} className='backdrop'>

        </div>
    )
}

export default Backdrop