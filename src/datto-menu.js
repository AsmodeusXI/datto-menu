(function () {
  'use strict';

  angular.module('datto-menu', []).controller('mainCtrl', function () {
    var vm = this;
    vm.greetings = 'Giving this a try!';
    vm.nestedMenus = [
      {name: 'File'},
      {name: 'Open', children: [
        {name: 'Recent'},
        {name: 'Closed'},
        {name: 'Sesame'}
      ]},
      {name: 'Save'},
      {name: 'Print'}
    ];
  });

})();
