import { defineConfig } from 'dumi';

export default defineConfig({
  outputPath: 'docs-dist',
  apiParser: {},
  plugins: ['@umijs/plugins/dist/tailwindcss'],
  tailwindcss: process.env.NODE_ENV === 'development' ? false : {},

  resolve: {
    // 配置入口文件路径，API 解析将从这里开始
    entryFile: './src/index.ts',
    atomDirs: [
      { type: 'component', dir: 'src' },
      { type: 'component', dir: 'src/component' },
      { type: 'hook', dir: 'src/hook' },
    ],
  },
  svgr: {},
  themeConfig: {
    name: '@jiang-liuer/teams_im_ui',
    // nav: [{ title: '组件', link: '/components' }],
    // sidebar: {
    //   '/components': [
    //     {
    //       title: '基础',
    //       children: [
    //         { title: 'Icon', link: '/components/Icon' },
    //         { title: 'Icons', link: '/components/Icons' },
    //         { title: 'TextItem', link: '/components/TextItem' },
    //       ],
    //     },
    //   ],
    // },
  },
  devtool: process.env.NODE_ENV === 'development' ? 'source-map' : false,

  extraPostCSSPlugins: [require('tailwindcss'), require('autoprefixer')],
});
