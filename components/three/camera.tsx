'use client';

import React, { useRef } from 'react';
import { MapControls } from '@react-three/drei';
import { MapControls as MapControlsType } from 'three-stdlib';

export const Camera: React.FC = () => {
    const controlsRef = useRef<MapControlsType | null>(null);
    const basePan = 2;  // Базове обмеження для панорамування (це мінімум)
    const maxZoom = 5.5; // Максимальний зум (найближче)
    const minZoom = 1;   // Мінімальний зум (найдалі)

    const calculateDynamicMaxPan = () => {
        if (controlsRef.current) {
            const currentZoom = controlsRef.current.object.position.y;
            const normalizedZoom = (maxZoom - currentZoom - minZoom); 

            const dynamicPan = basePan * (1 + normalizedZoom / 4);
            return dynamicPan;
        }
        return basePan; 
    };

    const checkPosition = () => {
        if (controlsRef.current) {
            const target = controlsRef.current.target;
            const position = controlsRef.current.object.position;
            const maxPan = calculateDynamicMaxPan();

            // Обмежуємо по осях X та Z
            target.z = Math.max(-maxPan, Math.min(maxPan, target.z));
            target.x = Math.max(-maxPan, Math.min(maxPan, target.x));

            position.x = Math.max(-maxPan, Math.min(maxPan, position.x));
            position.z = Math.max(-maxPan, Math.min(maxPan, position.z));
        }
    };

    return (
        <MapControls
            ref={controlsRef}
            enableZoom={true}
            enableRotate={false}
            screenSpacePanning={false}
            maxPolarAngle={-Math.PI / 2}
            minPolarAngle={-Math.PI / 2}
            maxDistance={maxZoom}
            minDistance={minZoom}
            onChange={checkPosition}
        />
    );
};
