(function(){
	'use strict';
	angular.module('LunchCheck',[]);
	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];
	
	function LunchCheckController($scope){

		function CheckCountWord($scope){
			var str ="";
		var re = /\s*,\s*/
		var splits = str.split(re);

		$scope.item = "";
		if(item <= 3){
			$scope.message = "Enjoy!";
			item++;
		}else if(item = 0){
			$scope.message = "Please enter data first!";
		}else{
			$scope.message = "Too much!";
		}
		}
		


	}


})();
