import React, { Component } from 'react';
import { Modal, OverlayTrigger, Button } from 'react-bootstrap';
import CustomForm from './CustomForm.js'
export default class CustomModal extends Component {
  close = () => {
    this.props.closeModal()
  }

  createNewEntry = (fields) => {
    this.props.createNewEntry(fields)
    this.close()
  }

  render() {
    let popover, tooltip = false
    return (
      <Modal show={this.props.showModal} onHide={this.close}>
        <Modal.Header closeButton>
          <Modal.Title>New Entry</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CustomForm createNewEntry={(fields) => { this.createNewEntry(fields) }}/>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.close}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
