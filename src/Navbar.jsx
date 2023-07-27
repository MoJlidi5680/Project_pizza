import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setIndex }) => {
  return (
    <nav>
      <div className='navbar'>
        <div className="leftside">
          <img src="https://img.freepik.com/vecteurs-premium/pizza-logo-vecteur_25327-119.jpg?w=2000" alt="" srcset="" />
        </div>

        <div className="rightside">
          <Link to="#" className='link'onClick={() => setIndex(0)}>Home</Link>
          <Link to="#" className='link' onClick={() => setIndex(1)}>Menu</Link>
          <Link to="#" className='link' onClick={() => setIndex(2)}>About</Link>
          <Link to="#" className='link' onClick={() => setIndex(3)}>Contact</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
