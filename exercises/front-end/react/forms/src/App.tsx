import {Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'


function App() {
 
  return (
    <> 
    <Header />
    <Routes>
      <Route path="/" element={< Form />} />
    
    
    
      
    </Routes>
    </>
  )
}

export default App
