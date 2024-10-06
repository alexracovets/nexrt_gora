'use client';

import React, { useRef } from 'react';
import { MapControls } from '@react-three/drei';
import { MapControls as MapControlsType } from 'three-stdlib';

export const Camera: React.FC = () => {
    const controlsRef = useRef<MapControlsType | null>(null);
    const maxPan = 2;
    const maxZoom =5.5;

    const checkPosition = () => {
        if (controlsRef.current) {
            const target = controlsRef.current.target;
            const position = controlsRef.current.object.position;

            // Обмежуємо по осі X
            target.z = Math.max(-maxPan, Math.min(maxPan, target.z));
            target.x = Math.max(-maxPan, Math.min(maxPan, target.x));

            // Можемо також додати обмеження для камери, якщо це потрібно
            position.x = Math.max(-maxPan, Math.min(maxPan, position.x));
            position.z = Math.max(-maxPan, Math.min(maxPan, position.z));
        }
    }

    return (
        <MapControls
            ref={controlsRef}
            enableZoom={true}
            enableRotate={false}
            screenSpacePanning={false}
            maxPolarAngle={-Math.PI / 2}
            minPolarAngle={-Math.PI / 2}
            maxDistance={maxZoom}
            minDistance={1}
            onChange={checkPosition}
        />
    );
};
