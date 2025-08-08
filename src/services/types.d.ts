declare module "*.JPG" {
  const value: string;
  export default value;
}

interface heroDataModel {
  title: string;
  period: string;
  responsibilities: Array<string>;
  technologies?: Array<string>;
}

interface aboutDataModel {
  title: string;
  imgSrc?: string;
  keyWords: string | Array<string>;
  description: string | Array<string>;
  id: string;
}

interface aboutCardModel {
  title: string;
  to: string;
  className: string;
  id: string;
  data: aboutDataModel;
  slug?: string;
}
