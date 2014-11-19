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

    $scope.addContent = function() {
      var content = $scope.content

      items.$push(content)
      $scope.content = ""
    }

    $scope.removeContent = function(id) {
      console.log(id)
      // items.$remove(item)
    }
}