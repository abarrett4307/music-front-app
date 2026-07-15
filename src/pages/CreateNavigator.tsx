import { useNavigate } from 'react-router-dom';

import Taskbar from '../components/Taskbar';
import '../styles/Basics.css'
import '../styles/CreateNavigator.css'

function CreateNavigator() {
    const navigate = useNavigate();

    return (
        <div>  
            <Taskbar />
            <div className='Background'>
                <div className='Centered' id='navigator-div'>
                    <h1 className='Page-title' id='contribute-title'>Contribute to The Music Nest</h1>
                    <button className='basic-button' id='create-button' onClick={()=> {navigate('./artist')}}>Create new Artist</button>
                    <button className='basic-button' id='create-button' onClick={()=> {navigate('./album')}}>Create new Album</button>
                    <button className='basic-button' id='create-button' onClick={()=> {navigate('./song')}}>Create new Single Song</button>
                </div>
            </div>
        </div>
    );
}

export default CreateNavigator;