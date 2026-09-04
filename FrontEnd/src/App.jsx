import {BrowserRouter, Route, Routes} from 'react-router-dom'

import MongoP2 from './Pages/MongoP2'
import MongoPractice1 from './Pages/MongoPractice1'
import Editsacreen from './Component/Editsacreen'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>


          <Route path='/mongo1' element={<MongoPractice1 />} />
          <Route path='/' element={<MongoPractice1 />} />
          <Route path='/mongo2' element={<MongoP2 />} />
            <Route path='/edit' element={<Editsacreen/>}/>

      
      
        </Routes>
      </BrowserRouter>
    
    </>
  )
}

export default App
