(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', " https://davids-restaurant.herokuapp.com");
// .directive('foundItems', foundItems);

MenuSearchService.$inject = ['MenuSearchService']
function NarrowItDownController(MenuSearchService) {
  var narrower = this;

  narrower.logMenuItems = function (searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function(response) {
      console.log(response.data);
    })
    .catch(function(error) {
      console.log("Error!");
    })
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  service.getMatchedMenuItems = function(searchTerm) {
    var response = $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    });
    // .then(function (result) {
    //   var foundItems = [];
    //   for (item in result) {
    //     if (item.name.include(searchTerm)){
    //       foundItems.push(item);
    //     };
    //   };
    //   return foundItems;
    // });

      return response;
  };

}

})();
