// Scene
const scene = new THREE.Scene();

// Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff00ff });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};
// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const canvas = document.querySelector(".webgl");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
renderer.setSize(sizes.width, sizes.height);

// Animation
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
}

animate();
