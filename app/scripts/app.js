"use strict";

/**
 * @ngdoc overview
 * @name morrealeWebApp
 * @description
 * # morrealeWebApp
 *
 * Main module of the application.
 */
angular
  .module("morrealeWebApp", [
    "firebase",
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch"
  ])
  .run(["$rootScope", "$location", "AuthScopeUtil", function ($rootScope, $location, AuthScopeUtil) {
      $rootScope.$on("$routeChangeError", function (event, next, previous, error) {
        if(error === "AUTH_REQUIRED")
          $location.path("/login");
      })
    }
  ])
  .config(function ( $routeProvider, $locationProvider ) {
    $routeProvider
      .when("/", {
        templateUrl: "views/pages/home.html",
        controller: "HomeCtrl"
      })
      .when("/about", {
        templateUrl: "views/pages/about.html",
        controller: "AboutCtrl"
      })
      .when("/login", {
        templateUrl: "views/pages/login.html",
        controller: "LoginCtrl",
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$waitForAuth();
          }]
        }
      })
      .when("/add", {
        templateUrl: "views/admin/content.html",
        controller: "AdminContentCtrl",
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$requireAuth();
          }]
        }
      })
      // Nodes Indexs
      // .when("/pages", {
      //   templateUrl: "views/pages/pages-list.html"
      // })
      // Nodes
      // .when("/page/:id", {
      //   templateUrl: "views/pages/basic-page.html",
      //   controller: "BasicPageCtrl"
      // })
      .otherwise({
        templateUrl: "views/404.html"
      });

    $locationProvider.html5Mode(true);
  })
  .factory("DataBase", [ "FIREBASE_URL", "$firebase", function(FIREBASE_URL, $firebase) {
      return function(page) {
        var ref = new Firebase(FIREBASE_URL).child(page);

        return $firebase(ref);
      }
    }
  ])
  .factory("Auth", ["FIREBASE_URL", "$firebaseAuth", function (FIREBASE_URL, $firebaseAuth) {
      var ref = new Firebase(FIREBASE_URL);
      return $firebaseAuth(ref)
    }
  ])
  .factory("AuthScopeUtil", ["Auth", "$location", function(Auth, $location) {
      return function($scope) {
        $scope.auth = Auth;
        $scope.authData = $scope.auth.$getAuth();
        $scope.user = ($scope.authData) ? $scope.authData.uid : "";

        $scope.unauth = function() {
          return $scope.auth.$unauth()
        };
      }
    }
  ])
  .constant("FIREBASE_URL", "https://burning-inferno-228.firebaseio.com/");
