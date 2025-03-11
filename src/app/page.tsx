import Link from 'next/link';

import s from './page.module.scss';

export default function Home() {
  console.log('v: 0.0.1');

  return (
    <main className={s.main}>
      <Link href="/main">
        <h1 className="fontBold">ioji</h1>
      </Link>
    </main>
  );
}
