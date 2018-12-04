/*
* @desc: pagination-controller to fetch data
* @author: nilena Alexander
*/
(function(){
	'user strict'
	console.log("control");
	angular
	.module('paginationApp')
	.controller('pageCntrl', pagecontroller);

	pagecontroller.inject=['$scope','$http'];

	function pagecontroller($scope, $http){

		// $scope.dataList=[]; // declare an empty array
		$http({
  			method: 'GET',
  			url: 'assets/json/data.json'
		}).then(function successCallback(response) { 
				$scope.dataList=response.data.results;
			// $scope.dataList.length = 42;

 		 }, function errorCallback(response) {
  			  $scope.message='error';
  		});
	}
	
})();