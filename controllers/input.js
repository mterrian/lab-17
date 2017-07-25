var app = angular.module('richReddit');

app.controller('inputCtrl', function($scope, $location, postService){
		$scope.getReddit = function(subReddit) {
		postService.setJSON(subReddit)			
		}
});