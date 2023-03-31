import tick from '../assets/images/tick.png';
import { ReactComponent as Logo } from '../assets/icons/Messagevg.svg';
import { Link } from 'react-router-dom';

const Sent = () => {
      
    return(
        <div>
            <h2>Sent!</h2>
        <img src={tick} alt="sent" className='senI' />
        <p id='p'>View replies on your <Link to='/replies'>issues</Link> on the <Logo fill="green" className='test'/>tab
        </p>

        <Link to='/CompList'><input type="button" value="View other Complaints" id='viewBtn' className="input" /></Link>
        </div>
     )
}

export default Sent;