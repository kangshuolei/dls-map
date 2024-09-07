import VPDemo from './components/vp-demo.vue';

import type { Component } from 'vue';
import './styles/css-vars.scss';
import './styles/app.scss';

export const globals: [string, Component][] = [['Demo', VPDemo]];
