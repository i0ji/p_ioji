declare module "*.JPG" {
  const value: string;
  export default value;
}

interface heroModel {
  title: string;
  period: string;
  responsibilities: Array<string>;
  technologies: Array<string>;
}

interface aboutModel {
  title: string;
  description: string;
}

interface HeroModalProps {
  isOpen: boolean;
  handleClose: () => void;
  description: Array<string>;
}
