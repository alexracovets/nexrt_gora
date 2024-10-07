'use client';

import React, { Suspense, lazy } from 'react';
import { Loader } from './loader';
const CanvasExperience = lazy(() => import('./canvasExperience'));

export const Experience: React.FC = () => {

    return (
        <div className='flex justify-center items-center w-[150rem] h-[85dvh] border-y-[1rem] border-r-[1rem] border-white border-solid rounded-r-lg overflow-hidden max-md:border-[0] max-md:rounded-[0]'>
            <Suspense fallback={<Loader />}>
                <CanvasExperience />
            </Suspense>
        </div>
    );
};
