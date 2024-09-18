/*
 * @Author: Kang
 * @Date: 2024-09-06 09:02:45
 * @Last Modified by: Kang
 * @LastEditTime: 2024-09-18 15:17:07
 */
import path from 'path';
import fs from 'fs';

import type MarkdownIt from 'markdown-it';
// @ts-ignore
import type Token from 'markdown-it/lib/token';
// @ts-ignore
import type Renderer from 'markdown-it/lib/renderer';

interface ContainerOpts {
  marker?: string | undefined;
  validate?(params: string): boolean;
  render?(
    tokens: Token[],
    index: number,
    options: any,
    env: any,
    self: Renderer
  ): string;
}
function createDemoContainer(md: MarkdownIt): ContainerOpts {
  return {
    validate(params) {
      return !!params.trim().match(/^demo\s*(.*)$/);
    },

    render(tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : '';
        const sourceFileToken = tokens[idx + 2];
        let source = '';
        const sourceFile = sourceFileToken.children?.[0].content ?? '';

        // 只在 SSR 环境读取文件-更改了
        if (typeof window === 'undefined') {
          if (sourceFileToken.type === 'inline') {
            source = fs.readFileSync(
              path.resolve('', 'examples', `${sourceFile}.vue`),
              'utf-8'
            );
          }
          if (!source) throw new Error(`Incorrect source file: ${sourceFile}`);
        }

        // 确保在客户端不会执行 fs 相关代码
        return `<Demo source="${
          source
            ? encodeURIComponent(md.render(`\`\`\` vue\n${source}\`\`\``))
            : ''
        }" path="${sourceFile}" raw-source="${source ? encodeURIComponent(source) : ''}" description="${encodeURIComponent(md.render(description))}">
  <template #source><kk-${sourceFile.replaceAll('/', '-')}/></template>`;
      } else {
        return '</Demo>\n';
      }
    },
  };
}
export default createDemoContainer;
