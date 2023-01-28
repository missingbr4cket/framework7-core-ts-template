import Framework7, { getDevice } from 'framework7/bundle';
import defaultRoutes from './router';
import App from '../app.f7';
import cordovaApp from '../js/cordova-app';
import 'framework7/css/bundle';
import '../css/icons.css';
import '../css/app.css';
import $ from 'dom7';

const $$ = $;
const device = getDevice();
const parameters = {
  name: 'App Test', // App name
  theme: 'auto', // Automatic theme detection
  el: '#app', // App root element
  component: App, // App main component
  id: 'it.eng.iride.f7.test.app', // App bundle ID
  // App routes
  routes: defaultRoutes,


  // Input settings
  input: {
    scrollIntoViewOnFocus: device.cordova && !device.electron,
    scrollIntoViewCentered: device.cordova && !device.electron,
  },
  // Cordova Statusbar settings
  statusbar: {
    iosOverlaysWebView: true,
    androidOverlaysWebView: false,
  },
  on: {
    init: function () {
      var f7 = this;
      if (device.cordova) {
        // Init cordova APIs (see cordova-app.js)
        cordovaApp.init(f7);
      }
    },
  },
}

const app = new Framework7(parameters);