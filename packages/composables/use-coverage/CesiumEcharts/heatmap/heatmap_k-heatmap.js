let base = {
  config: {
    // radius: 10,
    // maxOpacity: .5,
    // minOpacity: 0,
    // blur: .75
  },
  canvas: {
    width: 1000,
    delta: 50,
  },
  _bounds: {
    min: { lat: Number.MAX_VALUE, lng: Number.MAX_VALUE },
    max: { lat: Number.MIN_VALUE, lng: Number.MIN_VALUE },
  },
}
var CesiumData
function bmglHeatMap(Cesium, viewer, data, config) {
  this.viewer = viewer
  CesiumData = Cesium
  base.config = Object.assign({}, base.config, config)
  base.config.container = document.createElement('canvas')
  this.setData(data)
}

bmglHeatMap.prototype._parseData = function (data) {
  let parseData = {
    max: Number.MIN_VALUE,
    data: [],
  }
  base.bounds = JSON.parse(JSON.stringify(base._bounds))
  data.map((v) => {
    base.bounds.min.lat = Math.min(base.bounds.min.lat, v.lat)
    base.bounds.min.lng = Math.min(base.bounds.min.lng, v.lng)
    base.bounds.max.lat = Math.max(base.bounds.max.lat, v.lat)
    base.bounds.max.lng = Math.max(base.bounds.max.lng, v.lng)
  })
  base.canvas.height = Math.floor(
    (base.canvas.width * (base.bounds.max.lat - base.bounds.min.lat)) / (base.bounds.max.lng - base.bounds.min.lng),
  )
  parseData.delta = {
    x: base.canvas.width / (base.bounds.max.lng - base.bounds.min.lng),
    y: base.canvas.height / (base.bounds.max.lat - base.bounds.min.lat),
  }
  data.map((v) => {
    let value = !isNaN(parseInt(v.value)) ? parseInt(v.value) : 1
    parseData.max = Math.max(parseData.max, value)
    parseData.data.push({
      x: base.canvas.delta + Math.floor(parseData.delta.x * (v.lng - base.bounds.min.lng)),
      y: Math.floor(base.canvas.height + base.canvas.delta - parseData.delta.y * (v.lat - base.bounds.min.lat)),
      value: value,
    })
  })
  base.config.container.width = base.canvas.width + base.canvas.delta * 2
  base.config.container.height = base.canvas.height + base.canvas.delta * 2
  document.body.appendChild(base.config.container)
  this.heatmapInstance = h337.create(base.config)
  return parseData
}
bmglHeatMap.prototype.remove = function () {
  this.viewer.entities.removeById(base.config.id)
}

bmglHeatMap.prototype.show = function () {
  this.entity && (this.entity.rectangle.show = true)
}
bmglHeatMap.prototype.hide = function () {
  this.entity && (this.entity.rectangle.show = false)
}
bmglHeatMap.prototype.fromLatLngToPoint = function (latLng) {
  let y =
    ((1 - Math.log(Math.tan((latLng.lat * Math.PI) / 180) + 1 / Math.cos((latLng.lat * Math.PI) / 180)) / Math.PI) /
      2) *
    256
  return { x: 256 * (0.5 + latLng.lng / 360), y }
}
bmglHeatMap.prototype.setData = function (data) {
  base.config.container.style.display = 'block'
  data = this._parseData(data)
  this.viewer.entities.removeById(base.config.id)
  this.heatmapInstance.setData(data)
  base.config.id = new Date().getTime()
  this.entity = this.viewer.entities.add({
    id: base.config.id,
    zIndex: -100,
    rectangle: {
      heightReference: CesiumData.HeightReference.CLAMP_TO_GROUND,
      coordinates: CesiumData.Rectangle.fromDegrees(
        Math.max(
          base.bounds.min.lng - ((base.bounds.max.lng - base.bounds.min.lng) * base.canvas.delta) / base.canvas.width,
          -180,
        ),
        Math.max(
          base.bounds.min.lat - ((base.bounds.max.lat - base.bounds.min.lat) * base.canvas.delta) / base.canvas.height,
          -90,
        ),
        Math.min(
          base.bounds.max.lng + ((base.bounds.max.lng - base.bounds.min.lng) * base.canvas.delta) / base.canvas.width,
          180,
        ),
        Math.min(
          base.bounds.max.lat + ((base.bounds.max.lat - base.bounds.min.lat) * base.canvas.delta) / base.canvas.height,
          90,
        ),
      ),
      outline: true,
      outlineWidth: 10,
      outlineColor: CesiumData.Color.YELLOW,
      materials: CesiumData.Color.RED,
      material: new CesiumData.ImageMaterialProperty({
        image: this.heatmapInstance.getDataURL(),
        repeat: new CesiumData.Cartesian2(1, 1),
        transparent: true,
      }),
    },
  })
  base.config.container.style.display = 'none'
}
window.bmglHeatMap = bmglHeatMap
