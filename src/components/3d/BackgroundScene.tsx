import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

function ParticleField() {
  const meshRef = useRef<THREE.Points>(null)
  const count = 450

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 30
      pos[i * 3 + 1] = (Math.random() - 0.5) * 30
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return pos
  }, [])

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.015
    meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.008) * 0.03
  })

  return (
    <points ref={meshRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#3b82f6"
        size={0.035}
        transparent
        opacity={0.25}
        sizeAttenuation
      />
    </points>
  )
}

function WireframeSphere() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (!meshRef.current) return
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.05
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.08
    const scale = 1 + Math.sin(state.clock.elapsedTime * 0.4) * 0.02
    meshRef.current.scale.setScalar(scale)
  })

  return (
    <mesh ref={meshRef} position={[5, 0, -10]}>
      <sphereGeometry args={[3, 14, 14]} />
      <meshBasicMaterial
        color="#1d4ed8"
        wireframe
        transparent
        opacity={0.08}
      />
    </mesh>
  )
}

function FloatingCubes() {
  const group = useRef<THREE.Group>(null)

  const cubes = useMemo(() => {
    return Array.from({ length: 5 }).map(() => ({
      pos: [
        (Math.random() - 0.5) * 18,
        (Math.random() - 0.5) * 10,
        (Math.random() - 0.5) * 8 - 10,
      ] as [number, number, number],
      speed: Math.random() * 0.2 + 0.08,
      offset: Math.random() * Math.PI * 2,
      scale: Math.random() * 0.35 + 0.15,
    }))
  }, [])

  useFrame((state) => {
    if (!group.current) return
    group.current.children.forEach((child, i) => {
      const cube = cubes[i]
      if (cube) {
        child.rotation.x = state.clock.elapsedTime * cube.speed
        child.rotation.y = state.clock.elapsedTime * cube.speed * 0.7
        child.position.y = cube.pos[1] + Math.sin(state.clock.elapsedTime * 0.4 + cube.offset) * 0.35
      }
    })
  })

  return (
    <group ref={group}>
      {cubes.map((cube, i) => (
        <mesh key={i} position={cube.pos} scale={cube.scale}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial
            color="#3b82f6"
            wireframe
            transparent
            opacity={0.1}
          />
        </mesh>
      ))}
    </group>
  )
}

function MouseParallax() {
  const { camera } = useThree()
  const mouse = useRef({ x: 0, y: 0 })

  useFrame(() => {
    camera.position.x += (mouse.current.x * 0.3 - camera.position.x) * 0.015
    camera.position.y += (-mouse.current.y * 0.2 - camera.position.y) * 0.015
    camera.lookAt(0, 0, 0)
  })

  return null
}

export default function BackgroundScene() {
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: -1,
        pointerEvents: 'none',
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 12], fov: 60 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.1} />
        <ParticleField />
        {!isMobile && (
          <>
            <WireframeSphere />
            <FloatingCubes />
            <MouseParallax />
          </>
        )}
      </Canvas>
    </div>
  )
}
