/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

const config = {
  particleCount: 62,
  trailSpan: 0.38,
  durationMs: 4600,
  rotationDurationMs: 28000,
  pulseDurationMs: 4200,
  strokeWidth: 5.5,
  baseRadius: 7,
  detailAmplitude: 3,
  petalCount: 5,
  curveScale: 3.9,
  point(progress: number, detailScale: number) {
    const t = progress * Math.PI * 2;
    const petals = Math.round(config.petalCount);
    const x =
      config.baseRadius * Math.cos(t) -
      config.detailAmplitude * detailScale * Math.cos(petals * t);
    const y =
      config.baseRadius * Math.sin(t) -
      config.detailAmplitude * detailScale * Math.sin(petals * t);
    return {
      x: 50 + x * config.curveScale,
      y: 50 + y * config.curveScale,
    };
  },
};

export default function LoadingScreen() {
  const [isVisible, setIsVisible] = useState(true);
  const containerRef = useRef<SVGGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const particlesRef = useRef<SVGCircleElement[]>([]);

  useEffect(() => {
    // Hide loading screen after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 3200);

    let animationFrameId: number;
    const startedAt = performance.now();

    const normalizeProgress = (progress: number) => ((progress % 1) + 1) % 1;

    const getDetailScale = (time: number) => {
      const pulseProgress = (time % config.pulseDurationMs) / config.pulseDurationMs;
      const pulseAngle = pulseProgress * Math.PI * 2;
      return 0.52 + ((Math.sin(pulseAngle + 0.55) + 1) / 2) * 0.48;
    };

    const getRotation = (time: number) =>
      -((time % config.rotationDurationMs) / config.rotationDurationMs) * 360;

    const buildPath = (detailScale: number, steps = 480) => {
      return Array.from({ length: steps + 1 }, (_, index) => {
        const point = config.point(index / steps, detailScale);
        return `${index === 0 ? "M" : "L"} ${point.x.toFixed(2)} ${point.y.toFixed(2)}`;
      }).join(" ");
    };

    const getParticle = (index: number, progress: number, detailScale: number) => {
      const tailOffset = index / (config.particleCount - 1);
      const point = config.point(
        normalizeProgress(progress - tailOffset * config.trailSpan),
        detailScale
      );
      const fade = Math.pow(1 - tailOffset, 0.56);
      return {
        x: point.x,
        y: point.y,
        radius: 0.9 + fade * 2.7,
        opacity: 0.04 + fade * 0.96,
      };
    };

    const render = (now: number) => {
      const time = now - startedAt;
      const progress = (time % config.durationMs) / config.durationMs;
      const detailScale = getDetailScale(time);

      if (containerRef.current) {
        containerRef.current.setAttribute(
          "transform",
          `rotate(${getRotation(time)} 50 50)`
        );
      }

      if (pathRef.current) {
        pathRef.current.setAttribute("d", buildPath(detailScale));
      }

      particlesRef.current.forEach((node, index) => {
        if (!node) return;
        const particle = getParticle(index, progress, detailScale);
        node.setAttribute("cx", particle.x.toFixed(2));
        node.setAttribute("cy", particle.y.toFixed(2));
        node.setAttribute("r", particle.radius.toFixed(2));
        node.setAttribute("opacity", particle.opacity.toFixed(3));
      });

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrameId);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-[#050505] flex flex-col items-center justify-center"
        >
          <div className="w-[min(72vmin,420px)] aspect-square relative">
            <svg viewBox="0 0 100 100" fill="none" className="w-full h-full overflow-visible">
              <g ref={containerRef}>
                <path
                  ref={pathRef}
                  stroke="currentColor"
                  strokeWidth={config.strokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-neon-pink/10"
                />
                {Array.from({ length: config.particleCount }).map((_, i) => (
                  <circle
                    key={i}
                    ref={(el) => {
                      if (el) particlesRef.current[i] = el;
                    }}
                    fill="currentColor"
                    className="text-neon-pink shadow-[0_0_10px_rgba(255,77,77,0.5)]"
                  />
                ))}
              </g>
            </svg>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <h2 className="text-xl font-bold text-white tracking-[0.2em] uppercase">PALLAB BAG</h2>
            <p className="text-[10px] text-zinc-500 uppercase tracking-[0.4em] mt-2 font-bold">
              Creative Studio
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
