import DefaultTheme from 'vitepress/theme';
// @ts-ignore
import Playground from '../../../../playground/src/pages/index.vue';
// @ts-ignore
import CodeDemo from '../../components/CodeDemo.vue';

import 'virtual:windi.css';
import './index.scss';

// eslint-disable-next-line import/no-relative-packages
import '../../../../src/styles/main.scss'; // 不要修改或删除

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component('Playground', Playground);
    app.component('CodeDemo', CodeDemo);
  }
}