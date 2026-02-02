'use client';

import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial, Icosahedron } from '@react-three/drei';
import * as THREE from 'three';

function AnimatedSphere({ mouse }: { mouse: React.MutableRefObject<{ x: number; y: number }> }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            // Auto rotation
            meshRef.current.rotation.y += 0.002;
            meshRef.current.rotation.x += 0.001;

            // Parallax effect based on mouse position
            // Smooth lerp for premium feel
            const targetX = mouse.current.x * 0.5;
            const targetY = mouse.current.y * 0.5;

            meshRef.current.rotation.x += (targetY - meshRef.current.rotation.x) * 0.05;
            meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.05;
        }
    });

    return (
        <Icosahedron args={[1, 4]} ref={meshRef} scale={2}>
            <meshBasicMaterial wireframe color="#00D9FF" transparent opacity={0.3} />
            <pointsMaterial color="#00D9FF" size={0.02} sizeAttenuation={true} />
        </Icosahedron>
    );
}

// Separate component to handle points for that "Neural Network" node look
function Particles({ count = 200, mouse }: { count?: number; mouse: React.MutableRefObject<{ x: number; y: number }> }) {
    const pointsRef = useRef<THREE.Points>(null);

    // Generate random points on a sphere surface
    const particlesPosition = useRef(new Float32Array(count * 3));

    if (particlesPosition.current[0] === 0) {
        for (let i = 0; i < count; i++) {
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos((Math.random() * 2) - 1);
            const r = 2.5 + Math.random() * 0.5;

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            particlesPosition.current[i * 3] = x;
            particlesPosition.current[i * 3 + 1] = y;
            particlesPosition.current[i * 3 + 2] = z;
        }
    }

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y -= 0.001;

            // Parallax
            const targetX = mouse.current.x * 0.2;
            const targetY = mouse.current.y * 0.2;
            pointsRef.current.rotation.x += (targetY - pointsRef.current.rotation.x) * 0.02;
            pointsRef.current.rotation.y += (targetX - pointsRef.current.rotation.y) * 0.02;
        }
    })

    return (
        <points ref={pointsRef}>
            <bufferGeometry>
                <bufferAttribute
                    attach="attributes-position"
                    count={particlesPosition.current.length / 3}
                    array={particlesPosition.current}
                    itemSize={3}
                    args={[particlesPosition.current, 3]}
                />
            </bufferGeometry>
            <pointsMaterial size={0.03} color="#00D9FF" transparent opacity={0.6} sizeAttenuation />
        </points>
    )
}

export default function GrowthSphere() {
    const mouse = useRef({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent) => {
        // Normalize mouse position: -1 to 1
        mouse.current = {
            x: (event.clientX / window.innerWidth) * 2 - 1,
            y: -(event.clientY / window.innerHeight) * 2 + 1,
        };
    };

    return (
        <div className="w-full h-full absolute inset-0 z-0" onMouseMove={handleMouseMove}>
            <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <AnimatedSphere mouse={mouse} />
                <Particles mouse={mouse} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.5} />
            </Canvas>
        </div>
    );
}
