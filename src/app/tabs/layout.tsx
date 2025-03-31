'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import { CommonButton } from '@/components/index';

import { nanoid } from 'nanoid';

import s from './layout.module.scss';

//CURRENT
import Ripple from 'react-ripplejs';

export default function TabsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentPath = usePathname();

  console.log(currentPath);

  const tabs = [
    { href: '/tabs', label: 'Main' },
    { href: '/tabs/about', label: 'About' },
    { href: '/tabs/cat', label: 'Cat' },
    { href: '/tabs/portfolio', label: 'Portfolio' },
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
            <li
              key={link.href}
              className={
                currentPath === link.href ? s.tabs__active : ''
              }
            >
              <Ripple
                // boolean?, default: false
                opacity={''} // string?, default: ""
              >
                <Link href={link.href}>
                  {link.label}
                </Link>
              </Ripple>
            </li>
          ))}
        </ul>
      </nav>

      <div>{children}</div>
      <CommonButton text={'На старт!'} type={'home'} />
    </section>
  );
}
