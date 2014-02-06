var insta = angular.module('insta', []);

function AppController($scope, $http) {
	'use strict';	
	
	$scope.search = function() {
		$http.get('js/ig.json').success(function (data) {		
			$scope.photos = data.data;	
			//$scope.tags = data.data.tags;
			
			//console.log($scope.tags);
		});	
	};
	

}