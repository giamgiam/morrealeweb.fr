"use strict"

/**
 * @ngdoc function
 * @name morrealeWebApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the morrealeWebApp
 */
angular.module("morrealeWebApp")
  .controller("HomeCtrl", ["$scope", "DataBase", HomeCtrl]);

function HomeCtrl($scope, DataBase) {
    var page = DataBase("home");

    $scope.node = page.$asObject();
}
