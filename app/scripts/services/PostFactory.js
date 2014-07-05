(function () {
	'use strict';

	var PostFactory = function ($resource) {
		return $resource('https://crackling-fire-8289.firebaseio.com/posts/:id.json');
	};

    //workaround so that we're still safe after JS minification for production.
    PostFactory.$inject = ['$resource'];

    //register controller with angular
	app.factory('PostFactory', PostFactory);

}());
