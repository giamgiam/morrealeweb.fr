'use strict';

describe('Controller: BasicpageCtrl', function () {

  // load the controller's module
  beforeEach(module('morrealeWebApp'));

  var BasicpageCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BasicpageCtrl = $controller('BasicpageCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
