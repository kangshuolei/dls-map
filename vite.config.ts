/*
 * @Author: Kang
 * @Date: 2024-08-09 09:45:00
 * @Last Modified by: Kang
 * @LastEditTime: 2024-12-20 15:28:13
 */
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts';
import DefineOptions from 'unplugin-vue-define-options/vite';
export default defineConfig({
  build: {
    //压缩
    minify: true,
    rollupOptions: {
      //忽略打包vue文件
      external: ['vue', /\.less/],
      input: ['./packages/index.ts'],
      output: [
        {
          //打包格式
          format: 'es',
          //打包后文件名
          entryFileNames: '[name].mjs',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: './dls/es',
        },
        {
          //打包格式
          format: 'cjs',
          //打包后文件名
          entryFileNames: '[name].js',
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: 'named',
          //配置打包根目录
          dir: './dls/lib',
        },
      ],
      // plugins: [
      //   copy({
      //     targets: [
      //       { src: 'types/**/*.d.ts', dest: './dls/es' },
      //       { src: 'types/**/*.d.ts', dest: './dls/lib' },
      //     ],
      //     verbose: true,
      //   }),
      //   // 其他插件
      // ],
    },
    lib: {
      entry: './packages/index.ts',
      // name: 'dls-map',
    },
  },
  plugins: [
    vue(),
    dts({
      // skipDiagnostics: false,
      // logDiagnostics: true,
      // copyDtsFiles: true,
      include: ['./packages'],
      outputDir: ['./dls/es', './dls/lib'],
      // outputDir: ['../../dls/es/src', '../../dls/lib/src'],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsConfigFilePath: './tsconfig.json',
    }),
    DefineOptions(),
    {
      name: 'style',
      generateBundle(config, bundle) {
        //这里可以获取打包后的文件目录以及代码code
        const keys = Object.keys(bundle);
        console.log('keys', keys);

        for (const key of keys) {
          const bundler: any = bundle[key as any];
          //rollup内置方法,将所有输出文件code中的.less换成.css,因为我们当时没有打包less文件

          this.emitFile({
            type: 'asset',
            fileName: key, //文件名名不变
            source: bundler.code.replace(/\.less/g, '.css'),
          });
        }
      },
    },
  ],
});
