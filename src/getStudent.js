import React, { useState } from 'react';
import Navbar from './navbar';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './getStudent.css';

const GetStudent = () => {
  const [getData, setGetData] = useState([]);

 
const studentInfo = async () => {
    try {
         const token = sessionStorage.getItem('access_token')
     
        const response = await axios.get('http://localhost:4000/students',{
      headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
    })
   
    setGetData(Array.isArray(response.data) ? response.data : []); 
  } catch(error) {
      console.log('Error fetching student data:', error);
      setGetData([]);
  }
  };

    const handleDelete = (id) => {
    axios
      .delete('http://localhost:4000/deleteStudent/' + id)
      .then((res) => {
        console.log(res);
         setGetData((prevData) => prevData.filter((student) => student._id !== id));
       //window.location.reload();
      })
      .catch((err) => console.log(err));
  };


return (
  <div className="">
    <Navbar />
    <div className="content text-center" style={{ paddingTop: '70px' }}>
      <h1>Student List</h1>
      <button className="border p-3 rounded m-4" onClick={studentInfo}>
        Fetch Students
      </button>

      <Link to={`/addstudent/`} className="btn  mx-2" id="add">
        Add <i class="fa-solid fa-plus"></i>
      </Link>

      {getData.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
              <th scope="col">Gender</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {getData.map((data) => (
              <tr key={data._id}>
                <td>{data.firstname}</td>
                <td>{data.lastname}</td>
                <td>{data.gender}</td>
                <td>
                   <Link
                    to={`/studentdetail/${data._id}`}
                    className="btn mx-2"
                    id="detail"
                  >
                    Detail
                  </Link>
                  <Link
                    to={`/updateStudent/${data._id}`}
                    className="btn  mx-2"
                    id="update"
                  >
                    Update
                  </Link>
                  <button
                    className="btn "
                    id="delete"
                    onClick={() => handleDelete(data._id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
);

};

export default GetStudent;

