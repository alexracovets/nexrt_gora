'use client';

import { Canvas } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import { OrbitControls, Plane } from '@react-three/drei';
import RoundedPlane from '../three/roundedPlane';

interface CellData {
    x: number;
    y: number;
    price: number;
}

export const Expience: React.FC = () => {
    const [cells, setCells] = useState<CellData[]>([]);
    const scale = 4.5;

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
        <div className='flex justify-center items-center w-[150rem] h-[85dvh] border-y-[1rem] border-r-[1rem] border-white border-solid rounded-r-lg overflow-hidden max-md:border-[0] max-md:rounded-[0]'>
            <Canvas
                gl={{ antialias: false }}
                frameloop="demand"
            >
                {/* Додаємо базове освітлення */}
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} intensity={0.5} />

                <OrbitControls enableRotate={false} />

                {/* Плоска поверхня */}
                <Plane args={[46 /scale, 35 /scale]} position={[0, 0, 0]} />

                {/* Відображення елементів на основі даних */}
                <mesh position={[-22.5 /scale, -17 /scale, 0]}>
                    {cells.map((item, idx) => {
                        return (
                            <RoundedPlane
                                key={idx}
                                position={[item.x /scale, item.y /scale, 0]}
                                width={1 /scale}
                                height={1 /scale}
                                grid={item}
                                color={
                                    item.price === 100
                                        ? "#4caf50"
                                        : item.price === 200
                                            ? "#FFEB3B"
                                            : item.price === 300
                                                ? "#E91E63"
                                                : item.price === 500
                                                    ? "#9C27B0"
                                                    : "white"
                                }
                            />
                        );
                    })}
                </mesh>
            </Canvas>
        </div>
    );
};
