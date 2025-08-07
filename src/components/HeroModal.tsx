import { Modal } from "ui/index";

export default function HeroModal({
  isOpen,
  handleClose,
  description,
}: heroModalProps) {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      {description}
    </Modal>
  );
}
