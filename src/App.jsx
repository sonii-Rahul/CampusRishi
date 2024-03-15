import { useState } from 'react'
import Login from './Components/login.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./Components/Home/home.jsx"
import Admin from './Components/admin/admin.jsx'
import Teacher from "./Components/teacher/teacher.jsx"
import Student from './Components/student/student.jsx'


import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

    <BrowserRouter>
    <Routes>
      <Route path='/' element= {<Home/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/teacher' element={<Teacher/>}/>
      <Route path='/student' element={<Student/>}/>
    </Routes>
    </BrowserRouter>

   
    
    </>
  )
}

export default App
