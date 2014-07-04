/**
 * @ngdoc overview
 * @name redditCloneApp
 * @description
 * # redditCloneApp
 *
 * Main module of the application.
 */

'use strict';
/* global app:true */

var app = angular.module('redditCloneApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute']);

app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/posts.html',
			controller: 'PostsCtrl'
		})

		.otherwise({
			redirectTo: '/'
		});
});

