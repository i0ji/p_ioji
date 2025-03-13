import s from './Button.module.scss';

import { useRouter } from 'next/navigation';

export default function Button(props: {
  route: string;
  text: string;
}) {
  const router = useRouter();

  const handleMove = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push(props.route);
    }
  };

  return (
    <button className={s.commonButton} onClick={handleMove}>
      {props.text}
    </button>
  );
}
