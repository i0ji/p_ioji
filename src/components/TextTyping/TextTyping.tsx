'use client'

import React, { useState, useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import "./TextTyping.scss";

export default function TextTyping() {



    return (
        <div>
            <TypeAnimation
                sequence={['Well', 500, 'Well, oh...', 500, 'Well, here we are...', 500]}
                style={{ fontSize: '2em' }}
                repeat={Infinity}
            />
        </div>
    );
};