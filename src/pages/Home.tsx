import { Link } from 'react-router-dom';
import monkey from '../assets/monkey.jpg';
import '../styles/Home.css';

function Home() {
  return (
    <div className="Home-header">
      <img src={monkey} id="Img-logo" alt="monkey" />
      <p id="name-logo">The Music Nest</p>
      <p>ENTER THE MUSIC ZONE</p>
      <Link to='/login'>
        <button className='home-button' >Login</button>
      </Link>
      <Link to='/signup'>
        <button className='home-button' >Sign up</button>
      </Link>
    </div>
  );
}

export default Home;



