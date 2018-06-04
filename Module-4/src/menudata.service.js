(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService)
.constant('ApiBasePath', " https://davids-restaurant.herokuapp.com");

MenuDataService.$inject = ['$http', 'ApiBasePath'];
function MenuDataService($http, ApiBasePath) {
  var service = this;

  service.getAllCategories = function() {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/categories.json")
    })
    .catch(function () {
      console.log("Something went wrong")
    });
  };

  service.getItemsForCategory = function(categoryShortName) {
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json"),
      params: {
        category: categoryShortName
      }
    })
    .catch(function () {
      console.log("Something went wrong")
    });
    console.log('respose is ' + response)
  };
}

})();
