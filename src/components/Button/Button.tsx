import s from './Button.module.scss';

export default function Button(props: {
  f: () => void;
  text: string;
}) {
  return (
    <button className={s.commonButton} onClick={props.f}>
      {props.text}
    </button>
  );
}
