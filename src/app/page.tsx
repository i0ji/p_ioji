'use client';

import Link from 'next/link';
import React, {useState, useRef} from 'react';

import s from './page.module.scss';

export default function Home() {


    // CURRENT

    //CONSOLE
    console.log('v: 0.0.4');
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
