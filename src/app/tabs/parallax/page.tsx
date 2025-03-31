'use client';

import {
  Parallax,
  ParallaxLayer,
  IParallax,
} from '@react-spring/parallax';
import { useRef } from 'react';
import './Timeline.css';

// Типы для элементов timeline
type TimelineItem = {
  id: number;
  year: string;
  title: string;
  description: string;
  technologies: string[];
};

const Timeline = () => {
  const parallaxRef = useRef<IParallax>(null);
  const totalPages = 5; // Количество "страниц" параллакса

  // Данные для временной шкалы
  const timelineData: TimelineItem[] = [
    {
      id: 1,
      year: '2022',
      title: 'Once in the galaxy far away...',
      description: 'Изучение основ веб-разработки',
      technologies: ['HTML5', 'CSS3', 'JavaScript'],
    },
    {
      id: 2,
      year: '2022',
      title: 'Погружение в фронтенд',
      description: 'Освоение современных фреймворков',
      technologies: ['React', 'TypeScript', 'Redux'],
    },
    {
      id: 3,
      year: '2024',
      title: 'Курсы',
      description:
        'Решив систематизировать знания, взял курс "Продвинутого React" на Yandex.Practicum',
      technologies: [
        'React',
        'RTK',
        'Router',
        'REST API',
        'WebSocket',
      ],
    },
  ];

  return (
    <div className="timeline-container">
      <Parallax ref={parallaxRef} pages={totalPages}>
        {/* Фоновые слои с параллакс-эффектом */}
        <ParallaxLayer
          offset={0}
          speed={0.2}
          style={{
            background:
              'linear-gradient(to bottom, #667eea, #764ba2)',
            zIndex: -2,
          }}
        />

        <ParallaxLayer
          offset={0.5}
          speed={0.8}
          style={{
            background:
              'linear-gradient(to bottom, #764ba2, #6b46c1)',
            zIndex: -1,
            opacity: 0.7,
          }}
        />

        {/* Центральная линия timeline */}
        <ParallaxLayer
          offset={0}
          speed={0.5}
          factor={totalPages}
          style={{
            display: 'flex',
            justifyContent: 'center',
            zIndex: -1,
          }}
        >
          <div className="timeline-line" />
        </ParallaxLayer>

        {/* Элементы timeline */}
        {timelineData.map((item, index) => {
          const offset = index * 0.8; // Распределение по страницам

          return (
            <div key={item.id}>
              {/* Точка на линии */}
              <ParallaxLayer
                offset={offset}
                speed={0.3}
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <div className="timeline-dot" />
              </ParallaxLayer>

              {/* Контент элемента */}
              <ParallaxLayer
                offset={offset}
                speed={0.5}
                style={{
                  display: 'flex',
                  flexDirection:
                    index % 2 === 0 ? 'row' : 'row-reverse',
                  alignItems: 'center',
                  padding: '0 10%',
                }}
              >
                <div
                  className={`timeline-card ${
                    index % 2 === 0 ? 'left' : 'right'
                  }`}
                >
                  <h3>{item.year}</h3>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <div className="technologies">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="tech-tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </ParallaxLayer>
            </div>
          );
        })}

        {/* Навигационные стрелки */}
        <ParallaxLayer
          offset={totalPages - 1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            paddingBottom: '50px',
          }}
        >
          <button
            className="nav-button"
            onClick={() => parallaxRef.current?.scrollTo(0)}
          >
            ↑ Наверх
          </button>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
};

export default Timeline;
