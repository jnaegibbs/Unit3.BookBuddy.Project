import { useState } from 'react'
import bookLogo from './assets/books.png'
import Books from './components/Books'
import {Routes, Route} from 'react-router-dom'
import SingleBook from './components/SingleBook'

function App() {
  const [token, setToken] = useState(null)

  return (
    <>
    <Routes> 
      <Route path="/books" element={<Books/>}/>
      <Route path="/books/:id" element={<SingleBook/>}/>
  
    </Routes>
    </>
  )
}

export default App
