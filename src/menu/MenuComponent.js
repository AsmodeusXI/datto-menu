(function () {
  'use strict';

  angular.module('datto-menu').component('menuComponent', {
    templateUrl: 'menuComponent.html',
    controller: function () {
      console.log(this.menu);
    },
    controllerAs: 'mcc',
    bindings: {
      menu: '<'
    }
  });

})();
