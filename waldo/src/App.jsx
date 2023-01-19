
import './Styles/styles.css'
import SelectBoard from './Components/SelectBoard'
import { useEffect, useState } from 'react'

function App() {
    const [output, setOutput] = useState('');

    useEffect(()=>{
        setOutput(<SelectBoard reset={reset}/>);
    },[]);

    // useEffect(()=>{
    //     setOutput(<SelectBoard reset={reset}/>);
    // },[output]);

    function reset() {
        setOutput('');
        // setOutput(<SelectBoard reset={reset}/>);
    }

    return (
        <div className='app'>
            {/* Search and Find */}
            {output}
        </div>
    )

    // return (
    // <div className="app">
    //     <Routes>
    //         <Route path='/' element={<SelectBoard />} />
    //         {/* <Route path='/board1' element={<Board />} /> */}

    //     </Routes>
    //     {/* <SelectBoard /> */}
    // </div>
    // )
}

export default App
