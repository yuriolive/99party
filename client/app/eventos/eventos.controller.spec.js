'use strict';

describe('Component: EventosComponent', function () {

  // load the controller's module
  beforeEach(module('eventos'));

  var EventosComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    EventosComponent = $componentController('EventosComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
