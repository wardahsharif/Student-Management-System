import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './navbar';


const UpdateStudent = () => {
   const [firstname, setFirstname] = useState('');
   const [lastname, setLastname] = useState('');
   const [gender, setGender] = useState('');
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
     
    axios.get('http://localhost:4000/students/'+id)
      .then(result => {
        setFirstname(result.data.firstname)
        setLastname(result.data.lastname)
        setGender(result.data.gender)

  }).catch(err => console.log(err));
  }, [id]);

    const handleUpdate = async (e) => {
     e.preventDefault();
      
       try {
       const response = await axios.patch(
        `http://localhost:4000/updateStudent/${id}`,
         {firstname,lastname,gender},
      
    );
    console.log('response',response)
     navigate('/allstudents')
        toast.success('Student information updated successfully', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });
        } catch(error) {
          console.log('Error',error)
        }

      }
    


  return (
    <div>
         <Navbar/>
        <div className="content" style={{ paddingTop: '70px' }}>
      <div class=" container rounded mt-4 p-4" width="200px">
        <form onSubmit={handleUpdate}>
          <h1 className="text-center">Update Student</h1>

       
          <div className="form-group p-2">
            <label htmlFor="firstname">First Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter first name"
              value={firstname}
              onChange={e => setFirstname( e.target.value )}
            />
          </div>
          <div class="form-group p-2">
            <label htmlFor="lastname">Last Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter last name"
              value={lastname}
             onChange={e => setLastname( e.target.value )}
            />
          </div>
          <label htmlFor="inputState" className="mx-1">
            Gender
          </label>
          <select
            id="inputState"
            className="form-control mx-1"
            value={gender}
            onChange={e => setGender( e.target.value )}
          >
            
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <button type="submit" className="btn mt-3 mx-2" id="update">
            Update 
          </button>
          <br />
          <ToastContainer />
        </form>
      </div>
      </div>
    </div>
  );
};

export default UpdateStudent;

//<option selected>Choose...</option>