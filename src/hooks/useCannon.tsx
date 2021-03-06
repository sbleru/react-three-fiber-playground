import * as CANNON from 'cannon'
import React, { useState, useEffect, useContext, useRef } from 'react'
import { useRender } from 'react-three-fiber'

// Cannon-world context provider
const context = (React as any).createContext()
export function Provider(props: any) {
  // Set up physics
  const [world] = useState(() => new CANNON.World())
  useEffect(() => {
    world.broadphase = new CANNON.NaiveBroadphase()
    world.solver.iterations = 10
    world.gravity.set(0, 0, -100)
  }, [world])

  // Run world stepper every frame
  useRender(() => world.step(1 / 60), false)
  // Distribute world via context
  return <context.Provider value={world} children={props.children} />
}

// Custom hook to maintain a world physics body
export function useCannon({ ...props }, fn: any, deps = []) {
  const ref: any = useRef()
  // Get cannon world object
  const world: any = useContext(context)
  // Instanciate a physics body
  const [body] = useState(() => new CANNON.Body(props))
  useEffect(() => {
    // Call function so the user can add shapes
    fn(body)
    // Add body to world on mount
    world.addBody(body)
    // Remove body on unmount
    return () => world.removeBody(body)
  }, deps)

  useRender(() => {
    if (ref.current) {
      // Transport cannon physics into the referenced threejs object
      ref.current.position.copy(body.position)
      ref.current.quaternion.copy(body.quaternion)
    }
  }, false)

  return ref
}