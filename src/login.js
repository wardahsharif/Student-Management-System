import React, {useState} from 'react';
import axios from 'axios';

const Login = () => {

const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');

const handleEmail = (e) => {
  setEmail(e.target.value);
}

const handlePassword = (e) => {
  setPassword(e.target.value);
}

const loginUser = async (e)=> {
e.preventDefault();
try {
const response = await axios.post('http://localhost:4000/login',{email,password});
if (response.status === 200) {
  const {accessToken , refreshToken} = response.data;

  sessionStorage.setItem('access_token', accessToken);
   sessionStorage.setItem('refresh_token', refreshToken);

   window.location.href ='/dashboard';
} else {
  const errorResponse = await response.data
  setError(errorResponse);
}
} catch (error) {
  console.log(error.response.data);
  setError('An error occurred while login the user Please try again')
}
}




    return (
        <div className="mt-5">
           
        <div className="bg-secondary-subtle container rounded mt-4 p-4" width="200px">
<form onSubmit={loginUser}>
   <h1 className="text-center">Login</h1>
  <div className="form-group p-2">
    <label htmlFor="labelEmail">Email address</label>
    <input 
    type="inputEmail" 
    className="form-control" 
    aria-describedby="emailHelp" 
    placeholder="Enter email"
    name='email'
    onChange={handleEmail}/>
  </div>
  <div className="form-group p-2">
    <label htmlFor="inputPassword">Password</label>
    <input 
    type="password" 
    className="form-control" 
    placeholder="Password"
     password='password'
    onChange={handlePassword}/>
  </div>
      {error && <div className="alert alert-danger">{error}</div>}
  <button type="submit" className="btn btn-primary mx-2 mt-2">Login</button>
</form>
<div className="pt-4 text-center">
  Dont have an account? <a href="signup">signup</a>
  </div>
        </div>
        </div>
    )
}

export default Login;