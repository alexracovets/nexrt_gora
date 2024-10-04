'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import GridItem from './GridItem/gridItem';

export const GridMap: React.FC = ({ }) => {
    const [cells, setCells] = useState([]);
    const vertical = 35;
    const horisont = 46;

    useEffect(() => {
        fetch('/data/grids.json')
            .then((response) => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then((json) => {
                setCells(json);
            })
            .catch((error) => {
                console.error('There was a problem with the fetch operation:', error);
            });
    }, []);

    return (
        <div className='flex justify-start items-start w-[150rem] h-[85dvh] border-y-[1rem] border-r-[1rem] border-white border-solid rounded-r-lg overflow-hidden'>
            <div className='bg-regal-green h-[100%] overflow-scroll p-[5rem]'>
                <div className='flex relative w-[194rem] h-[149rem]'>
                    <div className='absolute left-0 top-0 z-10 w-[100%] h-[100%] pointer-events-none'>
                        <Image src="./mask/mask.png"
                            fill={true}
                            alt="mask"
                            sizes="(max-width: 768px) 100vw, 
                    (max-width: 1200px) 50vw, 
                    33vw"
                            priority={true}
                        />
                    </div>
                    {cells && <ul className={`flex flex-wrap w-full`}>
                        {cells.map((grid, idx) => {
                            return (
                                <GridItem
                                    key={idx}
                                    width={`${100 / horisont}%`}
                                    height={`${100 / vertical}%`}
                                    grid={grid}
                                />
                            )
                        })}
                    </ul>}
                </div>
            </div>
        </div>
    );
};
