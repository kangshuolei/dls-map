import { onUnmounted, reactive } from 'vue';
/**
 * @description: 使用键盘控制地图漫游初始化
 * @param {*} _viewer
 * @return {*}
 */

export function useKeyboardRoam() {
  const dataM: any = reactive({
    flags: {
      // 相机位置
      moveForward: false,
      moveBackward: false,
      moveLeft: false,
      moveRight: false,
      moveUp: false,
      moveDown: false,
      // 相机姿态
      lookUp: false,
      lookDown: false,
      lookLeft: false,
      lookRight: false,
      twistLeft: false,
      twistRight: false,
      // 缩放
      zoomIn: false,
      zoomOut: false,
    },
    viewer: null,
  });

  onUnmounted(() => {
    dataM.viewer && keyboardMapRoamingRemove(dataM.viewer);
  });

  // 相机位置：W：向前；S：向后；D：向右；A：向左；Q：升高；E：降低；
  // 相机姿态：↑：抬头；↓：低头；←：左转；→：右转；K：顺时针；L：逆时针
  // 缩放：i：放大，0：缩小；

  function keyboardMapRoamingInit(_viewer: Cesium.Viewer) {
    dataM.viewer = _viewer;
    // 添加键盘监听事件
    document.addEventListener('keydown', keyDown, false);
    document.addEventListener('keyup', keyUp, false);

    // 为每一帧添加监听事件
    _viewer.clock.onTick.addEventListener(function () {
      keyboardMapRoamingRender(_viewer);
    });
  }

  function keyboardMapRoamingRemove(_viewer?: Cesium.Viewer) {
    if (_viewer || dataM.viewer) {
      let viewer = _viewer || dataM.viewer;
      // 取消键盘监听事件
      document.removeEventListener('keydown', keyDown, false);
      document.removeEventListener('keyup', keyUp, false);

      // 取消每帧监听事件
      viewer.clock.onTick.removeEventListener(function () {
        keyboardMapRoamingRender(viewer);
      });
    }
  }

  /**
   * @description: 根据键盘输入字符返回事件信息
   * @param {*} key
   * @return {*}
   */
  function getFlagFromKeyboard(key: number) {
    switch (key) {
      // 按字符的Unicode编码
      // 相机位置
      case 87:
        return 'moveForward';
      case 83:
        return 'moveBackward';
      case 68:
        return 'moveRight';
      case 65:
        return 'moveLeft';
      case 81:
        return 'moveUp';
      case 69:
        return 'moveDown';
      // 相机姿态
      case 38:
        return 'lookUp';
      case 40:
        return 'lookDown';
      case 37:
        return 'lookLeft';
      case 39:
        return 'lookRight';
      case 75: //K
        return 'twistLeft';
      case 76: //L
        return 'twistRight';
      // 缩放
      case 73: //I
        return 'zoomIn';
      case 79: //O
        return 'zoomOut';
      default:
        return undefined;
    }
  }

  /**
   * @description: 键盘按下
   * @param {*} event
   * @return {*}
   */
  function keyDown(event: any) {
    let flagName = getFlagFromKeyboard(event.keyCode);
    if (typeof flagName !== 'undefined') {
      dataM.flags[flagName] = true;
    }
  }

  /**
   * @description: 键盘弹起
   * @param {*} event
   * @return {*}
   */
  function keyUp(event: any) {
    let flagName = getFlagFromKeyboard(event.keyCode);
    if (typeof flagName !== 'undefined') {
      dataM.flags[flagName] = false;
    }
  }

  /**
   * @description: 根据事件调整相机
   * @param {*} _viewer
   * @return {*}
   */
  function keyboardMapRoamingRender(_viewer: Cesium.Viewer) {
    let camera = _viewer.camera;
    let ellipsoid = _viewer.scene.globe.ellipsoid;
    let cameraHeight = ellipsoid.cartesianToCartographic(
      camera.position
    ).height;

    // 根据相机高度设置移动距离，比默认距离移动效果更好
    let moveRate = cameraHeight / 20.0;

    if (dataM.flags.moveForward) {
      camera.moveForward(moveRate);
    }
    if (dataM.flags.moveBackward) {
      camera.moveBackward(moveRate);
    }
    if (dataM.flags.moveLeft) {
      camera.moveLeft(moveRate);
    }
    if (dataM.flags.moveRight) {
      camera.moveRight(moveRate);
    }
    if (dataM.flags.moveUp) {
      camera.moveUp(moveRate);
    }
    if (dataM.flags.moveDown) {
      camera.moveDown(moveRate);
    }
    if (dataM.flags.lookUp) {
      camera.lookUp();
    }
    if (dataM.flags.lookDown) {
      camera.lookDown();
    }
    if (dataM.flags.lookLeft) {
      camera.lookLeft();
    }
    if (dataM.flags.lookRight) {
      camera.lookRight();
    }
    if (dataM.flags.twistLeft) {
      camera.twistLeft();
    }
    if (dataM.flags.twistRight) {
      camera.twistRight();
    }
    // 根据相机高度设置缩放参数
    if (dataM.flags.zoomIn) {
      camera.zoomIn(cameraHeight / 2);
    }
    if (dataM.flags.zoomOut) {
      camera.zoomOut(cameraHeight / 2);
    }
  }
  return {
    keyboardMapRoamingInit,
    keyboardMapRoamingRemove,
  };
}
