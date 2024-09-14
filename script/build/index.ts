/*
 * @Author: Kang
 * @Date: 2024-08-09 09:45:00
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-14 10:25:22
 */
import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, componentPath, buildPath } from '../utils/paths';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';

//删除dist

export const removeDist = () => {
  return delPath(`${pkgPath}/dls`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/dls/lib/src`))
    .pipe(dest(`${pkgPath}/dls/es/src`));
};

//打包组件
export const buildComponent = async () => {
  run('pnpm run build', buildPath);
};
export default series(
  async () => removeDist(),
  parallel(
    async () => buildStyle(),
    async () => buildComponent()
  )
);
