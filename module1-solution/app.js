(function(){
	'use strict';

	angular.module('LunchCheck', [])
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	
	function LunchCheckController($scope){
		$scope.str;
		$scope.CheckCountWord = function(){
			console.log("CheckCountWord запускается");
		
		var arr = $scope.str.split(', ');
		var i = 0;
		if(arr.length < 3){
			i++;
			$scope.message = "Enjoy!";
			
		}else if(arr.length > 3){
			$scope.message = "Too much!";
		}else if(arr.length = NaN){
			$scope.message = "Please enter data first!";
		}
		}
		


	}


})();
