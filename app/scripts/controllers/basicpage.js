"use strict";

/**
 * @ngdoc function
 * @name morrealeWebApp.controller:BasicpageCtrl
 * @description
 * # BasicpageCtrl
 * Controller of the morrealeWebApp
 */
angular.module("morrealeWebApp")
  .controller("BasicPageCtrl", function ($scope) {
    $scope.awesomeThings = [
      "HTML5 Boilerplate",
      "AngularJS",
      "Karma"
    ];
  });
