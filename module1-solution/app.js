(function(){
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	
	function LunchCheckController($scope){
		$scope.str = "";
		$scope.CheckCountWord = function(){
			console.log("CheckCountWord запускается");
		
		var arr = $scope.str.split(', ');
		console.log(arr);
    console.log(arr.length);
		
		if(arr.length == 0){
			$scope.message = "Please enter data first!";
		}else	if(arr.length <= 3 && arr.length > 0){
			$scope.message = "Enjoy!";
		}else {
			$scope.message = "Too much!";
		
		}
		}
		


	}


})();
