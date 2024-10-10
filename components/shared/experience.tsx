'use client';

import React, { Suspense, lazy } from 'react';
const CanvasExperience = lazy(() => import('./canvasExperience'));

export const Experience: React.FC = () => {

    return (
        <div className='flex justify-center items-center w-[145rem] h-[85dvh] border-solid rounded-r-lg overflow-hidden max-md:border-[0] max-md:rounded-[0]'>
            <Suspense fallback={null}>
                <CanvasExperience />
            </Suspense>
        </div>
    );
};
