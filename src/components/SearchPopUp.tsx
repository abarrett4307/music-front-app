import React, { useState } from 'react';
import Modal from 'react-modal';
import '../styles/PopUp.css'
import '../styles/Basics.css'
import AddPage from './AddPage';

interface PopUpProps {
  data: {
    buttonText:string;
    type:string;
  };
}


interface PopUpState {
  modalOpened: boolean;
}
/*PopUpProps, PopUpState*/
function SearchgPopUp(props : PopUpProps) {

  const [isOpened,setIsOpened] = useState(false);
  const [results,setResults] = useState([]);
  
  function toggleModal() {
    setIsOpened(!isOpened);
  }

  function searchData(input:string) {
        if (input === '') {
            return;
        }
        fetch(`/music-front-app/api/search/artists/${input}`, {
            method: 'GET',
        }).then(response => response.json()).then((response) => {(response)? setResults(response) : setResults([])});
      }
      
 return (
  <div>
    <button className="Add-button" onClick={toggleModal}>
          {props.data.buttonText}
        </button>
        <Modal
          isOpen={isOpened}
          onRequestClose={toggleModal}
          contentLabel="Modal with image"
          className="Add-window"
        >
          <button className="Add-button" onClick={toggleModal}> click to close </button>
          <AddPage type={props.data.type}/>
        
        </Modal>
  </div>
 );
}

export default SearchgPopUp;