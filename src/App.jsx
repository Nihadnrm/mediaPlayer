
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Header from './components/Header'
import Footer from './components/Footer'
import History from './pages/History'
import Login from './pages/Login'
import Reg from './pages/Reg'
import Landing from './pages/Landing'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/dash' element={<Dashboard/>} />
      <Route path='/his' element={<History/>} />
      <Route path='/' element={<Landing/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/reg' element={<Reg/>} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App
