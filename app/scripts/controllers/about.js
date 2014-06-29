'use strict';

/**
 * @ngdoc function
 * @name redditCloneApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the redditCloneApp
 */
angular.module('redditCloneApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
