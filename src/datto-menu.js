(function () {
  'use strict';

  angular.module('datto-menu', []).controller('mainCtrl', function () {
    var vm = this;
    vm.greetings = 'SPIN UP';
    vm.message = {
      hello: 'HELLO!'
    };
  });

})();
