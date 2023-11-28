import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import Navbar from './navbar';

const AddStudent = () => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    gender: '',
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


   const saveStudent = (e) => {
    e.preventDefault();
    const token = sessionStorage.getItem('access_token')
     
    axios.post('http://localhost:4000/students', formData,{
      headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
    })
      .then((res) => {
          navigate('/allstudents')
        toast.success('New student added successfully', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        setFormData({});
      })
      
      .catch((err) => {
        toast.error('An error occurred while adding the record', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
       });
       
      });
  };

        
  return (
    <div>
      <Navbar/>
           <div className="content" style={{ paddingTop: '70px' }}>
      <h1 className="text-center">Add Student</h1>
      <div class=" container rounded mt-4 p-4" width="200px">
       <form onSubmit={saveStudent}> 
          <div className="form-group p-2">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="form-control"
              name="firstname"
              placeholder="Enter first name"
             onChange={handleChange}
            />
          </div>
          <div class="form-group p-2">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              name="lastname"
              placeholder="Enter last name"
              onChange={handleChange}
            />
          </div>
          <label htmlFor="inputState" className="mx-1">
            Gender
          </label>
          <select
            id="inputState"
            className="form-control mx-1"
            name="gender"
            onChange={handleChange}
          >
            <option selected>Choose...</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <button type="submit" className="btn  mt-3 mx-2" id="add">
            Add Student
          </button>
          <br />
          <ToastContainer />
        </form>
      </div>
      </div>
    </div>
  );
};

export default AddStudent;
