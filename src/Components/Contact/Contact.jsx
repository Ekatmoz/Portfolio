import './Contact.css';
import theme_pattern from '../../assets/theme_pattern.png'
import { FaMailBulk } from 'react-icons/fa';
import { FaLocationPin } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa';
import Swal from 'sweetalert2';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "e71e4e3f-06b6-4838-b4f6-5dc558a0b95d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire(res.message);
    }
  };
  return (
    <div id='contact' className='contact'>
      <div className="contact-title">
        <h1>Get in touch</h1>
        <img src={theme_pattern} alt="patern" width={250}/>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's talk</h1>
          <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
          <div className="contact-details">
            <div className="contact-detail">
              <FaMailBulk className='icon'/>
              <p>ekatmoz@gmail.com</p>
            </div>
            <div className="contact-detail">
              <FaPhone className='icon'/>
              <p>+36704347756</p>
            </div>
            <div className="contact-detail">
              <FaLocationPin className='icon'/>
              <p>Siófok, Hungary</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type="text" placeholder='Enter your name' name='name' />
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter your email' name='email' />
          <label htmlFor="">Write your message here</label>
          <textarea name="message" id="" rows="8" placeholder='Enter your message'></textarea>
          <button type='submit' className="contact-submit">Submit now</button>
        </form>
      </div>
    </div>
  )
}


export default Contact;