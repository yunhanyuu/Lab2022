import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { buildScene,text1 } from './buildScene';

var camera, scene, renderer,angle=0;

init();
animate();

function init() {

  scene = new THREE.Scene();

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x888888);
  document.body.appendChild(renderer.domElement);

  camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 1, 1000);
  camera.position.set (500,200,100);
  
  const controls = new OrbitControls( camera, renderer.domElement );

  ////////////////////////////////////////////////////////////////
  var gridXZ = new THREE.GridHelper(200, 20, 'red', 'white');
  scene.add(gridXZ);
  
  buildScene();

}

function animate() {
	text1.position.set(20,50,0)
	angle+=0.01;
	if(camera.position.y>=400&&camera.position.y<=600){
		
		text1.rotation.set(-angle,0,Math.PI/2);
	}
	else if(camera.position.y<=-400&&camera.position.y>=-600){
		
		text1.rotation.set(angle,0,-Math.PI/2);
	}
	else{
		text1.rotation.x=0;
		text1.rotation.z=0;
	text1.rotation.y=(-angle);
	}
	//console.log(camera.position.y);
  requestAnimationFrame(animate);
  renderer.render(scene, camera);

}

export {scene,camera};
