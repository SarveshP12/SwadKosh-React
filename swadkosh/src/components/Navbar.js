import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{backgroundColor:"#4169E1", position: "fixed", top: 50, left: 0, width: "100%", zIndex: 1000 }}>
      <div className="container-fluid" >
        <Link className="navbar-brand" to="/">SwadKosh</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-2">
            <Link className="nav-link mx-1" aria-current="page" to="/">Home</Link>
            <Link className="nav-link mx-1" to="/Sweets">Sweets</Link>
            <Link className="nav-link mx-1" to="/Biscuits">Biscuits</Link>
            <Link className="nav-link mx-1" to="/Deserts">Deserts</Link>
            <Link className="nav-link mx-1" to="/DryFood">Dry Food</Link>
            <Link className="nav-link mx-1" to="/MinuteKhaana">Minute Khaana</Link>
          </div>
        </div>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav mx-2">
            <Link className="nav-link mx-1" aria-current="page" to="/">About Us</Link>
            <Link className="nav-link mx-1" to="/Sweets">Contact Us</Link>
            <Link className="nav-link mx-1" to="/Biscuits">Blog</Link>
          </div>
        </div>
        <form class="d-flex" role="search">
          <input class="form-control mx-2" type="search" placeholder="Search" aria-label="Search"/>
          <button class="btn btn-outline-success mx-2" type="submit">Search</button>
        </form>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <Link className="navbar-nav" to="/Cart">
            <img src="IMG/trolley.png" alt="Shopping Cart" className="w-5 h-5 ml-2" style={{height:"30px"}}/>
            <div className="nav-link mx-1" aria-current="page" to="/Cart">Cart</div>
          </Link>
        </div>
        <Link to="/LogIn"><button class="btn btn-outline-success mx-1" style={{marginLeft:"-10px"}} type="submit">LOG IN</button></Link>
      </div>
    </nav>  
  );
};

export default Navbar;
