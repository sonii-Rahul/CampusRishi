import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Components/login.jsx';
import Home from './Components/Home/home.jsx';
import Admin from './Components/admin/admin.jsx';
import Teacher from './Components/teacher/teacher.jsx';
import Student from './Components/student/student.jsx';
import Error from './Components/Error/Error.jsx';
import './App.css';
import DashHome from './Components/teacher/Dashboard/DashHome.jsx';
import RegisterStudent from './Components/teacher/Dashboard/RegisterStudent.jsx';
import Blog from './Components/teacher/Dashboard/Blog.jsx';
import Addattendance from './Components/teacher/Dashboard/Addattendance.jsx';
import Assignments from './Components/teacher/Dashboard/Assignments.jsx';
import AddClass from './Components/teacher/Dashboard/AddClass.jsx';
import SignUp from './Components/signup/SignUp.jsx';
import AddSchool from './Components/admin/DashBoard/Addschool.jsx';
import School from "./Components/school/school.jsx"
import Addteacher from './Components/school/DashBoard/Addteacher.jsx';
import Addcourse from './Components/school/DashBoard/Addcourse.jsx';
import SAddclass from './Components/school/DashBoard/SAddclass.jsx';
import DashBoard from './Components/student/Dashboard/DashBoard.jsx';
import Passkey from './Components/admin/DashBoard/Passkey.jsx';
import Passkeylogin from './Components/passkeylogin.jsx';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/passkeylogin" element={<Passkeylogin />} />

          <Route path="/admin" element={<Admin />}>
            <Route path="addschool" element={<AddSchool />} />
            <Route path="passkey" element={<Passkey />} />

          </Route>
          <Route path="/school" element={<School />}>
            <Route path='addteacher' element={<Addteacher />} />
            <Route path="passkey" element={<Passkey />} />
            <Route path='addcourse' element={<Addcourse />} />
            <Route path='addclass' element={<SAddclass />} />

          </Route>


          <Route path="/teacher" element={<Teacher />}>
          <Route path="passkey" element={<Passkey />} />
            <Route path="dashboard" element={<DashHome />} />
            <Route path="registerfrom" element={<RegisterStudent />} />
            <Route path="addblog" element={<Blog />} />
            <Route path="attendance" element={<Addattendance />} />
            <Route path="assignments" element={<Assignments />} />
            <Route path="addclass" element={<AddClass />} />
          </Route>

          <Route path="/student" element={<Student />} >
          <Route path="passkey" element={<Passkey />} />
            <Route path="dashboard" element={<DashBoard />} />
          </Route>
          <Route path="*" element={<Error />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
