import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

Modal.setAppElement('#app');

const OptionModal = (props) => (
    <Modal
        ariaHideApp={false}
        isOpen={!!props.selectedOption}
        contentLabel="selected Option"
        onRequestClose={props.handleSelectedOption}
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick={props.handleSelectedOption}>Ok</button>
    </Modal>
);

export default OptionModal;