'use strict'

/**
 * @ngdoc function
 * @name morrealeWebApp.controller:HomeController
 * @description
 * # HomeController
 * Controller of the morrealeWebApp
 */
angular.module('morrealeWebApp')
  .controller('HomeController', ["$scope", "DataBase", HomeController])

function HomeController($scope, DataBase) {
    var page = DataBase("home")

    $scope.node = page.$asObject()
}