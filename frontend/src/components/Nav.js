import Message from '../assets/icons/Messagevg.svg';
import Homei from '../assets/icons/Homei.svg';
import post from '../assets/icons/post.svg';
import { Link } from 'react-router-dom';

const Nav = () => {
    return(
        <nav>
            <div>
                <Link to="/"><img src={Homei} alt="home" className='navI' /></Link>
                <Link to="/issues"><img src={post} alt="post" className='navI3' /></Link>
                <Link to="/replies"><img src={Message} alt="replies" className='navI' /></Link>
            </div>
        </nav>
    )
} 


export default Nav;