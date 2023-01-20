
import './Styles/styles.css'
import SelectBoard from './Components/SelectBoard'
import { useEffect, useState } from 'react'

function App() {
    const [output, setOutput] = useState('');

    useEffect(()=>{
        setOutput(<SelectBoard/>);
    },[]);



    return (
        <div className='app'>
            {/* Search and Find */}
            {output}
        </div>
    )
}

export default App
