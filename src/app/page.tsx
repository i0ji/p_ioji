import Link from 'next/link';

import s from './page.module.scss';

export default function Home() {
    //CONSOLE
    console.log('v: 0.0.3');
    //LATER
    const tag = 'ioji';

    return (
        <main className={s.entrance}>
            <div className={s.entrance__window}>
                <Link href="/tabs">
                    <h1 className={`fontBold ${s.glitch}`} data-text={tag}>
                        {tag}
                    </h1>
                </Link>
            </div>
        </main>
    );
}
