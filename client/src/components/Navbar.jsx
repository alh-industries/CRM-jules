import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>CarePatron CRM</h1>
      <ul>
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/forms">Forms</Link></li>
        <li><Link to="/upload">Upload File</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
