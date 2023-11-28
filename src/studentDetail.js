import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const StudentDetail = () => {
  const { id } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
     axios.get( `http://localhost:4000/student/${id}`)
      .then(res => {
        console.log(res);
        setStudent(res.data);
      })
      .catch(err => console.log(err));
  }, [id]);

  if (Object.keys(student).length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Student Details</h2>
      <p>ID: {student._id}</p>
      <p>First Name: {student.firstname}</p>
      <p>Last Name: {student.lastname}</p>
      <p>Gender: {student.gender}</p>
      <Link to='/allstudents' className="btn btn-primary">Back</Link>
    </div>
  );
};

export default StudentDetail;