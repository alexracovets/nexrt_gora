'use client';

import React, { useRef } from 'react';
import { MapControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { MapControls as MapControlsType } from 'three-stdlib';

export const Camera: React.FC = () => {
    const controlsRef = useRef<MapControlsType | null>(null);
    // const maxZoom = 5;
    // const maxX = 2;

    const minPan = new THREE.Vector3(-2, 1, -2);
    const maxPan = new THREE.Vector3(2, 5, 2);
    useFrame(() => {
        if (controlsRef.current) {
            const target = controlsRef.current.target;

            // Обмежуємо по осі X
            target.x = Math.max(minPan.x, Math.min(maxPan.x, target.x));

            // Обмежуємо по осі Y
            target.y = Math.max(minPan.y, Math.min(maxPan.y, target.y));

            // Можемо також додати обмеження для камери, якщо це потрібно
            const position = controlsRef.current.object.position;
            position.x = Math.max(minPan.x, Math.min(maxPan.x, position.x));
            position.y = Math.max(minPan.y, Math.min(maxPan.y, position.y));
        }
    });
    return (
        <MapControls
            ref={controlsRef}
            enableZoom={true}
            enableRotate={false}
            screenSpacePanning={false}
            maxPolarAngle={-Math.PI / 2}
            minPolarAngle={-Math.PI / 2}
        />
    );
};
