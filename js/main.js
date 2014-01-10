var insta = angular.module('insta', []);

function AppController($scope, $http) {
	'use strict';
	
	$http.get('js/ig.json').success(function (data) {		
		$scope.photos = data.data;	
		//$scope.tags = $scope.photos.tags;
	  });
	
	
	

}