import React from 'react';
import {Link} from 'react-router-dom';
 import './App.css'



const Navbar = () => {
    return (
        
 <div className="container mt-5">
     <nav class="navbar bg-body-tertiary fixed-top mb-5">
  <div class="container-fluid brand-color ">
    <a class="navbar-brand p-2  pt-4" href="/">School Management System</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end custom-bg-color"  tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel"  style={{ width: '250px',  }}>
      <div class="offcanvas-header ">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel"><i class="fa-solid fa-user fa-2xl"></i>  Admin <br/><br/> <p className="adminEmail">admin@gmail.com</p></h5> 

        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body ">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
           <li className="mb-4 nav-item">
                <Link className="nav-link active" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            <li className="mb-4 nav-item">
                <Link className="nav-link" to="/dashboard">
                  Reports
                </Link>
              </li>
           <li>
            <Link className="mb-4 nav-link" to="/allstudents">All Students</Link>
          </li>
          <li>
            <Link className="mb-4 nav-link" to="/addstudent">Add Student</Link>
          </li>
    
           <li>
            <Link className="mb-4 nav-link" to="/studentdetail">Student Detail</Link>
          </li>
          
        </ul>
      </div>
    </div>
  </div>
</nav>
     
        </div>
    )

    
}

export default Navbar;





  /*const token = sessionStorage.getItem('access_token')
   
    axios.post('http://localhost:4000/register', userData, {
       headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      })
      .then((res) => {
        toast.success('Welcome', {
          position: toast.POSITION.TOP_RIGHT,
          autoClose: 3000,
        });*/

