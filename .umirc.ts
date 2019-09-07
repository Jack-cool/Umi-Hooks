/*
 * @Description:
 * @version:
 * @Author: fengshuan
 * @Date: 2019-09-07 10:33:22
 * @LastEditors: fengshuan
 * @LastEditTime: 2019-09-07 15:10:59
 */
import { IConfig } from 'umi-types';

// ref: https://umijs.org/config/
const config: IConfig = {
  treeShaking: true,
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      'umi-plugin-react',
      {
        antd: true,
        dva: true,
        dynamicImport: { webpackChunkName: true },
        title: 'umi_hooks',
        dll: true,

        routes: {
          exclude: [
            /models\//,
            /services\//,
            /model\.(t|j)sx?$/,
            /service\.(t|j)sx?$/,
            /components\//,
          ],
        },
      },
    ],
  ],
  routes: [
    {
      path: '/',
      component: '../layouts/index.tsx',
      routes: [
        {
          path: '/',
          name: '首页',
          icon: 'home',
          component: './index.tsx',
        },
        {
          path: '/user',
          name: '用户',
          icon: 'user',
          component: './user',
        },
        {
          path: '/form',
          name: '表单',
          icon: 'shop',
          routes: [
            {
              name: '基础表单',
              path: '/form/basicForm',
              icon: 'shop',
              component: './form/basicForm',
            },
          ],
        },
      ],
    },
  ],
};

export default config;
