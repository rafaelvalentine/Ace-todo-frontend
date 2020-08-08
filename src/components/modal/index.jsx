
import React from 'react'
import Modal from 'react-bootstrap/Modal'

const ModalBox = (props) => {
  return (
    <Modal centered {...props}>
      <Modal.Header closeButton>
        
      </Modal.Header>
      {props.children}
    </Modal>
  )
}

export default ModalBox

