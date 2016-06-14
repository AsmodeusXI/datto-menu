describe('component: menu', function () {
  var component, scope, $componentController;

  beforeEach(module('datto-menu'));

  beforeEach(inject(function ($rootScope, _$componentController_) {
    scope = $rootScope.$new();
    $componentController = _$componentController_;
  }));

  it('should instantiate with some greetings', function () {
    component = $componentController('menuComponent',
      null,
      {message: {hello:'HELLO!'}}
    );
    expect(component.message.hello).toBe('HELLO!');
  });

});
