'use strict';

/**
 * @ngdoc function
 * @name morrealeWebApp.controller:AboutController
 * @description
 * # AboutController
 * Controller of the morrealeWebApp
 */
angular.module('morrealeWebApp')
  .controller('AboutController', ["$scope", AboutController]);

function AboutController($scope) {

    $scope.items = [
      {
        name: "HTML5 Boilerplate",
        description: "HTML5 Boilerplate is a professional front-end template for building fast, robust, and adaptable web apps or sites."
      },
      {
        name: "Angular",
        description: "AngularJS is a toolset for building the framework most suited to your application development."
      },
      {
        name: "Karma",
        description: "Spectacular Test Runner for JavaScript."
      }
    ];

    $scope.title = "Hello world"
}