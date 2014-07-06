(function () {

	'use strict';

	var PostViewCtrl = function ($scope, $routeParams, PostFactory) {
		$scope.post = PostFactory.find($routeParams.postId);
	};

	PostViewCtrl.$inject = ['$scope', '$routeParams', 'PostFactory'];

	app.controller('PostViewCtrl', PostViewCtrl);

}());
