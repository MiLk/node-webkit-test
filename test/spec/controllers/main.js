'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('packageApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });

  it('should attach a list of files to the scope', function () {
    expect(scope.home).toContain('Applications');
  });

  it('should attach a list of numbers to the scope', function () {
    expect(scope.shuffle.length).toBe(6);
  });
});
