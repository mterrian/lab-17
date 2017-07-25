var app = angular.module('richReddit');

app.service('postService', function($http, $location, $route){
		var posts = [];

		return {
			setJSON:setJSON,
			getJSON:getJSON
		}

		function setJSON(subReddit) {
			$http({
				method:'GET',
				url: 'https://www.reddit.com/r/' + subReddit + '.json'
			}).then(function successfulCallback(response){
				posts = response.data.data.children;
				console.log(posts)
				$route.reload();
				$location.path('/output')

			});
		}
		function getJSON() {
			
			return posts;

		}

});