import React from 'react';
import Modal from 'react-modal';
import { ChangeEvent } from 'react';
import '../styles/PopUp.css'
import '../styles/Basics.css'
import '../styles/RatePopUp.css'
import addSongRating from '../utils/addSongRating';

interface PopUpProps {
  id:string
}

interface PopUpState {
  modalOpened: boolean;
  description:string;
  score:string;
}

class RatePopUp extends React.Component<PopUpProps, PopUpState> {
  constructor(props: PopUpProps) {
    super(props);

    this.state = { modalOpened: false, description:'a',score:'10' };
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleModal() {
    this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
  }

  handleChangeDescription = (event: ChangeEvent<HTMLTextAreaElement>) => {
      this.setState({ description: event.target.value });
    }; 

    handleChangeScore = (event: ChangeEvent<HTMLInputElement>) => {
      this.setState({ score: event.target.value });
    };

  Submit = () => {
    let username = localStorage.getItem('user');
    if (!username) {
      alert('login to continue');
    }
    else {
      addSongRating(this.state.score,this.state.description,this.props.id,username);
      this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
    }
  }

  render() {
    const { id } = this.props;
    return (
      <div>
        <button className="Add-button" onClick={this.toggleModal}>
          Rate
        </button>
        <Modal
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          contentLabel="Modal with image"
          className="Rate-window"
        >
          <button className="Add-button" onClick={this.toggleModal}> click to close </button>
          <div className='Rating-contents'>
            <h2>Add Rating for 'song'</h2>
            <div className='Row-div' id="scorebox">
              <p>Score:</p>
              <input className='Inputbox' id='scoreinput' placeholder='Score out of 100' onChange={this.handleChangeScore}></input>
            </div>
            <div className='Row-div' id="scorebox">
              <p>Review:</p>
              <textarea
                id="descriptioninput"
                value={this.state.description}
                onChange={this.handleChangeDescription}
                rows={2} // Sets the initial visible height to 5 lines
                cols={40} // Sets the visible width
                placeholder="Type your review text here..."
                className='Inputbox'
              />
            </div>
            <button className="Add-button" id="submit-button" onClick={this.Submit}>submit</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default RatePopUp;