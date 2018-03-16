(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', " https://davids-restaurant.herokuapp.com");
// .directive('foundItems', FoundItemsDirective);

// function FoundItemsDirective() {
//   var ddo = {
//
//   };
//
//   return ddo;
// }

MenuSearchService.$inject = ['MenuSearchService']
function NarrowItDownController(MenuSearchService) {
  var narrower = this;

  narrower.found = function (searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function(response) {
      narrower.items = response;
      // console.log(narrower.items);
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
    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })
    .then(function (result) {
      var items = result.data.menu_items;
      var foundItems = [];
      for (var i = 0; i < items.length; i++) {
        var description = JSON.stringify(items[i].description);
        if (description.includes(searchTerm)){
          foundItems.push(items[i]);
        };

      };

      return foundItems;
    });

  };

}

})();
