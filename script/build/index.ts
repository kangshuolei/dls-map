/*
 * @Author: Kang
 * @Date: 2024-08-09 09:45:00
 * @Last Modified by: Kang
 * @LastEditTime: 2024-12-20 15:22:39
 */
import delPath from '../utils/delpath';
import { series, parallel, src, dest } from 'gulp';
import { pkgPath, componentPath, buildPath } from '../utils/paths';
import less from 'gulp-less';
import autoprefixer from 'gulp-autoprefixer';
import run from '../utils/run';
import { promises as fsPromises } from 'fs';
import fs from 'fs';
import path from 'path';
import { copyFile } from 'fs/promises';

//删除dist
export const removeDist = () => {
  return delPath(`${pkgPath}/dls`);
};

//打包样式
export const buildStyle = () => {
  return src(`${componentPath}/src/**/style/**.less`)
    .pipe(less())
    .pipe(autoprefixer())
    .pipe(dest(`${pkgPath}/dls/lib/packages/components/src`))
    .pipe(dest(`${pkgPath}/dls/es/packages/components/src`));
};

//打包组件
export const buildComponent = async () => {
  // await run('tsc', buildPath);
  await run('pnpm run build', buildPath);
};

//复制 types下的 文件
export const copyTypes = async () => {
  const sourceDir = path.resolve(`${pkgPath}/types`);
  const targetDirs = [path.resolve(`${pkgPath}/packages/types`)];
  // 复制文件函数
  const copyFiles = async (src, dest) => {
    try {
      await fsPromises.mkdir(dest, { recursive: true });
      const items = await fsPromises.readdir(src);

      for (const item of items) {
        const srcPath = path.join(src, item);
        const destPath = path.join(dest, item);

        const stat = await fsPromises.stat(srcPath);
        if (stat.isDirectory()) {
          await copyFiles(srcPath, destPath);
        } else {
          await fsPromises.copyFile(srcPath, destPath);
        }
      }
      console.log(`Copied from ${src} to ${dest}`);
    } catch (err) {
      console.error(`Error copying from ${src} to ${dest}:`, err);
    }
  };

  for (const targetDir of targetDirs) {
    await copyFiles(sourceDir, targetDir);
  }
};

//删除复制的 types
export const removeTypes = async () => {
  // fs.rmdirSync(`${pkgPath}/packages/types`);
  const deleteDirectoryRecursive = (dirPath) => {
    if (fs.existsSync(dirPath)) {
      // 读取目录中的所有文件和子目录
      fs.readdirSync(dirPath).forEach((file) => {
        const filePath = path.join(dirPath, file);
        if (fs.lstatSync(filePath).isDirectory()) {
          // 递归删除子目录
          deleteDirectoryRecursive(filePath);
        } else {
          // 删除文件
          fs.unlinkSync(filePath);
        }
      });
      // 删除空目录
      fs.rmdirSync(dirPath);
    }
  };
  const targetDir = path.resolve(__dirname, `${pkgPath}/packages/types`);
  deleteDirectoryRecursive(targetDir);
};

//赋值 Readme
export const copyReadme = async () => {
  copyFile(
    path.resolve(`${pkgPath}`, 'README.md'),
    path.resolve(`${pkgPath}/dls`, 'README.md')
  );
};

export default series(
  async () => removeDist(),
  async () => copyTypes(), //写麻烦了，就先不改了，应该写成 copyReadme 的例子
  async () => buildComponent(),
  async () => removeTypes(),
  parallel(
    async () => copyReadme(),
    async () => buildStyle(),
  )
);
