(function () {
	'use strict';

	var HostnameFromUrlFilter = function () {
		return function (str) {
			var url = document.createElement('a');
			url.href = str;
			return url.hostname;
		};
	};

	app.filter('HostnameFromUrlFilter', HostnameFromUrlFilter);

}());
