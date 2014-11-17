'use strict';

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
      controller: function($scope, $rootScope, $location, $http) {
        var self = this
            self.currentPage = "/"
            self.setCurrentPage = function(path) {
              self.currentPage = path
            }
            self.isSetCurrentPage = function(path) {
              return self.currentPage === path;
            }

        $http.get("/data/sitemap.json")
              .success(function(data, status, headers, config){
                  $scope.pages = data.pages;
              })
              .error(function(data, status, headers, config){
                console.error("Data not found!!!")
              })

        $rootScope.$on("$routeChangeSuccess", function(evt, args) {
            self.setCurrentPage($location.path())
        })
      },
      controllerAs: "mainNav"
    };
  });
