import React, {useState} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const SignUp = () => {

 const [userData, setUserData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: '',

  });


  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };


   const saveUser = (e) => {
    e.preventDefault();


      console.log('Save user function called.');
         axios.post('http://localhost:4000/register', userData)
      .then((res) => {
        console.log(res)
        toast.success('Registered successfully', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        setUserData({
        firstname: '',
       lastname: '',
        email: '',
        password: '',
        });
      })
      .catch((err) => {
        
        const errorMessage =  err.response.data.error.message;;
       toast.error(errorMessage, {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
       });
       console.log(err);
      });
  };

    




    return (
        <div className="mt-5"> 
            <div class=" container rounded mt-4 p-4" width="100px">
<form onSubmit={saveUser}>
   <h1 className="text-center">Sign Up</h1>
  <div className="form-group p-2">
    <label htmlFor="firstname">First Name</label>
    <input type="text" 
    className="form-control" 
    placeholder="Enter first name"
    name="firstname"
    onChange= {handleChange}
    />
  </div>
  <div className="form-group p-2">
    <label htmlFor="lastname">Last Name</label>
    <input type="text" 
    className="form-control" 
    placeholder="Enter last name"
    name= 'lastname'
    onChange= {handleChange}/>
  </div>
  <div className="form-group p-2">
    <label htmlFor="email">Email</label>
    <input type="text" 
    className="form-control" 
    name='email'
     placeholder="Email"
     onChange= {handleChange}/>
  </div>
  <div className="form-group p-2">
    <label htmlFor="password">Password</label>
    <input type="password" 
    className="form-control" 
     placeholder="Password"
     name='password'
     onChange= {handleChange}/>
  </div>
  
 
  <button type="submit" className="btn  mx-2 mt-3" id="add">Sign Up</button> <br/>
     <br />
          <ToastContainer />
<div className="pt-4 text-center">
  Already have an account? <a href="/">login</a>
  </div>
</form>
        </div>
        </div>
    )
}

export default SignUp;