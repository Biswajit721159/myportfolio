import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import { ToastContainer, toast } from 'react-toastify';
import NotFound from './components/NotFound';
import Login from './Adminpanel/Login';
import Messages from './Adminpanel/Messages';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-black-800">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/AdminPanel' element={<Messages />}></Route>
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
