import React from 'react';
// import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <header className="header" style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      zIndex: 1000,
      backgroundColor:"black;" // Ensure it stays above other content
    }}>
    <div className='mx-5'></div>
      <div className="flex justify-center">
        <Link to="/"><img src="IMG/SwadKosh-Logo.png" alt="Logo" className="max-w-full h-auto" style={{width:"215px",alignItems:"center"}}/></Link>
      </div>
      <div className="address-content mx-3">
        <img src="IMG/pin.png" alt="Location Icon" className="w-5 h-5 mr-2 mx-1" style={{height:"25px"}} />
        <i>
          {props.Location}
        </i>
      </div>
    </header>
  );
};

export default Header;
