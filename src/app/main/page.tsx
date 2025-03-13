'use client';

import s from './page.module.scss';

import Button from '@/components/Button/Button';

export default function Main() {
  return (
    <section className={s.mainPage}>
      <h1>MAIN</h1>

      <Button text={'MAIN'} route={'/'} />
    </section>
  );
}
