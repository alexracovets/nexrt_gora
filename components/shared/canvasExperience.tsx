'use client';

import { Canvas } from '@react-three/fiber';
import React, { useEffect, useState } from 'react';
import { Plane } from '@react-three/drei';
import RoundedPlane from '../three/roundedPlane';
import { Camera } from '../three/camera';
import { Shape } from '../three/shape';

interface CellData {
    x: number;
    y: number;
    price: number;
}

const CanvasExperience: React.FC = () => {
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
        <Canvas
            gl={{ antialias: false }}
            frameloop="demand"
        >
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 5, 5]} intensity={0.5} />
            <Camera />
            <mesh rotation={[-Math.PI / 2, 0, 0]}>
                <Plane args={[48 / scale, 37 / scale]} position={[0, 0, -0.001]} />
                <Shape />
                <mesh position={[-22.5 / scale, -17 / scale, 0]}>
                    {cells.map((item, idx) => (
                        <RoundedPlane
                            key={idx}
                            position={[item.x / scale, item.y / scale, 0]}
                            width={1 / scale}
                            height={1 / scale}
                            grid={item}
                        />
                    ))}
                </mesh>
            </mesh>
        </Canvas>
    );
};

// Експортуємо компонент за замовчуванням
export default CanvasExperience;
