'use client';

import { useEffect, useRef, useState } from 'react';

import s from './page.module.scss';

export default function AboutTab() {
  const timelineRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  return (
    <section className={s.tab__about}>
ABOUT
    </section>
  );
}
  