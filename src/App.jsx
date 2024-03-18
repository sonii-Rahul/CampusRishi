import { useEffect, useState } from 'react'
import Login from './Components/login.jsx'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from "./Components/Home/home.jsx"
import Admin from './Components/admin/admin.jsx'
import Teacher from "./Components/teacher/teacher.jsx"
import Student from './Components/student/student.jsx'
import Error from './Components/Error/Error.jsx'


import './App.css'
import DashHome from './Components/teacher/Dashboard/DashHome.jsx'
import RegisterStudent from './Components/teacher/Dashboard/RegisterStudent.jsx'
import Blog from "./Components/teacher/Dashboard/Blog.jsx"
import Addattendance from './Components/teacher/Dashboard/Addattendance.jsx'
import Assignments from './Components/teacher/Dashboard/Assignments.jsx'
import AddClass from './Components/teacher/Dashboard/AddClass.jsx'
import SignUp from './Components/Login/SignUp.jsx'

function App() {


  
  return (
    <>

<BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />

        <Route path='/admin' element={<Admin />} />
        <Route path='/teacher' element={<Teacher />}>
          {/* Nested route relative to parent path */}
          <Route path='dashboard' element={<DashHome />} />
          <Route path='registerfrom' element={<RegisterStudent />} />
          <Route path='addblog' element={<Blog/>} />
          <Route path='attendance' element={<Addattendance/>} />
          <Route path='assignments' element={<Assignments/>} />
          <Route path='addclass' element={<AddClass/>} />
        </Route>
        <Route path='/student' element={<Student />} />
        <Route path='*' element={<Error/>}/>
      </Routes>
    </BrowserRouter>

   
    
    </>
  )
}

export default App
