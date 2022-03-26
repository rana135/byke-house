import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';

const ReactModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <Button className='selected-btn btn btn-sm' variant="primary" onClick={handleShow}>
      CHOOSE 1 FOR ME
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>You can buy this Byke</Modal.Title>
      </Modal.Header>
      <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  );
};

export default ReactModal;