import fs from 'fs';
import path from 'path';
// import { docRoot } from '@element-plus/build-utils'
const docRoot = '';
export const languages = fs.readdirSync(path.resolve(__dirname, ''));

export const ensureLang = (lang: string) => `/${lang}`;

export const getLang = (id: string) =>
  path.relative(docRoot, id).split(path.sep)[0];
