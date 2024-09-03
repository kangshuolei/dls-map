/**
 * @name: DataProcessingCountry
 * @author: KKK
 * @date: 2023/6/1 15:49
 * @description: DataProcessingCountry
 * @update: 2023/6/1 15:49
 */

export default function DataProcessingCountry(CoordMap: any, countryData: any, name: string, position: any) {
  let chinaGeoCoordMap: any = {}
  let chinaData = []
  CoordMap.forEach((item: any) => {
    chinaGeoCoordMap[item.title] = [parseFloat(item.lon), parseFloat(item.lat)]
  })
  chinaData = countryData.map((item: any) => {
    return [
      {
        name: item.title,
        value: 0,
        linesColor: item.linesColor,
        effectColor: item.effectColor
      }
    ]
  })
  const convertData = function (data: any) {
    const res = []
    for (let i = 0; i < data.length; i++) {
      const dataItem = data[i]
      const fromCoord = chinaGeoCoordMap[dataItem[0].name]
      const toCoord = position
      if (fromCoord && toCoord) {
        res.push([
          {
            coord: fromCoord,
            value: dataItem[0].value
          },
          {
            coord: toCoord
          }
        ])
      }
    }
    return res
  }
  const data = [[name, chinaData]]
  let series: any = []
  data.forEach(function (item, i) {
    let arr = item[1].map((items: any, index: any) => {
      return {
        type: "lines",
        coordinateSystem: "GLMap",
        zlevel: 2,
        effect: {
          show: true,
          period: 4, //箭头指向速度，值越小速度越快
          trailLength: 0.2, //特效尾迹长度[0,1]值越大，尾迹越长重
          symbol: "arrow", //箭头图标
          symbolSize: 9 //图标大小
        },
        lineStyle: {
          normal: {
            width: 3, //尾迹线条宽度
            opacity: 1, //尾迹线条透明度
            //color: '#00EAFF', //线的颜色
            color: items[0].linesColor,
            curveness: 0.3 //尾迹线条曲直度
          }
        },
        data: [convertData(item[1])[index]]
      }
    })
    series = [...series, ...arr]
    series.push(
      {
        type: "effectScatter",
        coordinateSystem: "GLMap",
        zlevel: 2,
        rippleEffect: {
          //涟漪特效
          period: 4, //动画时间，值越小速度越快
          brushType: "fill", //波纹绘制方式 stroke, fill
          scale: 9 //波纹圆环最大限制，值越大波纹越大
        },
        label: {
          normal: {
            show: true,
            position: "right", //显示位置
            offset: [5, 0], //偏移设置
            formatter: function (params: any) {
              //圆环显示文字
              return params.data.name
            },
            fontSize: 16
          },
          emphasis: {
            show: true
          }
        },
        symbol: "circle",
        symbolSize: function (val: any) {
          return 5 + val[2] * 5 //圆环大小
        },
        itemStyle: {
          normal: {
            show: false,
            color: "#0087FF", //颜色
            fontSize: 16
          }
        },
        data: item[1].map(function (dataItem: any) {
          return {
            name: dataItem[0].name,
            value: chinaGeoCoordMap[dataItem[0].name].concat([dataItem[0].value])
          }
        })
      },
      //被攻击点
      {
        type: "scatter",
        coordinateSystem: "GLMap",
        zlevel: 2,
        rippleEffect: {
          period: 4,
          brushType: "stroke",
          scale: 4
        },
        label: {
          normal: {
            show: true,
            position: "right",
            color: "#0f0",
            formatter: "{b}",
            textStyle: {
              color: "red",
              fontSize: 16
            }
          },
          emphasis: {
            show: true,
            color: "#f60"
          }
        },
        data: [
          {
            name: item[0],
            value: chinaGeoCoordMap[item[0]].concat([10])
          }
        ]
      }
    )
  })
  let option = {
    animation: !1,
    GLMap: {},
    series: series
  }
  return option
}
