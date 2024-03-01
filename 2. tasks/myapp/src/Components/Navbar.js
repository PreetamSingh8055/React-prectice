// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex items-center">
        <Link to="/" className="text-white text-lg font-semibold">LEGEND</Link>
        <ul className="flex-grow flex space-x-4 justify-center ">
          <li><Link to="/" className="text-white">Toggle</Link></li>
          <li><Link to="/about" className="text-white">RealToggle</Link></li>
          <li><Link to="/services" className="text-white">IncAndDecre</Link></li>
          <li><Link to="/contact" className="text-white">TextTransform</Link></li>
          <li><Link to="/Table" className='text-white'>Api-Table</Link> </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
