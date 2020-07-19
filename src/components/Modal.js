import React from 'react'
import Modal from 'react-bootstrap/Modal'

function ProjectModal(props) {
  return(
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Project
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>
          This is the long project description. This is the long project description. This is the long project description. This is the long project description. This is the long project description. This is the long project description. This is the long project description.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <p styles={{textAlign: "center"}}>Learn more about this project <a href="/">here</a></p>
      </Modal.Footer>
    </Modal>
  )
}

export default ProjectModal;