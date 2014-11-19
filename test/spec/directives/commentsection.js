'use strict';

describe('Directive: commentSection', function () {

  // load the directive's module
  beforeEach(module('morrealeWebApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<comment-section></comment-section>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the commentSection directive');
  }));
});
