import { MeshText2D, textAlign } from '@kinyoklion/three-text2d/dist/three-text2d.js';

import * as THREE from 'three';

import {scene} from './main-3';
var text1;
function buildScene() {


   let box = new THREE.Mesh (new THREE.BoxGeometry(50,20,10), new THREE.MeshNormalMaterial());
   //scene.add (box);
	

    text1 = new MeshText2D("Hello!", { align: textAlign.center, font: '30px Arial',
                            fillStyle: '#ccffff', antialias: true });
	text1.scale.set(2, 2, 2);						
   scene.add(text1);
}

export { buildScene,text1 };

