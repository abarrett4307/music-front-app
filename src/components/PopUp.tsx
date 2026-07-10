import React from 'react';
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

class PopUp extends React.Component<PopUpProps, PopUpState> {
  constructor(props: PopUpProps) {
    super(props);

    this.state = { modalOpened: false };
    this.toggleModal = this.toggleModal.bind(this);
  }
  
  toggleModal() {
    this.setState(prevState => ({ modalOpened: !prevState.modalOpened }));
  }

  render() {
    const { data } = this.props;
    return (
      <div>
        <button className="Add-button" onClick={this.toggleModal}>
          {data.buttonText}
        </button>
        <Modal
          isOpen={this.state.modalOpened}
          onRequestClose={this.toggleModal}
          contentLabel="Modal with image"
          className="Add-window"
        >
          <button className="Add-button" onClick={this.toggleModal}> click to close </button>
          <AddPage type={data.type}/>
        
        </Modal>
      </div>
    );
  }
}

export default PopUp;