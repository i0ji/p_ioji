'use client';

import React from "react";
import {usePathname} from 'next/navigation';

import Link from 'next/link';
import {CommonButton} from 'components/index';


import s from './layout.module.scss';

export default function TabsLayout({children}: { children: React.ReactNode }) {

    const currentPath = usePathname();

    console.log(currentPath);

    const tabs = [
        {href: '/tabs', label: 'Main'},
        {href: '/tabs/about', label: 'About'},
        {href: '/tabs/portfolio', label: 'Portfolio'},
        {href: '/tabs/cat', label: 'Cat'},
    ];

    return (
        <section className={s.tabs__layout}>
            <header>
                <h2>Главная страница</h2>
                <p>Добро пожаловать на главную страницу вкладок!</p>
            </header>

            <nav>
                <h1>Navigation</h1>
                <ul>
                    {tabs.map((link) => (
                        <li key={link.href} className={currentPath === link.href ? s.tabs__active : ''}>
                            <Link href={link.href.toLowerCase()}>{link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <div>{children}</div>
            <CommonButton text={'НА СТАРТ'} type={'home'}/>
        </section>
    );
}
