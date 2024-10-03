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
            href: '/project'
        },
        {
            name: 'Подарунки',
            href: '/gifts'
        },
        {
            name: 'О нас',
            href: '/about'
        }
    ]

    return (
        <header>
            <Container className='flex h-[10dvh] justify-start items-center'>
                <ul className='flex'>
                    {linkList.map((link, index) =>
                        <li key={index} className='mx-2'><Link href={link.href} className='uppercase text-[3rem] p-3 font-[700] tracking-[0.1rem]'>{link.name}</Link></li>
                    )}
                </ul>
            </Container>
        </header>
    );
};
