import * as THREE from "https://threejs.org/build/three.module.js"
import {keys} from "https://yunhanyuu.github.io/Lab2022/init.js";
//var keys;
var T = 5;
var clock = new THREE.Clock();
var ts = clock.getElapsedTime();
var car = new THREE.Group();

function makeCar() {
  var normalMat = new THREE.MeshNormalMaterial({
    wireframe: true
  });
  var body = new THREE.Mesh(new THREE.CylinderGeometry(15, 15, 4, 20), normalMat);
  var nose = new THREE.Mesh(new THREE.BoxGeometry(25, 4, 7), normalMat);
  nose.position.x = 25 / 2;
  car.add(body, nose);
  return car;
}

function keyframe(t) {
  var s = ((t - ts) % T) / T;

  for (var i = 1; i < 6; i++) {
    if (keys[i][0] > s) break;
  }
  // take i-1
  var ii = i - 1;
  var a = (s - keys[ii][0]) / (keys[ii + 1][0] - keys[ii][0]);
  var intKey = [keys[ii][1][0] * (1 - a) + keys[ii + 1][1][0] * a,
    keys[ii][1][1] * (1 - a) + keys[ii + 1][1][1] * a
  ];
  car.position.lerpVectors(keys[ii][1], keys[ii + 1][1], a);
  car.quaternion.slerpQuaternions(keys[ii][2], keys[ii + 1][2], a);
}

export {makeCar, keyframe};
export { clock, car};

export {makeCar, keyframe};
export { clock, car};
