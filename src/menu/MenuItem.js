(function () {
  'use strict';

  angular.module('datto-menu').component('menuItem', {
    templateUrl: 'menuItem.html',
    controller: function () {
      console.log(this.item);
    },
    controllerAs: 'mic',
    bindings: {
      item: '<'
    }
  });
})();
