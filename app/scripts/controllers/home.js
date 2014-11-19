'use strict'

/**
 * @ngdoc function
 * @name morrealeWebApp.controller:HomeController
 * @description
 * # HomeController
 * Controller of the morrealeWebApp
 */
angular.module('morrealeWebApp')
  .controller('HomeController', ["$scope", "Page", HomeController])

function HomeController($scope, Page) {
    var page = Page("home"),
        items = Page("home/items")

    $scope.node = page.$asObject()
    $scope.items = items

    $scope.addContent = function() {
      var content = $scope.content

      $scope.items.$push(content)
      $scope.content = ""
    }

    $scope.removeContent = function(id) {
      $scope.items.$remove(id)
    }
}