
import './Styles/styles.css'
import SelectBoard from './Components/SelectBoard'
import { Route, Routes } from 'react-router-dom'
import Board1 from './Components/Board1'

function App() {

    return (
        <div className='app'>
            <SelectBoard />
        </div>
    )

    // return (
    // <div className="App">
    //     <Routes>
    //         <Route path='/' element={<SelectBoard />} />
    //         <Route path='/board1' element={<Board1 />} />

    //     </Routes>
    //     {/* <SelectBoard /> */}
    // </div>
    // )
}

export default App
