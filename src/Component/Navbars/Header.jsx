import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light position-fixed top-0 bg-transparent w-100 shadow-sm">
  <div className="container nab mx-auto">
    <Link className='navbar-brand0 d-block img-fluid'><img src="/images/logo.jpg" alt="logo" className='p-3' /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon bg-light p-4"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-5">
        <li className="nav-item text-light fs-4 fw-bold">
          <NavLink className="text-light text-decoration-none" aria-current="page" to={"/"}>Home</NavLink>
        </li>
       <li className="nav-item text-light fs-4 fw-bold">
          <NavLink className="text-light text-decoration-none" aria-current="page">About</NavLink>
        </li>
         <li className="nav-item text-light fs-4 fw-bold">
          <NavLink className="text-light text-decoration-none" aria-current="page">Tech Stack</NavLink>
        </li>
        <li className="nav-item text-light fs-4 fw-bold">
          <NavLink className="text-light text-decoration-none" aria-current="page">Projects</NavLink>
        </li>
        <li className="nav-item text-light fs-4 fw-bold">
          <NavLink className="text-light text-decoration-none" aria-current="page">Contact</NavLink>
        </li>
      </ul>
      <button className='btn btn-light fw-bold px-3 py-1 me-3 fs-6'>DOWNLOAD CV</button>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header