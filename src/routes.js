import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from './login';
import SignUp from './signup';
import AddStudent from './addStudent';
import GetStudent from './getStudent';
import UpdateStudent from './updateStudent';
import Dashboard from './dashboard';
import StudentDetail from './studentDetail';

const Routers = () => {
    return (
  <Router>
    <div>
        
    </div>
  
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<SignUp/>} />
         <Route path="/addstudent" element={<AddStudent/>} />
         <Route path="/allstudents" element={<GetStudent/>} />
        <Route path="/updateStudent/:id" element={<UpdateStudent/>} />
          <Route path="/studentdetail/:id" element={<StudentDetail/>} />
        <Route path="/dashboard" element={<Dashboard/>} />   
      </Routes>
     </Router>
    )
}

export default Routers;