interface heroModel {
  title: string;
  period: string;
  responsibilities: Array<string>;
  technologies: Array<string>;
}

declare module "*.JPG" {
  const value: string;
  export default value;
}

interface HeroModalProps {
  isOpen: boolean;
  handleClose: () => void;
  description: Array<string>;
}
