'use strict';

/**
 * @ngdoc directive
 * @name morrealeWebApp.directive:commentSection
 * @description
 * # commentSection
 */
angular.module('morrealeWebApp')
  .directive('commentSection', function () {
    return {
      templateUrl: 'views/comment-section.html',
      restrict: 'E',
      controller: function($scope, DataBase, $location) {
        var  comments = DataBase($location.path()+"/comments")

        $scope.comments = comments
        $scope.addComment = function() {
          console.log(newComment)
          var newComment = $scope.newComment

          $scope.comments.$push(newComment)
          $scope.newComment = ""
        }

        $scope.removeComment = function(id) {
          $scope.comments.$remove(id)
        }
      }
    };
  });
