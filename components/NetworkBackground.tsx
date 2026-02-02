'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Configuration
const PARTICLE_COUNT = 30;
const CONNECTION_DISTANCE = 300;
const MOUSE_INFLUENCE_RADIUS = 300;
const MOUSE_REPEL_FORCE = 0.5; // How strongly they move away

export default function NetworkBackground() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

    // Initial randomized particle positions and velocities
    // Using simple state to hold them might trigger too many re-renders if we update them every frame in React state.
    // However, for a simple SVG net, we can use a ref for values and only trigger render via requestAnimationFrame loop if we want 60fps,
    // or use framer-motion values. 
    // For maximum performance with many particles, Canvas is better, but requirement is "Framer Motion & SVG".
    // Let's use a simple requestAnimationFrame loop updating React state for positions? No, that's heavy.
    // Better: Use `useRef` for positions and `requestAnimationFrame` to draw directly or update a set of MotionValues?
    // Let's stick to a robust standard React + rAF approach for SVG circles.

    // Correction: Framer Motion is requested. We can animate via `animate` props but networking (lines between dots) is hard to do purely with Framer Motion layout animations efficiently without state.
    // Hybrid approach: Calculate positions in a JS loop (rAF), store in state/ref, render SVG.

    const [particles, setParticles] = useState<Array<{
        x: number;
        y: number;
        vx: number;
        vy: number;
        id: number;
    }>>([]);

    useEffect(() => {
        // Initialize
        if (typeof window !== 'undefined') {
            const width = window.innerWidth;
            const height = window.innerHeight;
            setWindowSize({ width, height });

            const newParticles = Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
                id: i,
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.5, // Slow float
                vy: (Math.random() - 0.5) * 0.5,
            }));
            setParticles(newParticles);
        }

        const handleMouseMove = (e: MouseEvent) => {
            setMousePos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);

        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    useEffect(() => {
        if (particles.length === 0) return;

        let animationFrameId: number;

        const update = () => {
            setParticles(prevParticles => {
                return prevParticles.map(p => {
                    let { x, y, vx, vy } = p;

                    // 1. Move
                    x += vx;
                    y += vy;

                    // 2. Bounce off walls
                    if (x < 0 || x > windowSize.width) vx *= -1;
                    if (y < 0 || y > windowSize.height) vy *= -1;

                    // 3. Mouse Interaction (Repel or Attract? User said "magnetic feel when approached", implies attraction or gentle manipulation)
                    const dx = mousePos.x - x;
                    const dy = mousePos.y - y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < MOUSE_INFLUENCE_RADIUS) {
                        const forceDirectionX = dx / distance;
                        const forceDirectionY = dy / distance;
                        const force = (MOUSE_INFLUENCE_RADIUS - distance) / MOUSE_INFLUENCE_RADIUS;

                        // "Magnetic" attraction: Pull gently towards mouse
                        x += forceDirectionX * force * 1.5;
                        y += forceDirectionY * force * 1.5;
                    }

                    return { ...p, x, y, vx, vy };
                });
            });

            animationFrameId = requestAnimationFrame(update);
        };

        animationFrameId = requestAnimationFrame(update);
        return () => cancelAnimationFrame(animationFrameId);
    }, [windowSize, mousePos]); // Re-run when dependencies change? No, particles is in state, so we need functional update. 
    // The previous useEffect has a dependency on `particles` which causes infinite loop if we just `setParticles` inside it without care.
    // Actually, setting state in rAF loop in React will trigger re-render every frame. This is acceptable for 30 particles on modern devices, but let's be careful.
    // Optimization: SVG is light. 60fps react render for 30 nodes is fine. 

    // Calculate lines (Connections)
    const renderConnections = () => {
        const lines = [];
        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const p1 = particles[i];
                const p2 = particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < CONNECTION_DISTANCE) {
                    const opacity = 1 - (dist / CONNECTION_DISTANCE);
                    lines.push(
                        <line
                            key={`${p1.id}-${p2.id}`}
                            x1={p1.x}
                            y1={p1.y}
                            x2={p2.x}
                            y2={p2.y}
                            stroke="rgba(59, 130, 246, 1)" // Electric Blue #3B82F6
                            strokeWidth="1"
                            strokeOpacity={opacity * 0.4}
                        />
                    );
                }
            }
        }
        return lines;
    };

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden bg-corporate-black z-0">
            {/* Base Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#05112e] to-[#020617] opacity-80" />

            <svg className="absolute inset-0 w-full h-full will-change-transform backface-hidden">
                {renderConnections()}
                {particles.map(p => (
                    <circle
                        key={p.id}
                        cx={p.x}
                        cy={p.y}
                        r={3}
                        fill="#8B5CF6" // Radiant Violet
                        className="animate-pulse"
                        style={{ willChange: 'transform, opacity' }}
                    />
                ))}
            </svg>
        </div>
    );
}
