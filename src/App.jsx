import { useState } from 'react'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import SingleBook from './components/SingleBook'
import Register from './components/Register'
import Login from './components/Login'
import HomePage from './components/HomePage'
import { useDispatch, useSelector } from 'react-redux'
import Account from './components/Account'

function App() {
  const [token, setToken] = useState(null)
  

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/Account" element={<Account/>}/>
        <Route path="/" element={<HomePage/>} /> 
        <Route path="/books/:id" element={<SingleBook />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
