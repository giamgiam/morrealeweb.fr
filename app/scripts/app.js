'use strict';

/**
 * @ngdoc overview
 * @name morrealeWebApp
 * @description
 * # morrealeWebApp
 *
 * Main module of the application.
 */
angular
  .module('morrealeWebApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '404.html'
      });
  });
