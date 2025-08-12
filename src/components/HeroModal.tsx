import { Modal } from "components/index";

export default function HeroModal({ isOpen, handleClose, description }) {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      {description}
    </Modal>
  );
}
