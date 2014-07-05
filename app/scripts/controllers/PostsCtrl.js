(function () {
	'use strict';
	/* global app:true */

	var PostsCtrl = function ($scope, PostFactory) {
		$scope.post = {url: 'http://', title: ''}; //initial values

		$scope.posts = PostFactory.all;


		$scope.submitPosts = function () {
			PostFactory.create($scope.post).then(function () {
				//this is a success promise callback when sucessfully persisted post in firebase, so let's reset the fields.
				//This is 3 way data binding. No need to update $scope.posts.
				$scope.post = {url: 'http://', title: ''};
			});
		}; //submit


		$scope.deletePost = function (postId) {
			PostFactory.delete(postId);
		};

	}; //ctrl



    //workaround so that we're still safe after JS minification for production.
    PostsCtrl.$inject = ['$scope', 'PostFactory'];

    //register controller with angular
	app.controller('PostsCtrl', PostsCtrl);

}());


