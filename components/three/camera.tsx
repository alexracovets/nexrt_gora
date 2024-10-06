'use client';

import React, { useRef } from 'react';
import { OrbitControls } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { OrbitControls as OrbitControlsType } from 'three-stdlib';

export const Camera: React.FC = () => {
    const controlsRef = useRef<OrbitControlsType | null>(null); // Specify the correct type here
    const maxZoom = 5;
    const maxX = 2;

    const minPan = new THREE.Vector3(-2, 1, -2);
    const maxPan = new THREE.Vector3(2, 5, 2);

    useFrame(() => {
        if (controlsRef.current) {
            const target = controlsRef.current.target;

            // Restrict on the X axis
            target.x = Math.max(minPan.x, Math.min(maxPan.x, target.x));

            // Restrict on the Y axis
            target.y = Math.max(minPan.y, Math.min(maxPan.y, target.y));

            // You can also restrict the camera position
            const position = controlsRef.current.object.position;
            position.x = Math.max(minPan.x, Math.min(maxPan.x, position.x));
            position.y = Math.max(minPan.y, Math.min(maxPan.y, position.y));
        }
    });

    return (
        <OrbitControls
            ref={controlsRef}
            enableZoom={true}
            enableRotate={false}
            screenSpacePanning={false}
            maxPolarAngle={-Math.PI / 2}
            minPolarAngle={-Math.PI / 2}
        />
    );
};
