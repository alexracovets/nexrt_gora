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
        <div className='flex justify-start items-center grow h-[100%]'>
            <div className='py-[1rem] pr-[1rem] pl-[0.5rem] bg-regal-green rounded-r-lg'>
                <div className='flex relative w-[98rem] h-[74.5rem] rounded-r-lg'>
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
