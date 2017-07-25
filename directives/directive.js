var app = angular.module('richReddit');



 app.directive('redditPost', function() {

 	return {
  	  replace: false,
  	  restrict: 'E',
   	  templateUrl: 'partials/reddit.html'
	 }

});

app.directive('searchBar', function(){

	return{
		replace: false,
		restrict: 'E',
		templateUrl: 'partials/input.html'
	}
});

app.directive('redditResults', function(){
	return{
		replace: true,
		restrict: 'E',
		templateUrl: 'partials/output.html'
	}
})