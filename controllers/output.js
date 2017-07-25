var app = angular.module('richReddit');

app.controller('outputCtrl', function($scope, postService){
		$scope.redditPosts = postService.getJSON();
		


});