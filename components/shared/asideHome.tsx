'use client';

import { Separator } from '@radix-ui/react-separator';
import React, { useEffect, useState } from 'react';
import useStoreGrid from '@/store/useStoreGrid';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface GridItem {
    price: number;
    count: number;
}

export const AsideHome: React.FC = ({ }) => {
    const activeGrids = useStoreGrid(state => state.activeGrids);
    const [priceTotal, setPriceTotal] = useState(0);
    const [sections, setSections] = useState<{ price: number, count: number }[]>([]);

    useEffect(() => {
        const newSections: { price: number, count: number }[] = [];
        let newTotalPrice = 0;
        activeGrids.forEach((item: GridItem) => {
            newTotalPrice += item.price;
            const existingSection = newSections.find(s => s.price === item.price);
            if (existingSection) {
                existingSection.count += 1;
            } else {
                newSections.push({ price: item.price, count: 1 });
            }
        });

        setSections(newSections);
        setPriceTotal(newTotalPrice);
    }, [activeGrids]);

    return (
        <div defaultValue="account" className="h-[100%] h-[85dvh] overflow-y-auto w-[40rem] bg-white rounded-l-lg text-regal-black py-[4rem] px-[2rem] max-md:hidden">
            <div className="text-center uppercase text-[3rem] font-[700] font-spectral mb-[2rem]">
                Залучитися до проекту
            </div>
            <p className='text-center text-[2rem]'>
                Оберіть зацікавлені локації на мапі, щоб стати міценатом нашої Кефалії
            </p>
            <Separator className='my-[4rem] border-[1px]' />
            <div className="text-center uppercase text-[3rem] font-[700] font-spectral mb-[2rem]">
                Обрані локації:
            </div>
            <div>
                {sections.map((section: GridItem) => {
                    const checkColor = () => {
                        switch (section.price) {
                            case 100:
                                return 'bg-regal-green';
                            case 200:
                                return 'bg-regal-yellow';
                            case 300:
                                return 'bg-regal-pink';
                            case 500:
                                return 'bg-regal-violet';
                            default:
                                return 'bg-regal-white';
                        }
                    }

                    return (
                        <div key={section.price} className="flex items-center justify-between mb-[1rem] border-[2px] border-regal-lightGray p-[1rem] rounded-[1rem]">
                            <div
                                className={
                                    cn('flex justify-center items-center w-[10rem] h-[10rem] bg-gray-300 text-center rounded-lg text-[3rem] font-playfair font-[700] text-regal-darkGray', checkColor())
                                }
                            >
                                {section.price + ' $'}
                            </div>
                            <div className="flex justify-center items-center text-[4rem] text-regal-darkGray min-w-[3rem] font-roboto px-[2rem]">
                                <X size={'3rem'} className='mr-[1rem]' color="#333" />
                                {section.count}
                            </div>
                        </div>
                    );
                })}
            </div>
            <Separator className='my-[4rem] border-[1px]' />
            <div className="text-center uppercase text-[3rem] font-[700] font-spectral mb-[2rem]">
                Розрахунок вартості:
            </div>
            <p className='text-center text-[4rem] font-roboto font-[700] text-regal-darkGray'>
                {priceTotal}{' $'}
            </p>
        </div>
    );
};
