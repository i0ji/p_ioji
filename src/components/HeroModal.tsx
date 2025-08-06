import { Modal } from "ui/index";

export default function HeroModal({
  isOpen,
  handleClose,
  description,
}: HeroModalProps) {
  return (
    <Modal isOpen={isOpen} handleClose={handleClose}>
      {description}
    </Modal>
  );
}
