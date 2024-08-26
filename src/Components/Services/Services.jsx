import './Services.css';
import theme_pattern from '../../assets/theme_pattern.png'
import Services_Data from '../../assets/services_data';
import { FaArrowRight } from 'react-icons/fa';

const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        <img src={theme_pattern} alt="patern" width={250} />
      </div>
      <div className="services-container">
        {Services_Data.map((service,index) =>{
          return <div key={index} className="services-format">
            <h3>{service.s_no}</h3>
            <h2>{service.s_name}</h2>
            <p>{service.s_description}</p>
            <div className="services-readmore">
              <p>Read More</p>
              <FaArrowRight className='icon'/>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Services;