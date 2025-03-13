'use client';

import s from './page.module.scss';

import { useRouter } from 'next/navigation';

import Button from '@/components/Button/Button';

export default function Main() {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/');
    }
  };

  return (
    <section className={s.mainPage}>
      <h1>MAIN</h1>
      {/* <button onClick={handleBack}>Entrance</button> */}

      <Button text={'MAIN'} f={handleBack} />
    </section>
  );
}
