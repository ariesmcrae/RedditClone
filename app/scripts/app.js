/* global app:true */

var app = angular.module('redditCloneApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'firebase']);

(function () {
	'use strict';

	var AppConfig = function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/posts.html',
				controller: 'PostsCtrl'
			})

			.when('/posts/:postId', {
				templateUrl: 'views/postView.html',
				controller: 'PostViewCtrl'
			})

			.otherwise({
				redirectTo: '/'
			});
	};

	AppConfig.$inject = ['$routeProvider'];

	app.config(AppConfig);

	app.constant('FIREBASE_URL', 'https://crackling-fire-8289.firebaseio.com/');

}());


