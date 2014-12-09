"use strict";

/**
 * @ngdoc function
 * @name morrealeWebApp.controller:LoginctrlCtrl
 * @description
 * # LoginctrlCtrl
 * Controller of the morrealeWebApp
 */
angular.module("morrealeWebApp")
  .controller("LoginCtrl", ["$scope", "$location", "Auth", LoginCtrl]);

  function LoginCtrl($scope, $location, Auth) {
    $scope.validateLogin = function () {
      if($scope.login.$dirty && $scope.login.userEmail.$valid && $scope.login.userPassword.$valid ) {
        Auth.$authWithPassword({
          email: $scope.login.userEmail.$viewValue,
          password: $scope.login.userPassword.$viewValue
        }).then( function(authData) {
          console.log("Logged in as: ", authData.uid, authData)
          $location.path("/add")
        }).catch(function(error) {
          console.log("Authentication failed: ", error)
          $scope.login.error = {
            message: error.message
          }
        })
      }
    }

    $scope.createAccount = function() {
      console.log($scope.createNewUser)
      if($scope.createNewUser.createPassword.$viewValue != $scope.createNewUser.verifyPassword.$viewValue) {
        $scope.createNewUser.error = {
          message: "Password don't match"
        }
      }

      if($scope.createNewUser.$dirty &&
        $scope.createNewUser.createEmail.$valid &&
        $scope.createNewUser.createPassword.$valid &&
        $scope.createNewUser.verifyPassword.$valid) {
        Auth.$createUser($scope.createNewUser.createEmail.$viewValue, $scope.createNewUser.createPassword.$viewValue)
          .then(function() {
          return Auth.$authWithPassword({
            email: $scope.createNewUser.createEmail.$viewValue,
            password: $scope.createNewUser.createPassword.$viewValue
          })
        }).then( function(authData) {
          console.log("Logged in as: ", authData.uid, authData)
          $location.path("/add")
        }).catch(function(error) {
          console.log("Authentication failed: ", error)
          if(error.code === "INVALID_USER") {
            $scope.createNewUser.error = {
              message: error.message
            }
          }
        })
      }
    }
   }
