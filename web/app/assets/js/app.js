/*jslint strict: true */

var app = angular.module('materialism', [
  'app.constants',

  /*angular services*/
  'ngRoute',
  'ngAnimate',
  'ngSanitize',
  'ngPlaceholders',
  'ngTable',

  /*angular helpers*/
  'angular-loading-bar',

  'uiGmapgoogle-maps',
  'ui.select',

  /*libraries*/
  'gridshore.c3js.chart',
  'monospaced.elastic',     // resizable textarea
  'mgcrea.ngStrap',
  'jcs-autoValidate',
  'ngFileUpload',
  'textAngular',
  'fsm',                    // sticky header
  'smoothScroll',
  'LocalStorageModule',

  /*common modules*/
  'common.module',
  'data.module',

  /*app modules*/
  'bank.module',
  'places.module',

]);
