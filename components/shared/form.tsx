'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '../ui/button';
import { X } from 'lucide-react';

import useForm from '@/store/useForm';
import useStoreGrid from '@/store/useStoreGrid';

interface GridItem {
    id: number;
    name: string;
    x: number;
    y: number;
}

export const Form: React.FC = ({ }) => {
    const setIsModal = useForm(state => state.setIsModal);
    const activeGrids = useStoreGrid(state => state.activeGrids);

    const [formData, setFormData] = useState({
        formData: 'Заявка з сайту GORA',
        name: '',
        email: '',
        phone: '',
        message: '',
        listGrid: <></>
    });

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmitContactForm = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const response = await fetch('/send-mail.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: formData.name,
                email: formData.email,
                phone: formData.phone,
                message: formData.message,
                formName: "Форма з сайту ГОРА"
            }),
        });

        if (response.ok) {
            setIsModal(false);
        } else console.log(formData)
    }

    useEffect(() => {
        const active = <ul>
            {
                activeGrids.map((item: GridItem, key: number) => {
                    return (
                        <li key={key}>
                            Комірка з позціями x:{item.x}, y:{item.y}
                        </li>
                    )
                })
            }
        </ul>
        setFormData(prevFormData => ({
            ...prevFormData,
            listGrid: active,
        }));

    }, [activeGrids])

    return (
        <div className='relative flex flex-col justify-center items-center w-[70rem] py-[5rem] px-[7rem] bg-regal-black rounded-[4rem] shadow-form'>
            <button className='absolute right-[2rem] top-[2rem] w-[4rem] h-[4rem]' onClick={() => setIsModal(false)}><X className='w-full h-full' size={'3rem'} /></button>
            <h4 className='text-[5rem] font-spectral uppercase text-regal-beige font-[700] mb-[2rem]'> зворотній звʼязок </h4>
            <p className='text-[2rem] text-center font-[500] font-spectral mb-[3rem]'>
                {"Залиште свої контакти, щоб ми підготували матеріали та зв'язалися з Вами в найкоротший термін"}
            </p>
            <form onSubmit={handleSubmitContactForm} className='flex flex-col justify-center items-center w-full'>
                <input onChange={handleChange} type="text" name='name' className='text-[2rem] w-full text-regal-black font-roboto px-[5rem] py-[1.5rem] rounded-[1.5rem] mb-[2rem]' placeholder="Ім'я та Прізвище" />
                <input onChange={handleChange} type="email" name='email' className='text-[2rem] w-full text-regal-black font-roboto px-[5rem] py-[1.5rem] rounded-[1.5rem] mb-[2rem]' placeholder="E-Mail " />
                <input onChange={handleChange} type="tel" name='phone' className='text-[2rem] w-full text-regal-black font-roboto px-[5rem] py-[1.5rem] rounded-[1.5rem] mb-[2rem]' placeholder="Номер телефону" />
                <textarea onChange={handleChange} name='message' className='text-[2rem] w-full text-regal-black font-roboto px-[5rem] py-[1.5rem] rounded-[1.5rem] mb-[2rem] min-h-[10rem]' placeholder="Додаткова інформація" />
                <Button>Надіслати</Button>
            </form>
        </div>
    );
};
