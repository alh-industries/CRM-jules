import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h1>CarePatron CRM</h1>
      <ul>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>
        <li><Link to="/forms">Forms</Link></li>
        <li><Link to="/upload">Upload File</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/login">Logout</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
