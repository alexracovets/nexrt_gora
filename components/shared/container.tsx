import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    className?: string;
}

export const Container: React.FC<React.PropsWithChildren<Props>> = ({ className, children }) => {
    return <div className={cn('mx-auto w-full max-w-[180rem] max-md:px-[2rem]', className)}>{children}</div>;
};