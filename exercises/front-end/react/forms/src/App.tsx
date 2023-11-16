import {Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Form from './pages/Form'
import Home from './pages/Home'
import Footer from './components/Footer'


function App() {
 
  return (
   
    <> 
   
    
    <Header />
    <Routes>
      <Route path="/" element={< Form />} />
      <Route path="/home" element={< Home />} />
               
    </Routes>
    <Footer />
    </>
  )
}

export default App
