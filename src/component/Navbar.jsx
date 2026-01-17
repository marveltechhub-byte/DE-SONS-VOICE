import React, { useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import img from './../../public/logo.jpeg'

function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="navbar">
        <div className="nav-prop">
          {/* Brand */}
          <Link to="/" className="brand">
            <img src={img} alt="logo" />
            DE SONS VOICE
          </Link>

          {/* Desktop Links */}
          <div className="nav-right">
            <Link to="/">Home</Link>
            <Link to="/discover">Discover</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">SignUp</Link>
          </div>

          {/* Mobile Menu Icon */}
          <Menu className="menu-icon" onClick={() => setOpen(true)} />
        </div>
      </div>

      {/* Mobile Drawer */}
      <div className={`drawer ${open ? 'open' : ''}`}>
        <X className="close-icon" onClick={() => setOpen(false)} />

        <Link to="/" onClick={() => setOpen(false)}>Home</Link>
        <Link to="/discover" onClick={() => setOpen(false)}>Discover</Link>
        <Link to="/login" onClick={() => setOpen(false)}>Login</Link>
        <Link to="/signup" onClick={() => setOpen(false)}>SignUp</Link>
      </div>

      {/* Overlay */}
      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  )
}

export default Navbar
