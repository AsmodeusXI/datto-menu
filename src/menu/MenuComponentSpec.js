describe('component: menu', function () {
  var component, scope, $componentController;
  var testMenu = [
    {name: 'File', children: [
      {name: 'New File'},
      {name: 'Super File'}
    ] },
    {name: 'Save'},
    {name: 'Open'},
    {name: 'Print'}
  ];

  beforeEach(module('datto-menu'));

  beforeEach(inject(function ($rootScope, _$componentController_) {
    scope = $rootScope.$new();
    $componentController = _$componentController_;
  }));

  it('should instantiate a nested object list', function () {
    component = $componentController('menuComponent',
      null,
      {menu: testMenu}
    );
    expect(component.menu[0].name).toBe('File');
    expect(component.menu[0].children[1].name).toBe('Super File');
  });

});
