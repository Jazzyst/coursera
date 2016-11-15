(function(){
  'use strictr';
  angular.module('LunchCheck',[])
  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];
  function CountItem($scope){
  
    var item = "";
    if(item <= 3){
      $scope.message = "Enjoy!";
    }else if(item = 0){
      $scope.message = "Please enter data first!";
    }else{
      $scope.message = "Too much!";
    }


  }


})();
