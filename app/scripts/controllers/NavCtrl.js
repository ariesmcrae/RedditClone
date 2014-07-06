(function () {
	'use strict';

	var NavCtrl = function ($scope, $location, PostFactory) {
		$scope.post = {url: 'http://', 'title': ''};

		$scope.submitPost = function () {
			PostFactory.create($scope.post).then(function (ref) {
				$location.path('/posts/' + ref.name());
				$scope.post = {url: 'http://', 'title': ''};
			});
		};


	}; //NavCtrl

	NavCtrl.$inject = ['$scope', '$location', 'PostFactory'];

	app.controller('NavCtrl', NavCtrl);

}());
