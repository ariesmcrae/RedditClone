(function() {

	'use strict';

	/**
	 * @ngdoc function
	 * @name redditCloneApp.controller:MainCtrl
	 * @description
	 * # MainCtrl
	 * Controller of the redditCloneApp
	 */

	var MainCtrl = function ($scope) {
		$scope.awesomeThings = ['HTML5 Boilerplate', 'AngularJS', 'Karma' ];
	};

	//workaround so that we're still safe after JS minification for production.
	MainCtrl.$inject = ['$scope'];

	//register controller with angular
	angular.module('redditCloneApp').controller('MainCtrl', MainCtrl);


}());

