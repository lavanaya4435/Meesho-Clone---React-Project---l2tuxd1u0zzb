import React from 'react'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
      <>
          <div>
              <nav className="navbar navbar-expand-lg navbar-light bg-light bg-red py-3 shadow-sm">
                  <div className="container">
  <NavLink className="navbar-brand fw-bold fs-4" to="#">Meesho</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

            <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
            </form>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mx-auto">
      <li className="nav-item active">
        <NavLink className="nav-link" to="/home"><i className="fa fa-home" aria-hidden="true"></i>Home <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/products"><i className="fa fa-product-hunt" aria-hidden="true"></i>Products</NavLink>
                </li>
                 <li className="nav-item">
        <NavLink className="nav-link" to="/home"><i className="fa fa-download" aria-hidden="true"></i>Dowload App</NavLink>
                </li>
                 <li className="nav-item">
        <NavLink className="nav-link" to="/"><i className="fa fa-user" aria-hidden="true"></i>Profile</NavLink>
                </li>
                 <li className="nav-item">
        <NavLink className="nav-link" to="cart"><i className="fa fa-shopping-cart" aria-hidden="true"></i>Cart</NavLink>
                </li>
      
    </ul>
              <div className="button">
                <NavLink to='/login' className='btn btn-outline-dark'><i className="fa fa-login"></i> Login</NavLink>
    </div>
                      </div>
                      </div>
</nav>
      </div>
      
      </>
  )
}

export default Navbar
