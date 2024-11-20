/*
 * @Author: Kang
 * @Date: 2024-11-20 09:37:25
 * @Last Modified by: Kang
 * @LastEditTime: 2024-11-20 09:59:24
 */
interface ParticleType {
  x: number | null;
  dx: number | null;
  dy: number | null;
  y: number | null;
  age: number | null;
  birthAge: number | null;
  path: any[] | null; // 根据具体需求定义路径类型
}

class Particle implements ParticleType {
  x: number | null = null;
  dx: number | null = null;
  dy: number | null;
  y: number | null = null;
  age: number | null = null;
  birthAge: number | null = null;
  path: any[] | null = null;

  constructor() {
    // 在构造函数中初始化属性
  }
}

export default Particle;
