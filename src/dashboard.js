import React from 'react'
import Navbar from './navbar'
import './dashboard.css'
const Dashboard = () => {
    return (
        <div>
          <Navbar/>
     <div className="content" style={{ paddingTop: '70px' }}>
        <h1 className="text-center mb-5">Admin welcome to the dashboard</h1>
<div className="container border p-5">
  <h2 className="text-center pb-4">Report Summary</h2>
        <div className="d-flex flex-row justify-content-center">
   <div className="card mx-4" style={{ width: '20rem' }}>
      <div className="card-body text-center">
        <h5 className="card-title text-center">Total Students</h5>
        <h3 className="card-subtitle mb-2 text-body-secondary text-center">25</h3>
        <h1 className="card-text text-center p-2"><i class="fa-solid fa-users fa-2xl"></i></h1>
        <a href="/allstudents" className="card-link">Students</a>
      </div>
    </div>
       <div className="card" style={{ width: '20rem' }}>
      <div className="card-body text-center">
        <h5 className="card-title text-center">Total Class</h5>
        <h3 className="card-subtitle mb-2 text-body-secondary text-center">10</h3>
        <h1 className="card-text text-center p-2"><i class="fa-solid fa-school fa-2xl"></i></h1>
        <a href="/dashboard" className="card-link">Class</a>
       
      </div>
    </div>
    </div>

    <div className="d-flex flex-row justify-content-center">
         <div className="card mx-4 mt-4" style={{ width: '20rem' }}>
      <div className="card-body text-center">
        <h5 className="card-title text-center">Total Attendants</h5>
        <h3 className="card-subtitle mb-2 text-body-secondary text-center">15</h3>
        <h1 className="card-text text-center p-2"><i class="fa-regular fa-newspaper fa-2xl"></i></h1>
        <a href="/allstudents" className="card-link">Attendants</a>
      </div>
    </div>   <div className="card mt-4" style={{ width: '20rem' }}>
      <div className="card-body text-center">
        <h5 className="card-title text-center">New</h5>
        <h3 className="card-subtitle mb-2 text-body-secondary text-center">Add Student</h3>
        <h1 className="card-text text-center p-2"><i class="fa-solid fa-user-plus fa-2xl"></i></h1>
        <a href="/addstudent" className="card-link">Add</a>
      </div>
    </div>
    </div>
    </div>

      </div>
        </div>
    )
}

export default Dashboard;