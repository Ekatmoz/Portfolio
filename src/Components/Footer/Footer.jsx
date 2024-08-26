import './Footer.css';
import footer_logo from '../../assets/kate_logo.png'
import { FaUser } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer-top">
        <div className="footer-top-left">
          <img src={footer_logo} alt="my-logo" width={100} />
          <p>I am a frontend developer from Hungary with 4 years of experience who is eager to learn and create more imaging projects.</p>
        </div>
        <div className="footer-top-right">
          <div className="footer-email-input">
            <FaUser/>
            <input type="email" placeholder='Enter your email' />
          </div>
          <div className="footer-subscribe">Subscribe</div>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">© 2024 Katerina Szén. All rights reserved.</p>
        <div className="footer-bottom-right">
          <p>TTerm of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  )
}

export default Footer;