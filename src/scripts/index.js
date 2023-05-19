import 'regenerator-runtime';
// import 'jquery';

import '../styles/style.scss';
import '../styles/responsive.scss';
import App from './views/app';
import swRegister from './utils/sw-register';

import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

import './views/components/skip-content';
import './views/components/custom-footer';
import './views/components/navbar';

const app = new App({
  button: document.querySelector('.header-menu'),
  drawer: document.querySelector('nav'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
