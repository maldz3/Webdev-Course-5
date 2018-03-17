(function(){
'use strict';

angular.module('NarrowItDownApp', [])
.controller('NarrowItDownController', NarrowItDownController)
.service('MenuSearchService', MenuSearchService)
.constant('ApiBasePath', " https://davids-restaurant.herokuapp.com")
.directive('foundItems', FoundItemsDirective);

function FoundItemsDirective() {
  var ddo = {
    templateUrl: 'foundItems.html'
  };

  return ddo;
}

NarrowItDownController.$inject = ['MenuSearchService']
function NarrowItDownController(MenuSearchService) {
  var narrower = this;

  narrower.found = function (searchTerm) {
    var promise = MenuSearchService.getMatchedMenuItems(searchTerm);

    promise.then(function(response) {
      narrower.items = response;
    })
    .catch(function(error) {
      console.log("Error!");
    })
  };

  narrower.removeItem = function (itemIndex) {
    MenuSearchService.removeItem(itemIndex);
  };
}

MenuSearchService.$inject = ['$http', 'ApiBasePath'];
function MenuSearchService($http, ApiBasePath) {
  var service = this;

  var foundItems = [];

  service.getMatchedMenuItems = function(searchTerm) {
    foundItems = [];

    return $http({
      method: "GET",
      url: (ApiBasePath + "/menu_items.json")
    })
    .then(function (result) {
      var items = result.data.menu_items;

      for (var i = 0; i < items.length; i++) {
        var description = JSON.stringify(items[i].description);

        if (searchTerm == "" || searchTerm == null) {
          return foundItems;
        };
        
        if (description.toLowerCase().includes(searchTerm.toLowerCase())){
          foundItems.push(items[i]);
        };
      };

      return foundItems;
    });
  };

  service.removeItem = function (itemIndex) {
    foundItems.splice(itemIndex, 1);
  };

}

})();
