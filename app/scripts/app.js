/**
 * @ngdoc overview
 * @name redditCloneApp
 * @description
 * # redditCloneApp
 *
 * Main module of the application.
 */

/* global app:true */
var app = angular.module('redditCloneApp', ['ngCookies', 'ngResource', 'ngSanitize', 'ngRoute', 'firebase']);

app.constant('FIREBASE_URL', 'https://crackling-fire-8289.firebaseio.com/');

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



