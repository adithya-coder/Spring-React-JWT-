import React, { Component } from 'react';

class HeaderComponeet extends Component {
    constructor(props) {
        super(props);
        this.state={

        }
    }
    
    render() {
        return (
            <div>
              
 
 <div class="sidebar-nav">
    <nav class="navbar navbar-dark bg-dark fixed-top">
        <div class="container-fluid">
       
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                <span class="navbar-toggler-icon"></span>
                
            </button>
            <label style={{color:"white"}} htmlFor="username"> Username:</label>
            <input type="text" />
            <label style={{color:"white"}} htmlFor="password">Password:</label>
            <input  style={{margin:"0,0,10rem"}}type="password" name="" id="" />
            <button class="btn btn-light ms-0">Login</button>

           
    <br />
    <br />
          
            <div class="offcanvas offcanvas-start show" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
              <div class="offcanvas-body">
                    <ul class="navbar-nav">
                        <li><a href="#"><i class="bi bi-calendar3"></i> <span class="item-text">Work Diary</span></a></li>
                        <li><a href="#"><i class="bi bi-pencil-square"></i> <span class="item-text">Applications</span></a></li>
                        <li><a href="#"><i class="bi bi-people"></i> <span class="item-text">Client Manager</span></a></li>
                        <li><a href="#"><i class="bi bi-book"></i> <span class="item-text">Bookings</span></a></li>
                        <li><a href="#"><i class="bi bi-person-check"></i> <span class="item-text">Candidates</span></a></li>
                        <li><a href="#"><i class="bi bi-envelope"></i> <span class="item-text">Email</span></a></li>
                        <li><a href="#"><i class="bi bi-graph-up"></i> <span class="item-text">Reports</span></a></li>
                    </ul>
              </div>
            </div>
        </div>
    </nav>
</div>





                
            </div>
        );
    }
}

export default HeaderComponeet;