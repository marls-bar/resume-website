import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import { Button } from '../../src/components/Button';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true)

    const handleCLick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className="navbar-container">
            <Link to="/" className="navbar-logo">
                TRVL <i className="fab fa-brands fa-freebsd"></i>
            </Link>
            <div className='menu-icon' onClick={handleCLick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        About me
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                        Projects
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Products' className='nav-links-mobile' onClick={closeMobileMenu}>
                        Resume
                    </Link>
                </li>
            </ul>
            {button && <Button buttonStyle='btn--outline`'>SIGN UP</Button>}
        </div>
      </nav>
    </>
  )
}

export default Navbar
