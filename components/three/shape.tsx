'use client';

import { useLoader } from '@react-three/fiber';
import React, { useEffect, useRef, useState } from 'react';
import { Plane } from '@react-three/drei';
import { Box3, DoubleSide, Vector3, Object3D } from 'three';
import { SVGLoader } from 'three/examples/jsm/Addons.js';

export const Shape: React.FC = () => {
    const { paths } = useLoader(SVGLoader, '/mask/mask.svg');
    const svgRef = useRef(null);
    const planeRef = useRef(null);
    const [svgScale, setSvgScale] = useState(1);
    const [svgPosition, setSvgPosition] = useState<Vector3>(new Vector3(0, 0, 0));
    const scale = 4.5;

    const getSizes = (item: Object3D) => {
        const box = new Box3().setFromObject(item);
        const size = new Vector3();
        box.getSize(size);
        return size;
    };

    useEffect(() => {
        if (svgRef.current && planeRef.current) {
            // Отримуємо розміри Plane
            const planeSize = getSizes(planeRef.current);

            // Обчислюємо Box3 для SVG і отримуємо його розміри
            const boxSvg = new Box3().setFromObject(svgRef.current);
            const svgSize = new Vector3();
            boxSvg.getSize(svgSize);

            // Обчислюємо масштабування для відповідності SVG розмірам Plane
            const scaleX = planeSize.x / svgSize.x;
            const scaleY = planeSize.z / svgSize.z;

            // Встановлюємо масштабування для SVG
            setSvgScale(scaleX);

            // Обчислюємо центр Plane і SVG для вирівнювання позиції SVG
            const svgCenter = new Vector3();
            boxSvg.getCenter(svgCenter);

            const planeCenter = new Vector3();
            const boxPlane = new Box3().setFromObject(planeRef.current);
            boxPlane.getCenter(planeCenter);

            // Обчислюємо зміщення для вирівнювання SVG по центру Plane
            const offsetX = planeCenter.x - svgCenter.x * scaleX;
            const offsetY = planeCenter.z - svgCenter.z * scaleY;

            setSvgPosition(new Vector3(offsetX, -offsetY, 0));
        } 
    }, [svgRef, planeRef]);
    return (
        <mesh position={[0, 0, 0.001]}>
            <Plane ref={planeRef} args={[46 / scale, 35 / scale]} visible={false} position={[0, 0, 0]} />
            <group ref={svgRef} scale={svgScale} position={svgPosition} rotation={[Math.PI, 0, 0]}>
                {paths.map((path, index) => (
                    <mesh key={index}>
                        <shapeGeometry args={[path.toShapes(true)]} />
                        <meshBasicMaterial color={'red'} side={DoubleSide} />
                    </mesh>
                ))}
            </group>
        </mesh>
    );
};
