'use client';

import { sendContactForm } from '@/lib/api';
import React, { useState } from 'react';


export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        await sendContactForm(formData);
    };

    return (
        <form className="flex flex-col space-y-4" onSubmit={onSubmit}>
            <input
                type="text"
                name="name"
                placeholder="Ваше ім'я"
                value={formData.name}
                onChange={handleChange}
                className="p-2 border"
            />
            <input
                type="email"
                name="email"
                placeholder="Ваш email"
                value={formData.email}
                onChange={handleChange}
                className="p-2 border"
            />
            <textarea
                name="message"
                placeholder="Ваше повідомлення"
                value={formData.message}
                onChange={handleChange}
                className="p-2 border"
            />
            <button type="submit"  className="bg-blue-500 text-white p-2">Надіслати</button>
        </form>
    );
}