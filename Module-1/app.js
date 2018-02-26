(function(){
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {

  $scope.checkCount = function () {
    if (!$scope.dishes || $scope.dishes.length == 0){
      $scope.dishes = "Please enter data first";
      var count = 0;
    } else {
    count = ($scope.dishes.match(/,/g) || []).length
    count += 1
    }

    $scope.getMessage = function (){
      if (count > 3) {
        return "Too much!";
      } if ($scope.dishes == "Please enter data first" || count == 0) {
        return "";
      } else {
        return "Enjoy!";
      }
    };

  };

}

})();
