/*
 * @Author: Kang
 * @Date: 2024-08-27 15:47:22
 * @Last Modified by: Kang
 * @LastEditTime: 2024-10-16 09:46:29
 */
import { ref } from 'vue';
function FS_Snow() {
  return '#version 300 es\n\
    precision highp float;\n\
    uniform sampler2D colorTexture;\n\
    in vec2 v_textureCoordinates;\n\
    out vec4 fragColor;\n\
\n\
    float snow(vec2 uv, float scale) {\n\
        float time = czm_frameNumber / 60.0;\n\
        float w = smoothstep(1.0, 0.0, -uv.y * (scale / 10.0));\n\
        if (w < 0.1) return 0.0;\n\
        uv += time / scale;\n\
        uv.y += time * 2.0 / scale;\n\
        uv.x += sin(uv.y + time * 0.5) / scale;\n\
        uv *= scale;\n\
        vec2 s = floor(uv), f = fract(uv), p;\n\
        float k = 3.0, d;\n\
        p = 0.5 + 0.35 * sin(11.0 * fract(sin((s + p + scale) * mat2(7, 3, 6, 5)) * 5.0)) - f;\n\
        d = length(p);\n\
        k = min(d, k);\n\
        k = smoothstep(0.0, k, sin(f.x + f.y) * 0.01);\n\
        return k * w;\n\
    }\n\
\n\
    void main(void) {\n\
        vec2 resolution = czm_viewport.zw;\n\
        vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);\n\
        vec3 finalColor = vec3(0.0);\n\
        float c = 0.0;\n\
        c += snow(uv, 30.0) * 0.0;\n\
        c += snow(uv, 20.0) * 0.0;\n\
        c += snow(uv, 15.0) * 0.0;\n\
        c += snow(uv, 10.0);\n\
        c += snow(uv, 8.0);\n\
        c += snow(uv, 6.0);\n\
        c += snow(uv, 5.0);\n\
        finalColor = vec3(c);\n\
        fragColor = mix(texture(colorTexture, v_textureCoordinates), vec4(finalColor, 1.0), 0.3);\n\
    }\n\
';
}
function FS_Rain() {
  return `#version 300 es
    precision highp float;
    uniform sampler2D colorTexture;
    in vec2 v_textureCoordinates;
    out vec4 fragColor;

    float hash(float x) {
      return fract(sin(x * 23.3) * 13.13);
    }

    void main(void) {
      float time = czm_frameNumber / 60.0;
      vec2 resolution = czm_viewport.zw;

      vec2 uv = (gl_FragCoord.xy * 2.0 - resolution.xy) / min(resolution.x, resolution.y);
      vec3 c = vec3(0.6, 0.7, 0.8);

      float a = -0.4;
      float si = sin(a), co = cos(a);
      uv *= mat2(co, -si, si, co);
      uv *= length(uv + vec2(0, 4.9)) * 0.3 + 1.0;

      float v = 1.0 - sin(hash(floor(uv.x * 100.0)) * 2.0);
      float b = clamp(abs(sin(20.0 * time * v + uv.y * (5.0 / (2.0 + v)))) - 0.95, 0.0, 1.0) * 20.0;
      c *= v * b;

      fragColor = mix(texture(colorTexture, v_textureCoordinates), vec4(c, 1.0), 0.5);
    }
  `;
}
export function useEnvironment() {
  const snowScene = ref<any>(null);
  const rainScene = ref<any>(null);
  /**
   * 加载下雪场景
   * @param viewer
   */
  function addSnowScene(viewer: Cesium.Viewer) {
    let collection = viewer.scene.postProcessStages;
    let fs_snow = FS_Snow();
    let snow = new Cesium.PostProcessStage({
      name: 'czm_snow',
      fragmentShader: fs_snow,
    });
    collection.add(snow);
    snowScene.value = snow;
  }
  /**
   * 加载下雨场景
   * @param viewer
   */
  function addRainScene(viewer: Cesium.Viewer) {
    let collection = viewer.scene.postProcessStages;
    let fs_rain = FS_Rain();
    let rain = new Cesium.PostProcessStage({
      name: 'czm_rain',
      fragmentShader: fs_rain,
    });
    collection.add(rain);
    rainScene.value = rain;
  }
  /**
   * 删除下雪场景
   */
  const removeSnowScene = (viewer: Cesium.Viewer) => {
    if (snowScene.value) {
      viewer.scene.postProcessStages.remove(snowScene.value);
      snowScene.value = null;
    }
  };
  /**
   * 删除下雨场景
   */
  const removeRainScene = (viewer: Cesium.Viewer) => {
    if (rainScene.value) {
      viewer.scene.postProcessStages.remove(rainScene.value);
      rainScene.value = null;
    }
  };
  return {
    addSnowScene,
    addRainScene,
    removeSnowScene,
    removeRainScene,
  };
}
