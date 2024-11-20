interface WindFieldParams {
  header: {
    lo1: number;
    lo2: number;
    la1: number;
    la2: number;
    ny: number;
    nx: number;
    dx: number;
    dy: number;
    parameterUnit: string;
    refTime: string;
  };
  uComponent: number[];
  vComponent: number[];
}

type UV = [number, number, number]; // 定义固定长度的元组类型

class WindField {
  west: number | null = null;
  east: number | null = null;
  south: number | null = null;
  north: number | null = null;
  rows: number | null = null;
  cols: number | null = null;
  dx: number | null = null;
  dy: number | null = null;
  unit: string | null = null;
  date: string | null = null;
  grid: UV[][] = []; // 定义为二维数组，元素是元组

  constructor(obj: WindFieldParams) {
    this._init(obj);
  }

  private _init(obj: WindFieldParams): void {
    const { header, uComponent, vComponent } = obj;

    this.west = +header.lo1;
    this.east = +header.lo2;
    this.south = +header.la2;
    this.north = +header.la1;
    this.rows = +header.ny;
    this.cols = +header.nx;
    this.dx = +header.dx;
    this.dy = +header.dy;
    this.unit = header.parameterUnit;
    this.date = header.refTime;

    let k = 0;
    for (let j = 0; j < this.rows!; j++) {
      const row: UV[] = [];
      for (let i = 0; i < this.cols!; i++, k++) {
        const uv = this._calcUV(uComponent[k], vComponent[k]);
        row.push(uv);
      }
      this.grid.push(row);
    }
  }

  private _calcUV(u: number, v: number): UV {
    return [+u, +v, Math.sqrt(u * u + v * v)];
  }

  private _bilinearInterpolation(
    x: number,
    y: number,
    g00: UV,
    g10: UV,
    g01: UV,
    g11: UV
  ): UV {
    const rx = 1 - x;
    const ry = 1 - y;
    const a = rx * ry,
      b = x * ry,
      c = rx * y,
      d = x * y;

    const u = g00[0] * a + g10[0] * b + g01[0] * c + g11[0] * d;
    const v = g00[1] * a + g10[1] * b + g01[1] * c + g11[1] * d;
    return this._calcUV(u, v);
  }

  getIn(x: number, y: number): UV | null {
    const x0 = Math.floor(x);
    const y0 = Math.floor(y);

    if (x0 === x && y0 === y) return this.grid[y0]?.[x0] || null;

    const x1 = x0 + 1;
    const y1 = y0 + 1;

    const g00 = this.grid[y0]?.[x0];
    const g10 = this.grid[y0]?.[x1];
    const g01 = this.grid[y1]?.[x0];
    const g11 = this.grid[y1]?.[x1];

    if (!g00 || !g10 || !g01 || !g11) return null;

    return this._bilinearInterpolation(x - x0, y - y0, g00, g10, g01, g11);
  }

  isInBound(x: number, y: number): boolean {
    return (
      x >= 0 && x < (this.cols ?? 0) - 2 && y >= 0 && y < (this.rows ?? 0) - 2
    );
  }
}

export default WindField;
