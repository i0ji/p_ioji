'use client';

import { useEffect, useRef, useState } from 'react';

import s from './page.module.scss';

export default function AboutTab() {
  const timelineRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineItems = [
    {
      year: '2020',
      title: 'Начал изучение HTML/CSS',
      tech: 'HTML5, CSS3',
    },
    {
      year: '2021',
      title: 'Освоил JavaScript',
      tech: 'ES6+, DOM API',
    },
    {
      year: '2022',
      title: 'Изучил React',
      tech: 'React Hooks, Context',
    },
    {
      year: '2023',
      title: 'Изучил backend',
      tech: 'Node.js, Express',
    },
    {
      year: '2024',
      title: 'Полное стек разработка',
      tech: 'MERN Stack',
    },
  ];

  return (
    <section className={s.tab__about}>
      <div className="timeline-container" ref={timelineRef}>
        <div className="timeline-line"></div>

        {timelineItems.map((item, index) => {
          const parallaxValue = scrollY * 0.1 * (index + 1);

          return (
            <div
              key={index}
              className="timeline-item"
              style={{
                transform: `translateY(${parallaxValue}px)`,
                transition: 'transform 0.3s ease-out',
              }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>{item.year}</h3>
                <h4>{item.title}</h4>
                <p>{item.tech}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
