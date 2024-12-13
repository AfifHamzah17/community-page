// // import React, { useRef, useEffect, useState } from 'react';
// // import * as THREE from 'three';
// // import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
// // import styles from './Intro.module.css';

// // const ThreeJS = () => {
// //   const mountRef = useRef(null);
// //   const objectRef = useRef(null);
// //   const rendererRef = useRef(null);
// //   const cameraRef = useRef(null);
// //   const [width, setWidth] = useState(window.innerWidth);
// //   const [height, setHeight] = useState(window.innerHeight);

// //   useEffect(() => {
// //     const scene = new THREE.Scene();
// //     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
// //     camera.position.z = 4;
// //     cameraRef.current = camera;

// //     const renderer = new THREE.WebGLRenderer({ alpha: true });
// //     renderer.setSize(width, height);
// //     rendererRef.current = renderer;
// //     mountRef.current.appendChild(renderer.domElement);

// //     const loader = new GLTFLoader();
// //     loader.load('https://storage.googleapis.com/corn-disease-modeltry/model.gltf', (gltf) => {
// //         // Proses model      
// //       const model = gltf.scene;
// //       scene.add(model);
// //       objectRef.current = model;

// //       // Memuat tekstur jika model membutuhkan
// //       const textureLoader = new THREE.TextureLoader();
// //       textureLoader.load('https://storage.googleapis.com/corn-disease-modeltry/textures', (texture) => {
// //         texture.encoding = THREE.sRGBEncoding;
// //         texture.anisotropy = 16;
// //         texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
// //         texture.magFilter = THREE.LinearFilter;

// //         model.traverse((child) => {
// //           if (child.isMesh) {
// //             child.material.map = texture;
// //             child.material.needsUpdate = true;
// //           }
// //         });
// //       });
// //     });

// //     const animate = () => {
// //       requestAnimationFrame(animate);

// //       if (objectRef.current) {
// //         objectRef.current.rotation.x += 0.01;
// //         objectRef.current.rotation.y += 0.01;
// //       }

// //       renderer.render(scene, camera);
// //     };

// //     animate();

// //     return () => {
// //       mountRef.current.removeChild(renderer.domElement);
// //     };
// //   }, [width, height]);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       setWidth(window.innerWidth);
// //       setHeight(window.innerHeight);
// //     };
// //     window.addEventListener('resize', handleResize);
// //     return () => {
// //       window.removeEventListener('resize', handleResize);
// //     };
// //   }, []);

// //   return <div ref={mountRef} className={styles.container}></div>;
// // };

// // export default ThreeJS;

// import React, { useEffect, useRef, useState } from 'react';
// import * as THREE from 'three';
// import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'; // Loader untuk GLB
// import styles from './Intro.module.css';

// const ThreeJS = () => {
//   const mountRef = useRef(null); // Referensi untuk elemen tempat rendering canvas
//   const objectRef = useRef(null); // Referensi untuk objek 3D yang dimuat
//   const rendererRef = useRef(null); // Referensi untuk renderer
//   const cameraRef = useRef(null); // Referensi untuk kamera
//   const isDraggingRef = useRef(false); // Flag untuk memeriksa apakah objek sedang di-drag
//   const lastMousePosition = useRef({ x: 0, y: 0 }); // Posisi terakhir mouse/sentuhan

//   const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);

//   useEffect(() => {
//     // Membuat scene, kamera, dan renderer Three.js
//     const scene = new THREE.Scene();
//     const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
//     camera.position.z = 4;
//     cameraRef.current = camera;

//     // Membuat renderer dan menambahkannya ke DOM
//     const renderer = new THREE.WebGLRenderer({ alpha: true });
//     renderer.setSize(width, height);
//     rendererRef.current = renderer;
//     mountRef.current.appendChild(renderer.domElement);

//     // Menambahkan GLTFLoader untuk memuat model 3D
//     const loader = new GLTFLoader();

//     // Muat model dari /assets/model.glb
//     loader.load('/assets/model.glb', (gltf) => {
//       const model = gltf.scene;
//       scene.add(model); // Tambahkan model ke scene
//       objectRef.current = model;
//     }, undefined, (error) => {
//       console.error(error); // Jika ada error saat memuat model
//     });

//     // Fungsi untuk menangani pergerakan mouse atau sentuhan
//     const handleDrag = (event) => {
//       // Cek apakah drag sedang berlangsung
//       if (!isDraggingRef.current) return;

//       // Mendapatkan posisi mouse atau sentuhan
//       const currentPos = event.touches ? event.touches[0] : event;
//       const deltaX = currentPos.clientX - lastMousePosition.current.x;
//       const deltaY = currentPos.clientY - lastMousePosition.current.y;

//       // Menyesuaikan rotasi objek berdasarkan gerakan horizontal dan vertikal
//       if (objectRef.current) {
//         objectRef.current.rotation.y += deltaX * 0.005; // Rotasi horizontal (sumbu Y)
//         objectRef.current.rotation.x += deltaY * 0.005; // Rotasi vertikal (sumbu X)
//       }

//       // Update posisi terakhir untuk drag berikutnya
//       lastMousePosition.current = { x: currentPos.clientX, y: currentPos.clientY };
//     };

//     const startDrag = (event) => {
//       // Mulai drag saat user mulai klik/touch
//       isDraggingRef.current = true;
//       const startPos = event.touches ? event.touches[0] : event;
//       lastMousePosition.current = { x: startPos.clientX, y: startPos.clientY };

//       // Mencegah halaman melakukan scroll selama drag
//       event.preventDefault();
//     };

//     const endDrag = () => {
//       // Mengakhiri drag
//       isDraggingRef.current = false;
//     };

//     // Menambahkan event listener untuk desktop dan mobile
//     mountRef.current.addEventListener('mousedown', startDrag); // Desktop
//     mountRef.current.addEventListener('mousemove', handleDrag); // Desktop
//     mountRef.current.addEventListener('mouseup', endDrag); // Desktop

//     mountRef.current.addEventListener('touchstart', startDrag); // Mobile
//     mountRef.current.addEventListener('touchmove', handleDrag); // Mobile
//     mountRef.current.addEventListener('touchend', endDrag); // Mobile

//     // Fungsi render untuk memvisualisasikan scene
//     const animate = () => {
//       requestAnimationFrame(animate);

//       // Tambahkan animasi rotasi pada objek yang dimuat
//       if (objectRef.current) {
//         objectRef.current.rotation.x += 0.01; // Rotasi otomatis pada sumbu X
//         objectRef.current.rotation.y += 0.01; // Rotasi otomatis pada sumbu Y
//         objectRef.current.rotation.z += 0.01; // Rotasi otomatis pada sumbu Z
//       }

//       renderer.render(scene, camera); // Render scene dengan kamera
//     };

//     animate(); // Mulai animasi render

//     // Cleanup saat komponen di-unmount
//     return () => {
//       mountRef.current.removeEventListener('mousedown', startDrag);
//       mountRef.current.removeEventListener('mousemove', handleDrag);
//       mountRef.current.removeEventListener('mouseup', endDrag);
//       mountRef.current.removeEventListener('touchstart', startDrag);
//       mountRef.current.removeEventListener('touchmove', handleDrag);
//       mountRef.current.removeEventListener('touchend', endDrag);
//       mountRef.current.removeChild(renderer.domElement);
//     };
//   }, [width, height]);

//   // Responsif terhadap perubahan ukuran layar
//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//       setHeight(window.innerHeight);
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   return <div ref={mountRef} className={styles.container}></div>;
// };

// export default ThreeJS;
