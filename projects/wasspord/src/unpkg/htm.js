import htm from 'https://unpkg.com/htm@2.2.1/dist/htm.module.js?module';
import { React } from './react.js';

export const html = htm.bind(React.createElement);
