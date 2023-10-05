import {Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Form from './components/Form'
import Home from './components/Home'


function App() {
 
  return (
    <> 
    
    <Header />
    <Routes>
      <Route path="/" element={< Form />} />
      <Route path="/home" element={< Home />} />
               
    </Routes>
    </>
  )
}

export default App
