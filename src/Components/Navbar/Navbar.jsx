import './Navbar.css';
import logo from '../../assets/kate_logo.png';
import { useRef, useState } from 'react';
import underline from '../../assets/theme_pattern.png';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { FaBars } from 'react-icons/fa';
import { FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menu, setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  }

  return (
    <div className='navbar'>
      <img src={logo} alt='mylogo' width={140} />
      <FaBars className="nav-mob-open" onClick={openMenu} size={24}/>
      <ul ref={menuRef} className='nav-menu'>
        <FaTimes className="nav-mob-close" onClick={closeMenu} size={24} />
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#home'>
            <p onClick={() => setMenu('home')}>Home</p>
          </AnchorLink>
          {menu === 'home' ? <img src={underline} alt='pattern' style={{ width: '40px', height: 'auto' }} /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#about'>
            <p onClick={() => setMenu('about')}>About Me</p>
          </AnchorLink>
          {menu === 'about' ? <img src={underline} alt='pattern' style={{ width: '40px', height: 'auto' }} /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#services'>
            <p onClick={() => setMenu('services')}>Services</p>
          </AnchorLink>
          {menu === 'services' ? (
            <img src={underline} alt='pattern' style={{ width: '40px', height: 'auto' }} />
          ) : (
            <></>
          )}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#work'>
            <p onClick={() => setMenu('work')}>Portfolio</p>
          </AnchorLink>
          {menu === 'work' ? <img src={underline} alt='pattern' style={{ width: '40px', height: 'auto' }} /> : <></>}
        </li>
        <li>
          <AnchorLink className='anchor-link' offset={50} href='#contact'>
            <p onClick={() => setMenu('contact')}>Contact</p>
          </AnchorLink>
          {menu === 'contact' ? <img src={underline} alt='pattern' style={{ width: '40px', height: 'auto' }} /> : <></>}
        </li>
      </ul>
      <div className='nav-connect'>
        <AnchorLink className='anchor-link' offset={50} href='#contact'>
          Connect With Me
        </AnchorLink>
      </div>
    </div>
  );
};

export default Navbar;
