'use client';

import { Container } from './container';
import Link from 'next/link';
import React from 'react';

export const Header: React.FC = ({ }) => {

    const linkList = [
        {
            name: 'Мапа проекту',
            href: '/'
        },
        {
            name: 'Про проект',
            href: '/about'
        },
        {
            name: 'Подарунки',
            href: '/'
        },
        {
            name: 'О нас',
            href: '/'
        }
    ]

    return (
        <header>
            <Container className='flex h-[10dvh]'>
                <ul className='flex'>
                    {linkList.map((link, index) =>
                        <li key={index} className='mx-2'><Link href={link.href} className='uppercase text-4xl p-3 font-[700]'>{link.name}</Link></li>
                    )}
                </ul>
            </Container>
        </header>
    );
};
