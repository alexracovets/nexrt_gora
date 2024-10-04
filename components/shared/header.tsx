'use client';

import { Container } from './container';
import Headroom from 'react-headroom';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import Hamburger from 'hamburger-react';
import { cn } from '@/lib/utils';

interface HeadroomWithUnpin extends Headroom {
    unpin: () => void;
    pin: () => void;
}

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
    const headroomRef = useRef<HeadroomWithUnpin | null>(null);

    useEffect(() => {
        if (isOpen && headroomRef.current) {
            headroomRef.current.unpin();
        } else if (!isOpen && headroomRef.current) {
            headroomRef.current.pin();
        }
    }, [isOpen]);

    return (
        <header>
            <Headroom
                ref={headroomRef}
                className={isOpen ? 'active' : ''}
            >
                <Container className='flex h-[10dvh] justify-start items-center max-md:justify-end'>
                    <div className='hidden max-md:flex relative z-[10]'>
                        <Hamburger toggled={isOpen} toggle={setOpen} color="white" size={36} />
                    </div>
                    <div className={cn('max-md:flex max-md:fixed max-md:left-0 max-md:top-0 max-md:w-full max-md:h-[100dvh] transition-all duration-300 ease-in-out', isOpen ? 'max-md:translate-y-[0%]' : 'max-md:translate-y-[-100%]')}>
                        <ul className='flex max-md:flex-col max-md:justify-center max-md:items-center max-md:w-full max-md:bg-black'>
                            {linkList.map((link, index) =>
                                <li key={index} className='mx-2'><Link href={link.href} onClick={() => setOpen(false)} className='uppercase text-[3rem] p-3 font-[700] tracking-[0.1rem]'>{link.name}</Link></li>
                            )}
                        </ul>
                    </div>
                </Container>
            </Headroom>
        </header>

    );
};
