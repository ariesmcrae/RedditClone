(function () {
	'use strict';

	var PostFactory = function ($firebase, FIREBASE_URL) {
		//'posts' is the root object in firebase db that we want to open connection to.
		var posts = $firebase(new Firebase(FIREBASE_URL + 'posts'));

		return {
			//see AngularFire api https://www.firebase.com/docs/angular/reference.html
			all: posts,

			create: function (post) {
				return posts.$add(post);
			},

			find: function (postId) {
				return posts.$child(postId);
			},

			delete: function (postId) {
				return posts.$remove(postId);
			}
		};
	};


    //workaround so that we're still safe after JS minification for production.
    PostFactory.$inject = ['$firebase', 'FIREBASE_URL'];

    //register controller with angular
	app.factory('PostFactory', PostFactory);

}());
