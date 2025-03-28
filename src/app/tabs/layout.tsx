'use client';

import React from 'react';
import { usePathname } from 'next/navigation';

import Link from 'next/link';
import { CommonButton } from 'components/index';

import s from './layout.module.scss';

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

  //CURRENT
  //BUTTON ANIMATION
  const rippleButton = document.querySelector(
    '.ripple-button'
  ) as HTMLElement;

  function mousePositionToCustomProp(
    event: Event,
    element: HTMLElement
  ) {
    if (!(event instanceof MouseEvent)) return;
    let posX = event.offsetX;
    let posY = event.offsetY;

    element.style.setProperty('--x', posX + 'px');
    element.style.setProperty('--y', posY + 'px');
  }
  if (rippleButton)
    rippleButton.addEventListener('click', (e) => {
      mousePositionToCustomProp(e, rippleButton);
      //CONSOLE
      console.log('CLICK');
      rippleButton.classList.add('s.pulse');
      rippleButton.addEventListener(
        'animationend',
        () => {
          rippleButton!.classList.remove('s.pulse');
        },
        { once: true }
      );
    });

  //CURRENT

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
              className={`
                ${
                  currentPath === link.href ? s.tabs__active : ''
                } ${s.rippleButton}
              `}
            >
              <Link href={link.href.toLowerCase()}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div>{children}</div>
      <CommonButton text={'На старт!'} type={'home'} />
    </section>
  );
}
