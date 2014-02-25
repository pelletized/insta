var insta = angular.module('insta', []);

insta.config(['$httpProvider', function($httpProvider) {
	$httpProvider.defaults.withCredentials = true;
	$httpProvider.defaults.useXDomain = true;
	delete $httpProvider.defaults.headers.common['X-Requested-With'];
	}
]);

function AppController($scope, $http) {
	'use strict';	
	
	$scope.search = function() {
		$http.jsonp('https://api.instagram.com/v1/tags/' + $scope.searchKeyword + '/media/recent?client_id=1ff71fd8d0ef4b3ea058f93ee4852154&callback=JSON_CALLBACK').success(function (data) {						
				$scope.photos = data.data;	
			//$scope.tags = data.data.tags;
			
			//console.log($scope.tags);
		});	
	};
	

}