(function () {
	'use strict';
	/* global app:true */

	var PostsCtrl = function ($scope, PostFactory) {
		$scope.post = {url: 'http://', title: ''};
		$scope.posts = PostFactory.get();


		$scope.submitPosts = function () {
			PostFactory.save($scope.post, function (postId) {
				// PostFactory.save(post) will save to firebase, but nothing happens when we refresh screen,
				// but PostFactory.save(post, function...) is a success callback with postId - the ID of the saved post,
				// enabling us to display saved data without refreshing the screen.
				// We will no longer identify objects by their ng-repeat $index, as Firebase gives each object a unique ID (postId)
				// for us to easily update & delete it from the server.
				$scope.posts[postId.name] = $scope.post;
				$scope.post = {url: 'http://', title: ''}; //reset fields after posting.
			});
		}; //submit


		$scope.deletePost = function (postId) {
			PostFactory.delete({id: postId}, function () {
				delete $scope.posts[postId];
			});
		}; //deletePost

	}; //ctrl



    //workaround so that we're still safe after JS minification for production.
    PostsCtrl.$inject = ['$scope', 'PostFactory'];

    //register controller with angular
	app.controller('PostsCtrl', PostsCtrl);

}());


