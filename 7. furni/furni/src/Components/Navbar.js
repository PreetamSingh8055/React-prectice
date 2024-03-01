import React from 'react'
import { FiShoppingCart } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import Sofa from  "./Sofa.js"

function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container p">
    <a className="navbar-brand" href="#"> <h2> <b>  Furni. </b>  </h2>   </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active mx-3" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" href="#">Shop</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" href="#">About us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" href="#">Blog</a>
        </li>
        <li className="nav-item">
          <a className="nav-link mx-3" href="#">Contact us</a>
        </li>

        <div className="d-flex ms-4">
        <li className="nav-item">
          <a className="nav-link mx-2" href="#"><RxPerson className='fs-4'/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link me-2" href="#"><FiShoppingCart className='fs-4'/></a>
        </li>
        </div>
      
      </ul>
     
    </div>
  </div>
</nav>
    <Sofa/>
    </>
  )
}

export default Navbar
