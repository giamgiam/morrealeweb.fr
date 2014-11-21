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
  .run(["$rootScope", "$location", function ($rootScope, $location) {
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
        controller: "LoginCtrl"
      })
      .when("/admin/add", {
        templateUrl: "views/admin/content.html",
        controller: "AdminContentCtrl",
        resolve: {
          "currentAuth": ["Auth", function(Auth) {
            return Auth.$waitForAuth();
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
  .factory("DataBase", [ "GLOBAL", "$firebase", function(GLOBAL, $firebase) {
      return function(page) {
        var ref = new Firebase(GLOBAL.firebaseUrl).child(page);

        return $firebase(ref);
      }
    }
  ])
  .factory("Auth", ["GLOBAL", "$firebaseAuth", function (GLOBAL, $firebaseAuth) {
      var ref = new Firebase(GLOBAL.firebaseUrl);
      return $firebaseAuth(ref)
    }
  ])
  .constant("GLOBAL", {
    firebaseUrl : "https://burning-inferno-228.firebaseio.com/"
  });
