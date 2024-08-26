import './MyWork.css';
import theme_pattern from '../../assets/theme_pattern.png';
import mywork_data from '../../assets/mywork_data';
import { FaArrowRight } from 'react-icons/fa';

const MyWork = () => {
  return (
    <div id='work' className='mywork'>
      <div className="mywork-title">
        <h1>My latest work</h1>
        <img src={theme_pattern} alt="patern" width={250}/>
      </div>
      <div className="mywork-container">
        {mywork_data.map(( work, index ) => {
          return <img key={index} src={work.w_img} alt="web_site"/>
        })}
      </div>
      <div className="mywork-showmore">
        <p>Show more</p>
        <FaArrowRight/>
      </div>
    </div>
  )
}

export default MyWork;