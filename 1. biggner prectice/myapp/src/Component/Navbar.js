import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
   <>
     <nav class="navbar">
            <div class="logo">Logo</div>
            <ul class="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Services</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
        </nav>
   </>
  )
}

export default Navbar