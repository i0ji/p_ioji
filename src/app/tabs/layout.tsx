import s from './styles.module.scss'
import Link from 'next/link';

export default function TabsLayout({children}: { children: React.ReactNode }) {
    return (
        <section className={s.tabs__layout}>
            <h1>Вкладки</h1>
            <nav>
                <Link href="/tabs/about">Main</Link>
                <Link href="/tabs/portfolio">Examples</Link>
                <Link href="/tabs/cat">Cat</Link>
            </nav>
            <div>{children}</div>
        </section>
    );
}


