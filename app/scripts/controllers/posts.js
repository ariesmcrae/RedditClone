(function () {
	'use strict';

	var PostsCtrl = function($scope) {
		$scope.post = {url: 'http://', title: ''};

		$scope.posts = [];

		$scope.submitPosts = function() {
			$scope.posts.push($scope.post);
			$scope.post = {url: 'http://', title: ''}; //reset fields after posting.
		};

	}; //ctrl


    //workaround so that we're still safe after JS minification for production.
    PostsCtrl.$inject = ['$scope'];

    //register controller with angular
	app.controller('PostsCtrl', PostsCtrl);


}());


