(function(){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.checkCount = function () {
    if (!$scope.dishes || $scope.dishes.length == 0){
      var count = 0;
    } else {
    count = ($scope.dishes.match(/,/g) || []).length
    count += 1
    }

    $scope.getMessage = function (){
      if (count > 3) {
        $scope.color = 'green';
        return "Too much!";
      }
      if (count == 0) {
        $scope.color = 'red';
        return "Please enter data first";
      } else {
        $scope.color = 'green';
        return "Enjoy!";
      }
    };

  };

}

})();
