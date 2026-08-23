"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useTexture } from "@react-three/drei";
import { forwardRef, Suspense, useEffect, useMemo, useRef, useState } from "react";
import * as THREE from "three";

/* =========================================================
   SOURCE IMAGES
   ========================================================= */

const IMAGE_COUNT = 6;
const SOURCE_IMAGES = Array.from(
  { length: IMAGE_COUNT },
  (_, i) => `/images/projects/project-${i + 1}.jpg`
);

/* =========================================================
   MOUSE (Subtle scene tilt)
   ========================================================= */

const mouse = { x: 0, y: 0 };

function MouseTracker() {
  useEffect(() => {
    const move = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return null;
}

/* =========================================================
   ROW CARD
   ========================================================= */

const RowCard = forwardRef<
  THREE.Mesh,
  { image: string; scale: number }
>(function RowCard({ image, scale }, ref) {
  const texture = useTexture(image);

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 8;
    texture.needsUpdate = true;
  }, [texture]);

  const width = scale;
  const height = scale * 0.5625;

  return (
    <mesh ref={ref}>
      <planeGeometry args={[width, height]} />
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} transparent toneMapped={false} />
    </mesh>
  );
});

/* =========================================================
   ARC MARQUEE ROW
   ========================================================= */

function ArcMarqueeRow({
  images,
  centerX,
  centerY,
  centerZ,
  radius,
  startAngle,
  endAngle,
  cardScale,
  speed,
  directionSign,
  rotationOffset,
}: {
  images: string[];
  centerX: number;
  centerY: number;
  centerZ: number;
  radius: number;
  startAngle: number;
  endAngle: number;
  cardScale: number;
  speed: number;
  directionSign: 1 | -1;
  rotationOffset: number;
}) {
  const refs = useRef<(THREE.Mesh | null)[]>([]);
  const offset = useRef(0);
  const totalCards = images.length;

  useFrame((_, delta) => {
    offset.current += speed * delta * 0.1;

    refs.current.forEach((mesh, i) => {
      if (!mesh) return;

      const baseProgress = i / totalCards;
      const raw = baseProgress + directionSign * offset.current;
      const wrapped = ((raw % 1) + 1) % 1;

      const angle = startAngle + wrapped * (endAngle - startAngle);

      // Smooth circular orbit - completely flat to prevent wobbling
      mesh.position.x = centerX + radius * Math.cos(angle);
      mesh.position.y = centerY + radius * Math.sin(angle);
      mesh.position.z = centerZ;

      // Lock rotation to the path tangent so they follow each other in a clean parallel line
      mesh.rotation.z = angle + rotationOffset;
      mesh.rotation.x = 0; 
      mesh.rotation.y = 0; 
    });
  });

  return (
    <>
      {images.map((image, i) => (
        <RowCard
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          image={image}
          scale={cardScale}
        />
      ))}
    </>
  );
}

/* =========================================================
   3D WORLD (TOP-LEFT ARC & BOTTOM-RIGHT ARC)
   ========================================================= */

function Scene({ topImages, bottomImages }: { topImages: string[]; bottomImages: string[] }) {
  const group = useRef<THREE.Group>(null);

  useFrame(() => {
    if (!group.current) return;

    // Whole scene tilt based on mouse (keeps the ribbons perfectly flat relative to each other)
    const targetRotX = mouse.y * 0.025;
    const targetRotY = mouse.x * 0.035;

    group.current.rotation.x += (targetRotX - group.current.rotation.x) * 0.03;
    group.current.rotation.y += (targetRotY - group.current.rotation.y) * 0.03;
  });

  return (
    <group ref={group}>
      {/* Top-Left Arc: Pushed further up and left with adjusted radius */}
      <ArcMarqueeRow
        images={topImages}
        centerX={-15}
        centerY={11}
        centerZ={-1.0}
        radius={16}
        startAngle={0}
        endAngle={Math.PI * 2}
        cardScale={4.2}
        speed={0.12}
        directionSign={1}
        rotationOffset={Math.PI / 2} 
      />

      {/* Bottom-Right Arc: Pushed further down and right with adjusted radius */}
      <ArcMarqueeRow
        images={bottomImages}
        centerX={15}
        centerY={-11}
        centerZ={-1.0}
        radius={16}
        startAngle={0}
        endAngle={Math.PI * 2}
        cardScale={4.2}
        speed={0.12}
        directionSign={1}
        rotationOffset={-Math.PI / 2} 
      />

    </group>
  );
}

/* =========================================================
   MAIN COMPONENT
   ========================================================= */

export default function ProjectGallery() {
  const [mounted, setMounted] = useState(false);

  const topImages = useMemo(
    () => [...SOURCE_IMAGES, ...SOURCE_IMAGES, ...SOURCE_IMAGES],
    []
  );
  const bottomImages = useMemo(
    () => [
      ...SOURCE_IMAGES.slice().reverse(),
      ...SOURCE_IMAGES.slice().reverse(),
      ...SOURCE_IMAGES.slice().reverse(),
    ],
    []
  );


  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return <div style={{ width: "100%", height: "100vh", background: "#000" }} />;
  }

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        minHeight: "700px",
        overflow: "hidden",
        background: "#000",
      }}
    >
      <Canvas
        dpr={[1, 2]}
        camera={{
          position: [0, 0, 8.5],
          fov: 55,
          near: 0.1,
          far: 100,
        }}
        gl={{ antialias: true, alpha: false, powerPreference: "high-performance" }}
      >
        <Suspense fallback={null}>
          <MouseTracker />
          <Scene topImages={topImages} bottomImages={bottomImages} />
        </Suspense>
      </Canvas>

      <div
        style={{
          position: "absolute",
          zIndex: 10,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "100%",
          textAlign: "center",
          pointerEvents: "none",
          color: "#fff",
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: "Georgia, serif",
            fontSize: "clamp(12px, 1.2vw, 24px)", 
            fontWeight: 100,
            lineHeight: 0.95,
            letterSpacing: "-0.04em",
          }}
        >
          Made with
          <br />
          VDS.Sphere
        </h1>

      </div>

      <div
        style={{
          position: "absolute",
          top: "25px",
          left: "25px",
          color: "#fff",
          fontSize: "10px",
          letterSpacing: "0.18em",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      >
        OUR PROJECTS
      </div>

      <div
        style={{
          position: "absolute",
          right: "25px",
          bottom: "25px",
          color: "#fff",
          fontSize: "10px",
          letterSpacing: "0.18em",
          opacity: 0.5,
          pointerEvents: "none",
        }}
      >
        {String(IMAGE_COUNT).padStart(2, "0")} / {String(IMAGE_COUNT).padStart(2, "0")}
      </div>
    </section>
  );
}