'use client';

import React from 'react';
import { Container } from './container';
import Link from 'next/link';

export const Footer: React.FC = ({ }) => {

    return (
        <footer>
            <Container className='flex justify-center items-center w-full h-[5dvh] uppercase text-[1.4rem] font-[700] tracking-[0.1rem] max-md: text-[0.75rem]'>
                Розробка та Маркетинг <Link href={'https://www.spotium360.com/'} className='px-[0.5rem]'>SPOTIUM 360</Link>
            </Container>
        </footer>
    );
};
