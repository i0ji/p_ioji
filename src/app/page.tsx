import Link from 'next/link';

import s from './page.module.scss';

export default function Home() {
  console.log('v: 0.0.2');
<<<<<<< HEAD
=======

  const tag = 'ioji';
>>>>>>> 4ed75f5c60d36b8eaccf949221890f6629b62b28

  return (
    <main className={s.main}>
      <Link href="/main">
        <h1 className={`fontBold ${s.glitch}`} data-text={tag}>
          {tag}
        </h1>
      </Link>
    </main>
  );
}
