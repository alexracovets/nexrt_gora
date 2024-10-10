'use client';

import React from 'react';
import { Form } from './form';

import useForm from '@/store/useForm';
export const ContactForm: React.FC = ({ }) => {
    const isModal = useForm(state => state.isModal);

    return (
        <>
            {
                isModal ?
                    <div className='fixed flex justify-center items-center left-0 top-0 w-full h-[100dvh]'>
                        <Form />
                    </div> :
                    null
            }
        </>
    );
};
