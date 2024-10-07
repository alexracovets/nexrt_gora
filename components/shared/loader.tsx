'use client';
import { BallTriangle } from 'react-loader-spinner';
import { motion, AnimatePresence } from "framer-motion";
import React from 'react';

export const Loader: React.FC = ({ }) => {

    return (
        <AnimatePresence>
            <motion.div
                className='w-full h-full flex justify-center items-center'
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ duration: 1 }}
                exit={{ opacity: 0 }}
            >
                <BallTriangle
                    radius={5}
                    color="#EBD7B2"
                    ariaLabel="ball-triangle-loading"
                    visible={true}
                />
            </motion.div>
        </AnimatePresence>
    );
};
