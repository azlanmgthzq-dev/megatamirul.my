"use client";

import { useSyncExternalStore } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useMousePosition } from "@/hooks/useMousePosition";

function subscribeToNothing() {
  return () => {};
}

function getWindowWidth() {
  return window.innerWidth;
}

function getWindowHeight() {
  return window.innerHeight;
}

function getServerViewportValue() {
  return 0;
}

// Deterministic pseudo-random in [0, 1) so server- and client-rendered markup always match.
function seededRandom(seed: number) {
  const value = Math.sin(seed * 12.9898) * 43758.5453;
  return value - Math.floor(value);
}

type Point = { x: number; y: number };
type ShapeDotMeta = { r: number; color: "primary" | "accent" };
type Sparkle = Point & { r: number; driftX: number; driftY: number };

const CENTER: Point = { x: 200, y: 188 };
const RADIUS = 104;

function hexVertex(i: number): Point {
  const angle = ((-90 + i * 60) * Math.PI) / 180;
  return {
    x: CENTER.x + RADIUS * Math.cos(angle),
    y: CENTER.y + RADIUS * Math.sin(angle) * 0.88,
  };
}

function lerp(a: Point, b: Point, t: number): Point {
  return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
}

// Three 6-point silhouettes the wireframe cycles through. Every silhouette uses the same
// vertex count and clockwise winding order so each point can morph smoothly into its
// counterpart on the next shape without lines crossing mid-transition.
const HEX_VERTICES: Point[] = Array.from({ length: 6 }, (_, i) => hexVertex(i));

const TRIANGLE_VERTICES: Point[] = (() => {
  const c0 = HEX_VERTICES[0];
  const c1 = HEX_VERTICES[2];
  const c2 = HEX_VERTICES[4];
  return [c0, lerp(c0, c1, 0.5), c1, lerp(c1, c2, 0.5), c2, lerp(c2, c0, 0.5)];
})();

const DIAMOND_VERTICES: Point[] = (() => {
  const top = { x: CENTER.x, y: CENTER.y - RADIUS * 0.88 };
  const right = { x: CENTER.x + RADIUS, y: CENTER.y };
  const bottom = { x: CENTER.x, y: CENTER.y + RADIUS * 0.88 };
  const left = { x: CENTER.x - RADIUS, y: CENTER.y };
  return [top, lerp(top, right, 0.5), right, bottom, lerp(bottom, left, 0.5), left];
})();

// A regular hexagon with lines from its center to alternating vertices reads as an
// isometric cube split into three faces — the classic "wireframe tech object" motif.
// Building the same dot layout from the triangle/diamond vertex sets keeps that motif
// recognizable as it morphs between shapes.
function buildShapePoints(vertices: Point[]): Point[] {
  const points: Point[] = [];

  vertices.forEach((v) => points.push(v));
  vertices.forEach((v, i) => {
    const next = vertices[(i + 1) % 6];
    [0.33, 0.66].forEach((t) => points.push(lerp(v, next, t)));
  });

  [0, 2, 4].forEach((i) => {
    [0.3, 0.62].forEach((t) => points.push(lerp(CENTER, vertices[i], t)));
  });
  points.push(CENTER);

  return points;
}

const SHAPE_DOT_META: ShapeDotMeta[] = (() => {
  const meta: ShapeDotMeta[] = [];

  HEX_VERTICES.forEach(() => meta.push({ r: 3, color: "primary" }));
  HEX_VERTICES.forEach(() => {
    [0.33, 0.66].forEach(() => meta.push({ r: 2, color: "primary" }));
  });
  [0, 2, 4].forEach(() => {
    [0.3, 0.62].forEach(() => meta.push({ r: 2, color: "accent" }));
  });
  meta.push({ r: 3.5, color: "accent" });

  return meta;
})();

const HEX_SHAPE_POINTS = buildShapePoints(HEX_VERTICES);
const TRIANGLE_SHAPE_POINTS = buildShapePoints(TRIANGLE_VERTICES);
const DIAMOND_SHAPE_POINTS = buildShapePoints(DIAMOND_VERTICES);
const SHAPE_FRAMES = [HEX_SHAPE_POINTS, TRIANGLE_SHAPE_POINTS, DIAMOND_SHAPE_POINTS];

// Full loop: hexagon -> triangle -> diamond -> back to hexagon.
const SHAPE_LOOP_DURATION = 15;
const shapeTransition = {
  duration: SHAPE_LOOP_DURATION,
  repeat: Infinity,
  ease: "easeInOut" as const,
  times: [0, 1 / 3, 2 / 3, 1],
};

const NODES: Point[] = [
  { x: 55, y: 95 },
  { x: 345, y: 75 },
  { x: 65, y: 305 },
  { x: 335, y: 315 },
];

// Index into the shape point arrays that each outer node tethers to.
const TETHER_TARGETS = [5, 1, 4, 2];

const SPARKLES: Sparkle[] = [
  { x: 40, y: 55 },
  { x: 362, y: 48 },
  { x: 372, y: 328 },
  { x: 28, y: 335 },
  { x: 200, y: 24 },
  { x: 200, y: 360 },
].map((base, i) => ({
  x: base.x + (seededRandom(i * 3 + 1) - 0.5) * 20,
  y: base.y + (seededRandom(i * 3 + 2) - 0.5) * 20,
  r: 1.5 + seededRandom(i * 3 + 3) * 1.2,
  driftX: (seededRandom(i * 5 + 7) - 0.5) * 24,
  driftY: (seededRandom(i * 5 + 11) - 0.5) * 24,
}));

const containerVariants: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.018, delayChildren: 0.15 } },
};

const dotVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.35, ease: "easeOut" } },
};

const lineVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const fillClass: Record<ShapeDotMeta["color"], string> = {
  primary: "fill-primary",
  accent: "fill-accent",
};

export default function HeroIllustration() {
  const { x, y } = useMousePosition();
  // Read window dimensions only after mount, without setState-in-effect.
  const viewportWidth = useSyncExternalStore(subscribeToNothing, getWindowWidth, getServerViewportValue);
  const viewportHeight = useSyncExternalStore(subscribeToNothing, getWindowHeight, getServerViewportValue);
  const shouldReduceMotion = useReducedMotion();

  // Guard before viewport is ready
  if (!viewportWidth || !viewportHeight) {
    return null;
  }

  // Map cursor position → subtle rotation
  const rotateX = ((y - viewportHeight / 2) / viewportHeight) * -10;
  const rotateY = ((x - viewportWidth / 2) / viewportWidth) * 10;

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative flex justify-center perspective w-full max-w-md">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-accent/20 rounded-2xl blur-3xl scale-110" />

        <motion.div
          style={{ rotateX, rotateY }}
          animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full aspect-[4/3] flex items-center justify-center"
        >
          <motion.svg
            viewBox="0 0 400 380"
            className="w-full h-full max-w-sm"
            aria-hidden="true"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {TETHER_TARGETS.map((vertexIndex, i) => {
              const node = NODES[i];
              const x2Frames = [...SHAPE_FRAMES.map((f) => f[vertexIndex].x), HEX_SHAPE_POINTS[vertexIndex].x];
              const y2Frames = [...SHAPE_FRAMES.map((f) => f[vertexIndex].y), HEX_SHAPE_POINTS[vertexIndex].y];
              return (
                <motion.g key={`tether-${i}`} variants={lineVariants}>
                  <motion.line
                    x1={node.x}
                    y1={node.y}
                    x2={HEX_SHAPE_POINTS[vertexIndex].x}
                    y2={HEX_SHAPE_POINTS[vertexIndex].y}
                    className="stroke-accent/25"
                    strokeWidth={1}
                    animate={shouldReduceMotion ? undefined : { x2: x2Frames, y2: y2Frames }}
                    transition={shapeTransition}
                  />
                </motion.g>
              );
            })}

            {SHAPE_DOT_META.map((meta, i) => {
              const basePoint = HEX_SHAPE_POINTS[i];
              const seed = basePoint.x * 7 + basePoint.y * 13 + i;
              const amplitude = 2 + seededRandom(seed) * 2;
              const cxFrames = [...SHAPE_FRAMES.map((f) => f[i].x), HEX_SHAPE_POINTS[i].x];
              const cyFrames = [...SHAPE_FRAMES.map((f) => f[i].y), HEX_SHAPE_POINTS[i].y];
              return (
                <motion.g key={`shape-${i}`} variants={dotVariants}>
                  <motion.g
                    animate={shouldReduceMotion ? undefined : { y: [0, -amplitude, 0] }}
                    transition={{
                      duration: 2.6 + seededRandom(seed + 1) * 2.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: seededRandom(seed + 2) * 2,
                    }}
                  >
                    <motion.circle
                      cx={basePoint.x}
                      cy={basePoint.y}
                      r={meta.r}
                      className={fillClass[meta.color]}
                      animate={shouldReduceMotion ? undefined : { cx: cxFrames, cy: cyFrames }}
                      transition={shapeTransition}
                    />
                  </motion.g>
                </motion.g>
              );
            })}

            {NODES.map((n, i) => {
              const seed = i * 9 + 100;
              const amplitude = 3 + seededRandom(seed) * 2;
              return (
                <motion.g key={`node-${i}`} variants={dotVariants}>
                  <motion.circle
                    cx={n.x}
                    cy={n.y}
                    r={3.5}
                    className="fill-accent"
                    animate={shouldReduceMotion ? undefined : { cy: [n.y, n.y - amplitude, n.y] }}
                    transition={{
                      duration: 3.2 + seededRandom(seed + 1) * 1.8,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: seededRandom(seed + 2) * 2,
                    }}
                  />
                </motion.g>
              );
            })}

            {SPARKLES.map((s, i) => (
              <motion.g key={`sparkle-${i}`} variants={dotVariants}>
                <motion.circle
                  cx={s.x}
                  cy={s.y}
                  r={s.r}
                  className="fill-foreground/30"
                  animate={
                    shouldReduceMotion
                      ? undefined
                      : {
                          cx: [s.x, s.x + s.driftX, s.x],
                          cy: [s.y, s.y + s.driftY, s.y],
                          opacity: [0.25, 0.6, 0.25],
                        }
                  }
                  transition={{
                    duration: 5 + seededRandom(i * 13 + 6) * 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: seededRandom(i * 13 + 8) * 2,
                  }}
                />
              </motion.g>
            ))}
          </motion.svg>
        </motion.div>
      </div>
    </div>
  );
}
