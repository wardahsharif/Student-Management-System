import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const StudentDetail = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
     axios.get( `http://localhost:4000/students/${id}`)
      .then(res => {
        console.log(res);
        setStudent(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);


  return (
    <div className="container m-5 p-5 text-center rounded">
      <h2 className="p-3">Student Details</h2>
      <p><span className="fw-bolder">ID: </span> {student._id}</p>
      <p><span  className="fw-bolder">First Name: </span>{student.firstname}</p>
      <p><span  className="fw-bolder">Last Name: </span> {student.lastname}</p>
      <p><span  className="fw-bolder">Gender: </span>{student.gender}</p>
      <Link to='/allstudents' className="btn" id="add">Back</Link>
    </div>
  );
};

export default StudentDetail;