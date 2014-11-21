'use strict';

describe('Controller: AdmincontentCtrl', function () {

  // load the controller's module
  beforeEach(module('morrealeWebApp'));

  var AdmincontentCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AdmincontentCtrl = $controller('AdmincontentCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
