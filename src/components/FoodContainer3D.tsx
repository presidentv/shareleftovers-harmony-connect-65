import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const FoodContainer3D = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(300, 300);
    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(0, 10, 10);
    scene.add(directionalLight);

    // Create food container
    const containerGeometry = new THREE.BoxGeometry(2, 1, 2);
    const containerMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x8CA891,
      transparent: true,
      opacity: 0.8,
    });
    const container = new THREE.Mesh(containerGeometry, containerMaterial);

    // Create lid
    const lidGeometry = new THREE.BoxGeometry(2.2, 0.1, 2.2);
    const lidMaterial = new THREE.MeshPhongMaterial({ 
      color: 0x8CA891,
      transparent: true,
      opacity: 0.9,
    });
    const lid = new THREE.Mesh(lidGeometry, lidMaterial);
    lid.position.y = 0.5;

    // Group container and lid
    const group = new THREE.Group();
    group.add(container);
    group.add(lid);
    scene.add(group);

    camera.position.z = 5;

    // Animation
    const animate = () => {
      requestAnimationFrame(animate);
      group.rotation.y += 0.005;
      group.rotation.x = Math.sin(Date.now() * 0.001) * 0.1;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      mountRef.current?.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute right-10 top-1/2 -translate-y-1/2 hidden lg:block"
      style={{ width: '300px', height: '300px' }}
    />
  );
};