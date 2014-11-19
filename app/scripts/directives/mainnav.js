'use strict'

/**
 * @ngdoc directive
 * @name morrealeWebApp.directive:mainNav
 * @description
 * # mainNav
 */
angular.module('morrealeWebApp')
  .directive('mainNav', function () {
    return {
      templateUrl: 'views/main-nav.html',
      restrict: 'E',
      controller: function($scope, $rootScope, $location, $firebase) {
            var ref = new Firebase("https://burning-inferno-228.firebaseio.com/").child("pages"),
            sync = $firebase(ref)

            $scope.currentPage = "/"
            $scope.setCurrentPage = function(path) {
              $scope.currentPage = path
            }
            $scope.isSetCurrentPage = function(path) {
              return $scope.currentPage === path
            }

        $scope.pages = sync.$asObject()

        $rootScope.$on("$routeChangeSuccess", function(evt, args) {
            $scope.setCurrentPage($location.path())
        })
      },
      controllerAs: "mainNav"
    }
  })
