'use client';

import React, { useRef, memo, useCallback, useEffect } from 'react';
import * as THREE from 'three';
import useStoreGrid from '@/store/useStoreGrid';

interface Grid {
    x: number;
    y: number;
    price: number;
    // isSelected: boolean;
}

const RoundedPlane = memo(({ position, color, width, height, grid }: { position: [number, number, number], color: string, width: number, height: number, grid: Grid }) => {
    const setActiveGrids = useStoreGrid(state => state.setActiveGrids);
    const materialRef = useRef<THREE.ShaderMaterial | null>(null);
    const isGridActive = useStoreGrid(useCallback(
        (state) => state.activeGrids.some((activeGrid: Grid) => activeGrid.x === grid.x && activeGrid.y === grid.y),
        [grid.x, grid.y]
    ));
    useEffect(() => {
        if (materialRef.current) {
            materialRef.current.uniforms.u_opacity.value = isGridActive ? 1 : 0.5;
            materialRef.current.uniformsNeedUpdate = true;
            materialRef.current.transparent = true;
            materialRef.current.needsUpdate = true;

            // Додаємо примусове оновлення сцени, якщо потрібно
            materialRef.current.dispose();
            materialRef.current.visible = false;
            materialRef.current.visible = true;
        }
    }, [isGridActive])
    return (
        <mesh position={position} matrixWorldNeedsUpdate matrixAutoUpdate onClick={() => setActiveGrids(grid)}>
            <planeGeometry args={[width, height, 32, 32]} />
            <shaderMaterial
                ref={materialRef}
                uniforms={{
                    u_color: { value: new THREE.Color(color) },
                    u_borderColor: { value: new THREE.Color('#000000') },
                    u_radius: { value: 0.2 },
                    u_borderThickness: { value: 0.05 },
                    u_opacity: { value: isGridActive ? 1 : 0.5 },
                }}
                vertexShader={`
                varying vec2 vUv;
                void main() {
                    vUv = uv;
                    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
                }
            `}
                fragmentShader={`
                uniform vec3 u_color;
                uniform vec3 u_borderColor;
                uniform float u_radius;
                uniform float u_borderThickness;
                uniform float u_opacity; // Використовується для контролю прозорості
                varying vec2 vUv;

                float roundedBoxSDF(vec2 p, vec2 b, float r) {
                vec2 d = abs(p) - b + vec2(r);
                return min(max(d.x, d.y), 0.0) + length(max(d, 0.0)) - r;
                }

                void main() {
                // Обчислюємо відстань від країв закругленого прямокутника
                float sdf = roundedBoxSDF(vUv - 0.5, vec2(0.5), u_radius);

                // Градієнт для згладжування країв
                float edgeWidth = 0.02;

                // Визначаємо прозорість основної фігури
                float fillAlpha = smoothstep(edgeWidth, edgeWidth + 0.01, sdf);

                // Створюємо обведення: в межах значення u_borderThickness
                float borderAlpha = smoothstep(-u_borderThickness, -u_borderThickness + edgeWidth, sdf);

                // Якщо всередині фігури, колір фігури, якщо в обведенні — колір обведення
                vec3 color = mix(u_color, u_borderColor, borderAlpha);

                // Явно контролюємо прозорість через u_opacity
                gl_FragColor = vec4(color, u_opacity * (1.0 - fillAlpha));
                }
            `}
                transparent={true} // Активуємо прозорість
                depthWrite={false} // Вимикаємо запис глибини, що допоможе з рендерингом прозорості
                blending={THREE.NormalBlending} // Нормальне змішування альфа-каналу
                alphaTest={0.5} // Додаємо тест альфа-каналу
            />
        </mesh>
    );
});

RoundedPlane.displayName = 'GridItem';

export default RoundedPlane;