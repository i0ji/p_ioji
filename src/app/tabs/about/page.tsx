'use client'; // Обязательно для работы с DOM и хуками

import { useEffect, useRef } from 'react';
import s from './page.module.scss';

export default function AboutTab() {
  // 1. Используем refs вместо document.querySelector
  const mountainLeftRef = useRef<HTMLImageElement>(null);
  const mountainRightRef = useRef<HTMLImageElement>(null);
  const cloud1Ref = useRef<HTMLImageElement>(null);
  const cloud2Ref = useRef<HTMLImageElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const manRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const value = window.scrollY;

      // 2. Проверяем refs.current вместо querySelector
      if (
        cloud1Ref.current &&
        cloud2Ref.current &&
        mountainLeftRef.current &&
        mountainRightRef.current &&
        textRef.current &&
        manRef.current
      ) {
        mountainLeftRef.current.style.left = `-${value / 0.7}px`;
        cloud2Ref.current.style.left = `-${value * 2}px`;
        mountainRightRef.current.style.left = `${value / 0.7}px`;
        cloud1Ref.current.style.left = `${value * 2}px`;
        textRef.current.style.bottom = `-${value}px`;
        manRef.current.style.height = `${
          window.innerHeight - value
        }px`;
      }
    };

    // 3. Добавляем обработчик
    window.addEventListener('scroll', handleScroll);

    // 4. Очищаем при размонтировании
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Пустой массив зависимостей = эффект только при монтировании

  return (
    <section className={s.about}>
      <div className={s.top}>
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/bg.jpg"
          id="bg"
          alt="background"
        />
        <h2 className={s.text} ref={textRef}>
          Mountains
        </h2>
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/man.png"
          className={s.man}
          ref={manRef}
          alt="man"
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_1.png"
          id="clouds_1"
          ref={cloud1Ref}
          alt="clouds 1"
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/clouds_2.png"
          id="clouds_2"
          ref={cloud2Ref}
          alt="clouds 2"
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_left.png"
          id="mountain_left"
          ref={mountainLeftRef}
          alt="mountain left"
        />
        <img
          src="https://aryan-tayal.github.io/Mountains-Parallax/mountain_right.png"
          id="mountain_right"
          ref={mountainRightRef}
          alt="mountain right"
        />
      </div>
    </section>
  );
}
