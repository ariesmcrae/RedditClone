'use strict';

/**
 * @ngdoc function
 * @name redditCloneApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the redditCloneApp
 */
angular.module('redditCloneApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
