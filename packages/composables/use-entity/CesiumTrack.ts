import { groupPoints, twoToCenter } from '@dls-map/utils/index';
import { rhumbBearing } from '@turf/turf';
import { ref } from 'vue';
interface LineData {
  name: string;
  startTime: string;
  endTime: string;
  positions: Array<number>;
  lineData: Array<Array<String>>; //没有扁平化的经纬度
  color: string;
  shipData: any;
  ship_cn_name: string;
  country_name: string;
}
let groupArrPoint: any = [];

//1.根据数据生成轨迹线
/**
 *
 * @param data 因为是一个数组对象，所以这边就把 attribute.data 和 positions 的数据字段做一个规定了
 * @returns
 */
export default function CesiumTrack(
  data: Array<LineData>,
  viewer: any,
  img: any
) {
  return new Promise((resolve, reject) => {
    groupArrPoint = [];
    let lineDataArr: any = [];
    if (!data.length) return false;
    console.log('dataaaaa', data);
    data.forEach((item: any, index: any) => {
      //生成线
      if (item.color) {
        const line = viewer.entities.add({
          name: 'Purple',
          polyline: {
            positions: Cesium.Cartesian3.fromDegreesArray(
              item.positions.flat()
            ),
            width: 3,
            followSurface: false,
            material: new Cesium.PolylineArrowMaterialProperty(
              Cesium.Color.fromCssColorString(item.color)
            ),
          },
        });
        //生成点
        handleGeneratePosition(item.positions, item.color, viewer);
        //获取每条线每两个点的集合
        groupArrPoint.push({
          color: item.color,
          data: groupPoints(item.positions),
        });
        lineDataArr.push(line);
      }
    });
    //根据每两个坐标生成角度
    handleGroupArrPoint(viewer, img);
    resolve(null);
    return lineDataArr;
  });
}
//2.根据线的数据生成点数据
const handleGeneratePosition = (data: any, color: string, viewer: any) => {
  if (data && data.length) {
    //就不简化写了，时间紧
    let startPoint = {
      point: [data[0].lon, data[0].lat],
      track_time: '2020-09-03',
    };
    let endPoint = {
      point: [data[data.length - 1].lon, data[data.length - 1].lat],
      track_time: '2020-09-07',
    };
    let dataArr = [startPoint, endPoint];
    dataArr.forEach((item: any, index: any) => {
      let tooltip = `
          <div>
            <div class="line"></div>
            <div class="panel">
              <span class="content">${item.track_time}</span>
            </div>
          </div>
        `;
      let className = 'LayerPointTime';
      let val = {
        viewer,
        position: [parseFloat(item.point[0]), parseFloat(item.point[1])],
        height: 0,
        offset: [0, -60],
        dom: tooltip,
        className,
        type: 'LayerPointTime',
      };
      // new divLabel(val);
    });

    data.forEach((t: any) => {
      viewer.entities.add({
        position: Cesium.Cartesian3.fromDegrees(t[0], t[1], 1000),
        attribute: {
          data: [],
        },
        point: {
          zIndex: 99999999,
          pixelSize: 6,
          pickable: true,
          color: Cesium.Color.fromCssColorString(color),
          heightReference: Cesium.HeightReference.RELATIVE_TO_GROUND,
        },
      });
    });
  }
};

//3.根据每两个坐标生成角度
const handleGroupArrPoint = (viewer: any, img: any) => {
  //通过上面的值，生成每两个点的数组集合，然后计算出两个点的中心点，在给中心点加箭头指向
  // 1.通过上面的值，生成每两个点的数组集合
  //2.根据两个点生成每两个点的中心点
  groupArrPoint.forEach((item: any) => {
    item.data.forEach((coordItem: any) => {
      let centerPoint = twoToCenter(coordItem[0], coordItem[1]);
      //通过 truf 计算两个点的方向向量
      let angle = rhumbBearing(coordItem[0], coordItem[1]);

      const angleInRadians = Cesium.Math.toRadians(-angle + 90);
      const hexColor = item.color;
      const alpha = 1;
      const size = 20.0;
      const rgbaColor =
        Cesium.Color.fromCssColorString(hexColor).withAlpha(alpha);
      let arrowEntity = viewer.entities.add({
        position: centerPoint,
        billboard: {
          rotation: angleInRadians,
          image: img,
          scale: 0.1,
          alignedAxis: Cesium.Cartesian3.ZERO,
          heightReference: Cesium.HeightReference.CLAMP_TO_GROUND,
        },
      });
      viewer.scene.requestRender();
    });
  });
};

//通过生成一个canvas来显示箭头的方法，显示是可行，箭头的长相难弄（暂时没用）
const createArrowCanvas = (color: any, angle: any, size: any) => {
  const canvas = document.createElement('canvas');
  canvas.width = size;
  canvas.height = size;

  const context: any = canvas.getContext('2d');

  context.save();
  context.translate(size / 2, size / 2);
  context.rotate(angle);
  context.beginPath();
  context.moveTo(-size / 2, -size / 2);
  context.lineTo(size / 2, -size / 2);
  context.lineTo(size / 2, 0);
  context.lineTo(size * 0.2, 0);
  context.lineTo(0, size / 2);
  context.lineTo(-size * 0.2, 0);
  context.lineTo(-size / 2, 0);
  context.closePath();
  context.fillStyle = color.toCssColorString();
  context.fill();
  context.strokeStyle = color.toCssColorString();
  context.lineWidth = 2;
  context.stroke();
  context.restore();

  return canvas;
};
