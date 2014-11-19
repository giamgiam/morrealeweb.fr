'use strict'

/**
 * @ngdoc function
 * @name morrealeWebApp.controller:AboutController
 * @description
 * # AboutController
 * Controller of the morrealeWebApp
 */
angular.module('morrealeWebApp')
  .controller('AboutController', ["$scope", "DataBase", AboutController])

function AboutController($scope, DataBase) {
  var content = DataBase("about")

  $scope.node = content.$asObject()
}