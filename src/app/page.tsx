import Link from 'next/link';

import s from './page.module.scss';

export default function Home() {
  console.log('v: 0.0.2');

  const tag = 'ioji';

  return (
    <main className={s.entrance}>
      <div className={s.entrance__window}>
        <Link href="/main">
          <h1 className={`fontBold ${s.glitch}`} data-text={tag}>
            {tag}
          </h1>
        </Link>
      </div>
    </main>
  );
}
