declare global {
  namespace Components {
    interface ButtonPropsModel {
      text: string;
      // FIXME
      // onClick?: () => void;
      type: 'home' | 'back';
    }
  }

  namespace Data {
    interface RoadmapModel {
      year: number;
      headder: string;
      description: string;
      technologies: Array<string>;
    }
  }
}

export {};
