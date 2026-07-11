import React from 'react';
import Modal from 'react-modal';
import '../styles/PopUp.css'
import '../styles/Basics.css'
import '../styles/RatePopUp.css'

interface PopUpProps {
  id:string
}

interface PopUpState {
  modalOpened: boolean;
}

class RatePopUp extends React.Component<PopUpProps, PopUpState> {
  constructor(props: PopUpProps) {
    super(props);

    this.state = { modalOpened: false };
    this.toggleModal = this.toggleModal.bind(this);
  }
  
  toggleModal() {
    this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
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
          className="Add-window"
        >
          <button className="Add-button" onClick={this.toggleModal}> click to close </button>
          <div className='Row-div' id="scorebox">
            <p>Score:</p>
            <input className='Inputbox' id='scoreinput'></input>
          </div>
          <p>{id}</p>
        </Modal>
      </div>
    );
  }
}

export default RatePopUp;