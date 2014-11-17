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
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController'
      })
      .when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutController"
      })
      .otherwise({
        templateUrl: 'views/404.html'
      });

    $locationProvider.html5Mode(true)
  });