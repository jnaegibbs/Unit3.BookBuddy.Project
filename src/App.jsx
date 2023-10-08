import { useState } from 'react'
import bookLogo from './assets/books.png'
import Books from './components/Books'
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import SingleBook from './components/SingleBook'
import Register from './components/Register'
import Login from './components/Login'
import HomePage from './components/HomePage'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
    <BrowserRouter>
      <Routes>
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
