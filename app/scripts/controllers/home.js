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
    var page = Page("home")

    $scope.node = page.$asObject()

    $scope.addContent = function() {
      var content = $scope.content

      console.log(content)

      page.$update(content)

      $scope.content = ""
    }

    /*$scope.items = [
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
    ]

    $scope.title = "Hello world"*/
}