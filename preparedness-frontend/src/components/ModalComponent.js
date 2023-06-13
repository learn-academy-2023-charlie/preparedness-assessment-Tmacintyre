import React from "react";
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";

const ModalComponent = ({ name, closeModal }) => {
  const handleModalClose = () => {
    closeModal();
  };

  return (
    <Modal isOpen={true} toggle={handleModalClose}>
      <ModalHeader toggle={handleModalClose}>Hello, {name}!</ModalHeader>
      <ModalBody>
        <p>Bacon ipsum dolor amet short ribs brisket venison rump drumstick pig sausage prosciutto chicken spare ribs salami picanha doner. Kevin capicola sausage, buffalo bresaola venison turkey shoulder picanha ham pork tri-tip meatball meatloaf ribeye. Doner spare ribs andouille bacon sausage. Ground round jerky brisket pastrami shank.</p>
      </ModalBody>
      <ModalFooter>
        <Button color="secondary" onClick={handleModalClose}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default ModalComponent;