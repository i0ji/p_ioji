'use client';

import {useState} from 'react';
import {usePathname} from 'next/navigation';

import Link from 'next/link';
import {Button} from '@/components/index';

import s from './layout.module.scss';

export default function TabsLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    const currentPath = usePathname();
    console.log(currentPath);

    return (
        <section className={s.tabs__layout}>
            <header>
                <h2>Главная страница</h2>
                <p>Добро пожаловать на главную страницу вкладок!</p>
            </header>

            <nav>
                <h1>Navigation</h1>
                <ul>
                    <Link href="/tabs">
                        <li
                            className={
                                currentPath === '/tabs' ? s.tabs__active : ''
                            }
                        >
                            Main
                        </li>
                    </Link>
                    <Link href="/tabs/about">
                        <li
                            className={
                                currentPath === '/tabs/about'
                                    ? s.tabs__active
                                    : ''
                            }
                        >
                            About
                        </li>
                    </Link>
                    <Link href="/tabs/portfolio">
                        <li
                            className={
                                currentPath === '/tabs/portfolio'
                                    ? s.tabs__active
                                    : ''
                            }
                        >
                            Portfolio
                        </li>
                    </Link>
                    <Link href="/tabs/cat">
                        <li
                            className={
                                currentPath === '/tabs/cat' ? s.tabs__active : ''
                            }
                        >
                            Cat
                        </li>
                    </Link>
                </ul>
            </nav>
            <Button text={'Назад'} route={'/'}/>
            <div>{children}</div>
        </section>
    );
}
