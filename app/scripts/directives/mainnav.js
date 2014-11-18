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
        var self = this,
            ref = new Firebase("https://burning-inferno-228.firebaseio.com/").child("pages"),
            sync = $firebase(ref)

            self.currentPage = "/"
            self.setCurrentPage = function(path) {
              self.currentPage = path
            }
            self.isSetCurrentPage = function(path) {
              return self.currentPage === path
            }

        $scope.pages = sync.$asObject()

        $rootScope.$on("$routeChangeSuccess", function(evt, args) {
            self.setCurrentPage($location.path())
        })
      },
      controllerAs: "mainNav"
    }
  })
