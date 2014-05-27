'use strict';

describe('Directive: onGettoBottom', function () {

  // load the directive's module
  beforeEach(module('theinfiniteApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<on-getto-bottom></on-getto-bottom>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the onGettoBottom directive');
  }));
});
