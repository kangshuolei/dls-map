import FineArrow from './arrow/fine-arrow'; //直箭头
import AttackArrow from './arrow/attack-arrow'; //进攻方向箭头
import SwallowtailAttackArrow from './arrow/swallowtail-attack-arrow'; //进攻方向箭头（燕尾）
import SquadCombat from './arrow/squad-combat'; //分队战斗方向
import SwallowtailSquadCombat from './arrow/swallowtail-squad-combat'; //分队战斗方向（燕尾）
import StraightArrow from './arrow/straight-arrow'; //细直箭头
import CurvedArrow from './arrow/curved-arrow'; //曲线箭头
import AssaultDirection from './arrow/assault-direction'; //突击方向
import DoubleArrow from './arrow/double-arrow'; //双箭头（钳击）
import FreehandLine from './line/freehand-line'; //自由线
import FreehandPolygon from './polygon/freehand-polygon'; //自由面
import Curve from './line/curve'; //曲线
import Ellipse from './polygon/ellipse'; //椭圆
import Lune from './polygon/lune'; //半月面（弓型面）
import Reactangle from './polygon/rectangle'; //矩形
import Triangle from './polygon/triangle'; //三角形
import Polygon from './polygon/polygon'; //多边形
import Circle from './polygon/circle'; //圆形
import Sector from './polygon/sector'; //扇形
import GatheringPlace from './polygon/gathering-place'; //集结地
import Arc from './line/arc'; //弓形线
import Polyline from './line/polyline'; //折线
import ClosedCurve from './polygon/closed-curve'; //闭合曲面

//目前没有的

//点
//粗单直箭头
//矩形标志旗
//三角标志旗
//曲线标志旗
//模型

//要有属性的选择
//颜色：面的颜色和透明度、边框的颜色以及透明度
//类型：依附地形和模型、依附地形、依附模型、空间面
/**
 * 在 Cesium 中，这四个选项分别用于控制对象在三维空间中如何与地形和模型进行交互和定位。它们的区别和原理如下：
 *
 *  1.	依附地形和模型：
 *  •	原理：此选项会使对象贴合在地形或3D模型的表面上。它首先检查对象在模型（如建筑物、3D物体）上的位置，如果有模型，它会优先依附到模型上；如果没有模型，它会依附到地形上。
 *  •	应用场景：适用于希望对象无缝贴合地形或现有的3D模型表面时，例如在建筑物屋顶上放置天线或在地面上放置标记点。
 *  2.	依附地形：
 *  •	原理：此选项强制对象仅贴合在地形的表面上，而忽略任何3D模型。这意味着对象会根据地形的高低起伏来调整其位置。
 *  •	应用场景：适用于需要将对象紧贴地形，例如道路、河流、植被等，特别是在没有其他3D模型干扰的情况下。
 *  3.	依附模型：
 *  •	原理：此选项使对象仅依附在3D模型的表面，而忽略地形。这意味着如果存在建筑物或其他3D模型，对象会直接贴合在这些模型上，而不会考虑地形。
 *  •	应用场景：适用于在复杂的3D模型（如城市模型）上放置对象，而不希望它们受到地形的影响，例如在建筑物墙面或屋顶上安放装饰物或标记。
 *  4.	空间面：
 *  •	原理：此选项使对象独立于地形和模型，直接在三维空间中定位。这意味着对象的位置不会受到地形起伏或3D模型的影响，而是根据其设定的坐标位置显示。
 *  •	应用场景：适用于需要精确定位在某一高度或特定空间位置的对象，例如卫星、无人机或漂浮在空中的标记点。
 *
 * 总结：
 *
 *  •	依附地形和模型：优先依附模型，否则依附地形。
 *  •	依附地形：仅依附地形，忽略模型。
 *  •	依附模型：仅依附模型，忽略地形。
 *  •	空间面：不依附任何表面，直接定位在空间中。
 *
 * 选择哪个选项取决于你想要如何控制对象的定位方式和与场景的交互。
 */

import { GeometryStyle } from './interface';

const CesiumPlot: any = {
  FineArrow,
  AttackArrow,
  SwallowtailAttackArrow,
  SquadCombat,
  SwallowtailSquadCombat,
  StraightArrow,
  CurvedArrow,
  AssaultDirection,
  DoubleArrow,
  FreehandLine,
  FreehandPolygon,
  Curve,
  Ellipse,
  Lune,
  Reactangle,
  Triangle,
  Polygon,
  Circle,
  Sector,
  GatheringPlace,
  Arc,
  Polyline,
  ClosedCurve,
};

type CreateGeometryFromDataOpts = {
  type: string;
  cartesianPoints: any;
  style: GeometryStyle;
};
/**
 * 根据点位数据生成几何图形
 * @param points
 */
CesiumPlot.createGeometryFromData = (
  cesium: any,
  viewer: any,
  opts: CreateGeometryFromDataOpts
) => {
  const { type, style, cartesianPoints } = opts;
  const geometry = new CesiumPlot[type](cesium, viewer, style);

  geometry.points = cartesianPoints;
  const geometryPoints = geometry.createGraphic(cartesianPoints);
  geometry.setGeometryPoints(geometryPoints);
  if (geometry.type == 'polygon') {
    geometry.drawPolygon();
  } else {
    geometry.drawLine();
  }
  geometry.finishDrawing();
  geometry.onClick();
  return geometry;
};

export default CesiumPlot;
