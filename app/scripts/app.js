/**
 * @ngdoc overview
 * @name redditCloneApp
 * @description
 * # redditCloneApp
 *
 * Main module of the application.
 */

/* global app:true */
var app = angular.module('redditCloneApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute']);

app.config(function ($routeProvider) {
	'use strict';
	$routeProvider
		.when('/', {
			templateUrl: 'views/posts.html',
			controller: 'PostsCtrl'
		})

		.otherwise({
			redirectTo: '/'
		});
});

