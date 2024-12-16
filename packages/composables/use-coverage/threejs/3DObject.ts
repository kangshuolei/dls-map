/*
 * @Author: Kang
 * @Date: 2024-12-15 22:01:22
 * @Last Modified by: Kang
 * @LastEditTime: 2024-12-16 16:19:24
 */
import * as THREE from 'three';

class _3DObject {
  threeMesh: THREE.Object3D | null;
  minWGS84: [number, number] | null;
  maxWGS84: [number, number] | null;

  constructor() {}
}

export default _3DObject;
