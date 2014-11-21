"use strict"

/**
 * @ngdoc function
 * @name morrealeWebApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the morrealeWebApp
 */
angular.module("morrealeWebApp")
  .controller("AboutCtrl", ["$scope", "DataBase", AboutCtrl])

function AboutCtrl($scope, DataBase) {
  var content = DataBase("about");

  $scope.node = content.$asObject();
}
