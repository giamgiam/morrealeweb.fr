"use strict";

/**
 * @ngdoc function
 * @name morrealeWebApp.controller:LoginctrlCtrl
 * @description
 * # LoginctrlCtrl
 * Controller of the morrealeWebApp
 */
angular.module("morrealeWebApp")
  .controller("LoginCtrl", ["$scope", "Auth", LoginCtrl]);

  function LoginCtrl ( $scope, Auth ) {
    // $scope.auth = Auth;
    // $scope.user = $scope.auth.$getAuth();
    console.log(Auth)
    // Auth.

    $scope.error = {
      display: false,
      message: null
    }

    $scope.validateLogin = function () {
      var email = $scope.email,
          password = $scope.password

        if(email != undefined && email.length ) {
          $scope.emailEmpty = false
        } else {
          $scope.emailEmpty = true
        }

        if(password != undefined && password.length ) {
          $scope.passwordEmpty = false
        } else {
          $scope.passwordEmpty = true
        }

        if(email != undefined && email.length &&
          password != undefined && password.length) {
            Auth.$authWithPassword({
              email: email,
              password: password
            }).then( function(authData) {
              console.log("Logged in as: ", authData.uid, authData)
            }).catch(function(error) {
              console.log("Authentication failed: ", error)
              if(error.code === "INVALID_USER") {
                $scope.error = {
                  display: true,
                  message: error.message
                }
              }
            })
          }
    };
  }
