import { BrowserRouter , Route , Routes } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import { useResetProjection } from 'framer-motion'

function App() {

  return (
    <>
    <Home />
    <BrowserRouter>
        <Routes>
          <Route path='about' element={<About/>} />
        </Routes>
    </BrowserRouter>
    </>
  )
    
 
}
export default App