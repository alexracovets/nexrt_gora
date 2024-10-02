'use client';

import React from 'react';
import { Container } from './container';

export const Footer: React.FC = ({ }) => {

    return (
        <footer>
            <Container className='flex justify-center items-center w-full h-[5dvh]'>
                Розробка та Маркетинг <a href='https://www.spotium360.com/' target='_blank' rel='noreferrer'>SPOTIUM 360</a>
            </Container>
        </footer>
    );
};
