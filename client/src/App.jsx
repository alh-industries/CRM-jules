import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Clients from './pages/Clients';
import Calendar from './pages/Calendar';
import Login from './pages/Login';
import Register from './pages/Register';
import FormBuilder from './pages/FormBuilder';
import FileUpload from './pages/FileUpload';
import FAQ from './pages/FAQ';
import Forms from './pages/Forms';
import FormView from './pages/FormView';
import './App.css';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forms" element={<Forms />} />
          <Route path="/forms/new" element={<FormBuilder />} />
          <Route path="/form/:id" element={<FormView />} />
          <Route path="/upload" element={<FileUpload />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
