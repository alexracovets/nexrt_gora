'use client';

import { Container } from './container';
import Headroom from 'react-headroom';
import Link from 'next/link';
import React, { useState } from 'react';
import Hamburger from 'hamburger-react';

export const Header: React.FC = ({ }) => {
    const [isOpen, setOpen] = useState(false);

    const linkList = [
        {
            name: 'Мапа',
            href: '/'
        },
        {
            name: 'Про проект',
            href: '/project'
        },
        {
            name: 'Як працює',
            href: '/work'
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
            <Headroom>
                <Container className='flex h-[10dvh] justify-start items-center'>
                    <div className='hidden max-md:flex'>
                        <Hamburger toggled={isOpen} toggle={setOpen} color="white" size={36} />
                    </div>
                    <div className='max-md:flex max-md:fixed max-md:left-0 max-md:top-0 max-md:w-full max-md:h-[100dvh]'>
                        <ul className='flex max-md:flex-col'>
                            {linkList.map((link, index) =>
                                <li key={index} className='mx-2'><Link href={link.href} className='uppercase text-[3rem] p-3 font-[700] tracking-[0.1rem]'>{link.name}</Link></li>
                            )}
                        </ul>
                    </div>
                </Container>
            </Headroom>
        </header>

    );
};
