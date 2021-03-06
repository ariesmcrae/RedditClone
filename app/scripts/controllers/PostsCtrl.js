(function () {

	'use strict';

	var PostsCtrl = function ($scope, PostFactory) {
		$scope.posts = PostFactory.all;

		$scope.post = {url: 'http://', 'title': ''};

		$scope.deletePost = function (postId) {
			PostFactory.delete(postId);
		};

	};

	PostsCtrl.$inject = ['$scope', 'PostFactory'];

	app.controller('PostsCtrl', PostsCtrl);

}());

