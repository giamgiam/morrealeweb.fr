"use strict"

/**
 * @ngdoc directive
 * @name morrealeWebApp.directive:mainNav
 * @description
 * # mainNav
 */
angular.module("morrealeWebApp")
  .directive("mainNav", function () {
    return {
      templateUrl: "views/directives/main-nav.html",
      restrict: "E",
      controller: function($scope, $rootScope, $location, DataBase, Auth, AuthScopeUtil) {
        var nav = DataBase("pages");

        $scope.pages = nav.$asObject();
        $scope.currentPage = "/";

        Auth.$onAuth(function(authData) {
          if(authData) {
            AuthScopeUtil($scope);
          } else {
            AuthScopeUtil($scope);
            $location.path("/login");
          }
        })

        $scope.setCurrentPage = function(path) {
          $scope.currentPage = path;
        }
        $scope.isSetCurrentPage = function(path) {
          return $scope.currentPage === path;
        }

        $rootScope.$on("$routeChangeSuccess", function() {
            $scope.setCurrentPage($location.path());
        })
      },
      controllerAs: "mainNav"
    }
  });
