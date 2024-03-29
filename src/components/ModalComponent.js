import React from 'react'
import { Button, Modal } from 'react-bootstrap';

function ModalComponent({showModal, setShowModal}) {

  return (
    <Modal show={showModal.isOpen} onHide={() => setShowModal({isOpen: false, video: null})}>
    <Modal.Header closeButton>
      <Modal.Title>Video Player</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <video width="100%" height="100%" autoPlay controls>
        <source src={showModal?.video?.fileURL && URL.createObjectURL(showModal?.video?.fileURL)} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Modal.Body>
    <Modal.Footer>
      <Button variant="secondary" onClick={() => setShowModal({isOpen: false, video: null})}>
        Close
      </Button>
    </Modal.Footer>
  </Modal>
  )
}

export default ModalComponent;