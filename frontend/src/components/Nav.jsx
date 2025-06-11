import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <>
      <header className='bg-[#]'>
        
        
        <nav className=''>
          <Link to="/">Home</Link>
          <Link to="/Login">Login</Link>
          <Link to="/Sobre">Sobre</Link>
          <Link to="*"></Link>
        </nav>
      </header>
      <hr />
    </>
  )
}

export default Nav